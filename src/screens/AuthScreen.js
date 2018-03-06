import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

export default class AuthScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>I'm the AuthScreen component</Text>
				<Text>I'm the AuthScreen component</Text>
				<Text>I'm the AuthScreen component</Text>
				<Text>I'm the AuthScreen component</Text>
				<Text>I'm the AuthScreen component</Text>
			</View>
		);
	}
}
