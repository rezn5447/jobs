import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import _ from 'lodash';
import { AppLoading } from 'expo';

import { Slides } from '../components';

const SLIDE_DATA = [
	{ text: 'Welcome to JobApp', color: '#03A8F4' },
	{ text: 'Use this to get a job', color: '#009688' },
	{ text: 'Set your Location, then swipe away', color: '#03A8F4' }
];

export default class WelcomeScreen extends Component {
	state = { token: null };

	componentWillMount = async () => {
		const token = await AsyncStorage.getItem('fb_token');

		if (token) {
			this.props.navigation.navigate('map');

			this.setState({ token });
		} else {
			this.setState({ token: false });
		}
	};

	onSlidesComplete = () => {
		this.props.navigation.navigate('auth');
	};

	render() {
		if (_.isNull(this.state.token)) {
			return <AppLoading />;
		}

		return <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />;
	}
}
