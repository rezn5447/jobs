import React, { Component } from 'react';
import { View, Text, BackHandler, ToastAndroid } from 'react-native';

export default class MapScreen extends Component {
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
				<Text>I'm the MapScreen component</Text>
				<Text>I'm the MapScreen component</Text>
				<Text>I'm the MapScreen component</Text>
				<Text>I'm the MapScreen component</Text>
				<Text>I'm the MapScreen component</Text>
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
