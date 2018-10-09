import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = ({ text }) => (
	<View style={styles.viewStyle}>
		<Text style={styles.textStyle}>{text}</Text>
	</View>
);

const styles = StyleSheet.create({
	viewStyle: {
		backgroundColor: '#f8f8f8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 20,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative',
	},
	textStyle: {
		fontSize: 20,
	},
});

export default Header;
