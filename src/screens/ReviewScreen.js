import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ReviewScreen extends Component {
	render() {
		return (
			<View>
				<Text>I'm the ReviewScreen component</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
