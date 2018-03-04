import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Button } from 'react-native-elements';

export default class ReviewScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: Platform.OS === 'android' ? 'Review Jobs' : 'Bloop',
			headerStyle: {
				marginTop: Platform.OS === 'android' ? 10 : 0
			},
			headerRight: (
				<Button
					title="Settings"
					onPress={() => {
						navigation.navigate('settings');
					}}
					backgroundColor="rgba(0,0,0,0)"
					color="rgba(0,122,255,1)"
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
