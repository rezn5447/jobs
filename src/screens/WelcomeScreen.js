import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class WelcomeScreen extends Component {
	render() {
		return (
			<View>
				<Text>I'm the WelcomeScreen component</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
