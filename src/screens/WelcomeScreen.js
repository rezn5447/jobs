import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Slides } from '../components';

const SLIDE_DATA = [
	{ text: 'Welcome to JobApp', color: '#03A8F4' },
	{ text: 'Use this to get a job', color: '#009688' },
	{ text: 'Set your Location, then swipe away', color: '#03A8F4' }
];

export default class WelcomeScreen extends Component {
	onSlidesComplete = () => {
		this.props.navigation.navigate('main');
		alert('completed!!!');
	};
	render() {
		return <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 20
	}
});
