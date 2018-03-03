import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AuthScreen extends Component {
	render() {
		return (
			<View>
				<Text>I'm the AuthScreen component</Text>
				<Text>I'm the AuthScreen component</Text>
				<Text>I'm the AuthScreen component</Text>
				<Text>I'm the AuthScreen component</Text>
				<Text>I'm the AuthScreen component</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
