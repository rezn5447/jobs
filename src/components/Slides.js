import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Slides extends Component {
	renderSlides() {
		return this.props.data.map(slide => {
			return (
				<View key={slide.text} style={styles.slide}>
					<Text style={styles.text}>{slide.text}</Text>
				</View>
			);
		});
	}

	render() {
		return (
			<ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
				{this.renderSlides()}
			</ScrollView>
		);
	}
}

const styles = {
	slide: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: SCREEN_WIDTH
	},
	text: {
		fontSize: 30
	}
};
