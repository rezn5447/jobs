import React, { Component } from 'react';
import {
	View,
	Text,
	BackHandler,
	ToastAndroid,
	ActivityIndicator
} from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';

import * as actions from '../actions';

class MapScreen extends Component {
	state = {
		mapLoaded: false,
		region: {
			longitude: -122,
			latitude: 37,
			longitudeDelta: 0.04,
			latitudeDelta: 0.09
		}
	};

	componentDidMount = () => {
		this.setState({ mapLoaded: true });
		BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
	};

	componentWillUnmount = () => {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
	};

	handleBackButton = () => {
		ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
		return true;
	};

	onRegionChangeComplete = region => {
		console.log(region);
		this.setState({ region });
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
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1
	}
};

export default connect(null, actions)(MapScreen);
