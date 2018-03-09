import React, { Component } from 'react';
import { Notifications } from 'expo';
import { Alert } from 'react-native';
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
import registerForNotifications from './src/services/push_notifications';

import store from './src/store';

export default class App extends Component {
	componentDidMount() {
		registerForNotifications();
		Notifications.addListener(notification => {
			const { data: { text } } = notification;

			if (notification.origin === 'recieved' && text) {
				Alert.alert('New Push Notification', text, [{ text: 'Ok' }]);
			}
		});
	}

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
					tabBarVisible: false,
					backBehavior: 'none'
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
