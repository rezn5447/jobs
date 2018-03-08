import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
	componentDidMount = () => {
		this.props.facebookLogin();
		this.onAuthComplete(this.props);
	};

	componentWillReceiveProps = nextProps => {
		this.onAuthComplete(nextProps);
	};

	onAuthComplete = props => {
		if (props.token) {
			this.props.navigation.navigate('map');
		}
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

const styles = {
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
};

const mapStateToProps = ({ auth }) => ({ token: auth.token });

export default connect(mapStateToProps, actions)(AuthScreen);
