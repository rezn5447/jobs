import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
	componentDidMount = () => {
		this.props.facebookLogin();
	};

	render() {
		return (
			<View>
				<Text>I'm the AuthScreen component</Text>
				<Text>I'm the AuthScreen component</Text>
				<Text>I'm the AuthScreen component</Text>
				<Text>I'm the AuthScreen component</Text>
				<Text>I'm the AuthScreen component</Text>
			</View>
		);
	}
}

export default connect(null, actions)(AuthScreen);
