import React, { Component } from 'react';
import {
	ScrollView,
	View,
	Text,
	StyleSheet,
	Linking,
	Platform
} from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { MapView } from 'expo';

import * as actions from '../actions';

class ReviewScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: Platform.OS === 'android' ? 'Review Jobs' : 'Bloop',
		tabBarIcon: ({ tintColor }) => (
			<Icon name="favorite" size={30} color={tintColor} />
		),
		headerStyle: {
			marginTop: Platform.OS === 'android' ? 24 : 0
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
			const {
				company,
				formattedRelativeTime,
				url,
				latitude,
				longitude,
				jobtitle,
				jobkey
			} = job;
			const intitalRegion = {
				longitude,
				latitude,
				longitudeDelta: 0.045,
				latitudeDelta: 0.02
			};
			return (
				<Card title={jobtitle} key={jobkey}>
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
		return (
			<ScrollView style={styles.container}>{this.renderLikes()}</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	detailWrapper: {
		marginTop: 10,
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
