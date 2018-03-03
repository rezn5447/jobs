import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ReviewScreen extends Component {
	static navigationOptions = {};
	constructor(props) {
		super(props);

		this.state = { text: 'whoop whoop' };
	}
	render() {
		return (
			<View>
				<Text>{this.state.text}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
