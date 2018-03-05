import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Slides } from '../components';

const SLIDE_DATA = [
	{ text: 'Welcome to JobApp' },
	{ text: 'Set your Location, then swipe away' }
];

export default class WelcomeScreen extends Component {
	render() {
		return <Slides data={SLIDE_DATA} />;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 20
	}
});
