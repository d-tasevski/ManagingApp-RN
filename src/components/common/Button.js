import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ text, onPress }) => (
	<TouchableOpacity onPress={onPress} style={styles.button}>
		<Text style={styles.buttonText}>{text}</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	button: {
		alignSelf: 'center',
		backgroundColor: '#E31C23',
		borderColor: '#E31C23',
		borderRadius: 5,
		borderWidth: 1,
		flex: 1,
		marginLeft: 5,
		marginRight: 5,
	},
	buttonText: {
		alignSelf: 'center',
		color: '#fff',
		fontSize: 16,
		fontWeight: '600',
		paddingBottom: 10,
		paddingTop: 10,
	},
});

export default Button;
