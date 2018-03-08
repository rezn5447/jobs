import React, { Component } from 'react';
import { View, Text, StyleSheet, Linking, Platform } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { MapView } from 'expo';

import * as actions from '../actions';

class ReviewScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
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
	});

	renderLikes() {
		return this.props.likes.map(job => {
			const { company, formattedRelativeTime, url, latitude, longitude } = job;
			const intitalRegion = {
				longitude,
				latitude,
				longitudeDelta: 0.045,
				latitudeDelta: 0.02
			};
			return (
				<Card>
					<View style={{ height: 200 }}>
						<MapView
							style={{ flex: 1 }}
							cacheEnabled={Platform.OS === 'android'}
							scrollEnabled={false}
							intitialRegion={intitalRegion}
						/>
						<View style={styles.detailWrapper}>
							<Text style={styles.italics}>{company}</Text>
							<Text style={styles.italics}>{formattedRelativeTime}</Text>
						</View>
						<Button
							title="Apply Now!"
							backgroundColor="#03A9F4"
							onPress={() => Linking.openURL(url)}
						/>
					</View>
				</Card>
			);
		});
	}
	render() {
		return <View style={styles.container}>{this.renderLikes()}</View>;
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

const mapStateToProps = ({ likes }) => ({ likes });

export default connect(mapStateToProps, actions)(ReviewScreen);
