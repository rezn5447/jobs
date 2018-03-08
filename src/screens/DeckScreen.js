import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button, Icon } from 'react-native-elements';
import Swipe from '../components/Swipe';
import * as actions from '../actions';

class DeckScreen extends Component {
	static navigationOptions = {
		title: 'Deck',
		tabBarIcon: ({ tintColor }) => (
			<Icon name="my-location" size={30} color={tintColor} />
		)
	};
	renderCard(job) {
		const intitalRegion = {
			longitude: job.longitude,
			latitude: job.latitude,
			latitudeDelta: 0.045,
			longitudeDelta: 0.02
		};
		return (
			<Card title={job.jobtitle}>
				<View style={{ height: 300 }}>
					<MapView
						scrollEnabled={false}
						style={{ flex: 1 }}
						cacheEnabled={Platform.OS === 'android'}
						intitialRegion={intitalRegion}
					/>
				</View>
				<View style={styles.detailWrapper}>
					<Text>{job.company}</Text>
					<Text>{job.formattedRelativeTime}</Text>
				</View>
				<Text>{job.snippet.replace(/<b>/g, '').replace(/<\/b/g, '')}</Text>
			</Card>
		);
	}

	renderNoMoreCards = () => (
		<Card title="No More Jobs">
			<Button
				title="Back to Map"
				large
				icon={{ name: 'my-location' }}
				backgroundColor="#03A9F4"
				onPress={() => this.props.navigation.navigate('map')}
			/>
		</Card>
	);

	render() {
		return (
			<View style={styles.container}>
				<Swipe
					data={this.props.jobs}
					renderCard={this.renderCard}
					renderNoMoreCards={this.renderNoMoreCards}
					onSwipeRight={job => this.props.likeJob(job)}
					keyProp="jobkey"
				/>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		marginTop: 10
	},
	detailWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: 10
	}
};

const mapStateToProps = ({ jobs }) => ({ jobs: jobs.results });

export default connect(mapStateToProps, actions)(DeckScreen);
