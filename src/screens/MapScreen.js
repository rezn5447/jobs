import React, { Component } from 'react';
import { View, Alert, BackHandler, ActivityIndicator } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { MapView } from 'expo';
import { connect } from 'react-redux';

import * as actions from '../actions';

class MapScreen extends Component {
	static navigationOptions = {
		title: 'Jobs',
		tabBarIcon: ({ tintColor }) => (
			<Icon name="my-location" size={30} color={tintColor} />
		)
	};

	state = {
		mapLoaded: false,
		region: {
			longitude: -122,
			latitude: 37,
			longitudeDelta: 0.04,
			latitudeDelta: 2
		}
	};

	componentDidMount = () => {
		this.setState({ mapLoaded: true });
		BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
	};

	componentWillUnmount = () => {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
	};

	onRegionChangeComplete = region => {
		this.setState({ region });
	};

	onButtonPress = () => {
		this.props.fetchJobs(this.state.region, () => {
			this.props.navigation.navigate('deck');
		});
	};

	handleBackButton = () => {
		Alert.alert(
			'Exit App',
			'Exiting the application?',
			[
				{
					text: 'Cancel',
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel'
				},
				{
					text: 'OK',
					onPress: () => BackHandler.exitApp()
				}
			],
			{
				cancelable: false
			}
		);
		return true;
	};

	render() {
		if (!this.state.mapLoaded) {
			return (
				<View style={{ flex: 1, justifyContent: 'center' }}>
					<ActivityIndicator size="large" />
				</View>
			);
		}

		return (
			<View style={styles.container}>
				<MapView
					region={this.state.region}
					style={{ flex: 1 }}
					onRegionChangeComplete={this.onRegionChangeComplete}
				/>
				<View style={styles.buttonContainer}>
					<Button
						large
						title="Search this area"
						backgroundColor="#03A9F4"
						icon={{ name: 'search' }}
						onPress={this.onButtonPress}
					/>
				</View>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1
	},
	buttonContainer: {
		position: 'absolute',
		bottom: 20,
		left: 0,
		right: 0
	}
};

export default connect(null, actions)(MapScreen);
