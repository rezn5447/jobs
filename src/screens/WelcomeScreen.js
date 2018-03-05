import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Slides } from '../components';

export default class WelcomeScreen extends Component {
	render() {
		return <Slides />;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 20
	}
});
