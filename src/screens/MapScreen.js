import React, { Component } from 'react';
import { View, Text, BackHandler, ToastAndroid } from 'react-native';
import { MapView } from 'expo';

export default class MapScreen extends Component {
	state = {
		region: {
			longitude: -122,
			latitude: 37,
			longitudeDelta: 0.04,
			latitudeDelta: 0.09
		}
	};

	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
	}

	handleBackButton() {
		ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
		return true;
	}

	render() {
		return (
			<View style={styles.container}>
				<MapView region={this.state.region} style={{ flex: 1 }} />
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
};
