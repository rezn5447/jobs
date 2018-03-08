import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import { connect } from 'react-redux';
import { clearLikedJobs } from '../actions';

class SettingsScreen extends Component {
	static navigationOptions = {
		title: 'Back to Review',
		headerStyle: {
			marginTop: Platform.OS === 'android' ? 24 : 0
		},
		tabBarIcon: ({ tintColor }) => (
			<Icon name="arrow-back" size={30} color={tintColor} />
		)
	};

	render() {
		return (
			<View style={{ marginTop: 20 }}>
				<Button
					title="Reset Liked Jobs"
					large
					icon={{ name: 'delete-forever' }}
					backgroundColor="#F44336"
					onPress={this.props.clearLikedJobs}
				/>
			</View>
		);
	}
}

export default connect(null, { clearLikedJobs })(SettingsScreen);
