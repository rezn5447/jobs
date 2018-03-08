import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import {
	AuthScreen,
	WelcomeScreen,
	MapScreen,
	DeckScreen,
	SettingsScreen,
	ReviewScreen
} from './src/screens';
import store from './src/store';

export default class App extends Component {
	render() {
		const MainNavigator = TabNavigator(
			{
				welcome: { screen: WelcomeScreen },
				auth: { screen: AuthScreen },
				main: {
					screen: TabNavigator(
						{
							map: { screen: MapScreen },
							deck: { screen: DeckScreen },
							review: {
								screen: StackNavigator({
									review: { screen: ReviewScreen },
									settings: { screen: SettingsScreen }
								})
							}
						},
						{
							tabBarOptions: {
								labelStyle: { fontSize: 12 }
							}
						}
					)
				}
			},
			{
				navigationOptions: {
					tabBarVisible: false
				},
				lazy: true
			}
		);

		return (
			<Provider store={store}>
				<MainNavigator />
			</Provider>
		);
	}
}
