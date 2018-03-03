import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { AuthScreen, WelcomeScreen } from './src/screens';

export default class App extends Component {
	render() {
		const MainNavigator = TabNavigator(
			{
				welcome: { screen: WelcomeScreen },
				auth: { screen: AuthScreen }
			},
			{
				tabBarPosition: 'bottom'
			}
		);

		return <MainNavigator />;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
