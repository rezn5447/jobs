import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
	componentDidMount = () => {
		this.props.facebookLogin();
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>I'm the AuthScreen component</Text>
				<Text>I'm the AuthScreen component</Text>
				<Text>I'm the AuthScreen component</Text>
				<Text>I'm the AuthScreen component</Text>
				<Text>I'm the AuthScreen component</Text>
			</View>
		);
	}
}

styles = {
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
};

mapStateToProps = ({ auth }) => {
	return { token: auth.token };
};
export default connect(null, actions)(AuthScreen);
