import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class DeckScreen extends Component {
	render() {
		return (
			<View>
				<Text>I'm the DeckScreen component</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
