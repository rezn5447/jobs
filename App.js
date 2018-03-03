import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import {
	AuthScreen,
	WelcomeScreen,
	MapScreen,
	DeckScreen,
	SettingsScreen,
	ReviewScreen
} from './src/screens';

export default class App extends Component {
	render() {
		const MainNavigator = TabNavigator(
			{
				welcome: { screen: WelcomeScreen },
				auth: { screen: AuthScreen },
				main: {
					screen: TabNavigator({
						map: { screen: MapScreen },
						deck: { screen: DeckScreen },
						review: {
							screen: StackNavigator({
								review: { screen: ReviewScreen },
								settings: { screen: SettingsScreen }
							})
						}
					})
				}
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
