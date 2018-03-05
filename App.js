import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import {
	AuthScreen,
	WelcomeScreen,
	MapScreen,
	DeckScreen,
	SettingsScreen,
	ReviewScreen
} from './src/screens';
import { Provider } from 'react-redux';
import store from './store';

export default class App extends Component {
	render() {
		const MainNavigator = TabNavigator({
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
		});

		return (
			<Provider store={store}>
				<MainNavigator />
			</Provider>
		);
	}
}
