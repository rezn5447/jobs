import React, { Component } from 'react';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
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
								activeTintColor: '#03A9F4',
								inactiveTintColor: 'gray'
							},
							labelStyle: { fontSize: 12 },
							tabBarComponent: TabBarBottom,
							tabBarPosition: 'bottom',
							animationEnabled: false,
							swipeEnabled: false
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
