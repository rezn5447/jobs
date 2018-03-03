import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MapScreen extends Component {
	render() {
		return (
			<View>
				<Text>I'm the MapScreen component</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
