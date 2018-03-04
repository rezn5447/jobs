import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class ReviewScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Review Jobs',
			headerRight: (
				<Button
					title="Settings"
					onPress={() => {
						navigation.navigate('settings');
					}}
				/>
			)
		};
	};

	render() {
		return (
			<View style={styles.container}>
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
