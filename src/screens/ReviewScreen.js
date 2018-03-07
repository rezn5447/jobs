import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';

import * as actions from '../actions';

class ReviewScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: Platform.OS === 'android' ? 'Review Jobs' : 'Bloop',
			headerStyle: {
				marginTop: Platform.OS === 'android' ? 10 : 0
			},
			headerRight: (
				<Button
					title="Settings"
					onPress={() => {
						navigation.navigate('settings');
					}}
					backgroundColor="rgba(0,0,0,0)"
					color="rgba(0,122,255,1)"
				/>
			)
		};
	};

	renderLikes() {
		return this.props.likes.map(job => {
			return (
				<Card>
					<View style={{ height: 200 }}>
						<View style={styles.detailWrapper}>
							<Text style={styles.italics}>{job.company}</Text>
							<Text style={styles.italics}>{job.formattedRelativeTime}</Text>
						</View>
					</View>
				</Card>
			);
		});
	}
	render() {
		return (
			<View style={styles.container}>
				<Text>I'm the ReviewScreen component</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	detailWrapper: {
		marginBottom: 10,
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	italics: {
		fontStyle: 'italic'
	}
});

mapStateToProps = ({ likes }) => {
	return { likes };
};

export default connect(mapStateToProps, actions)(ReviewScreen);
