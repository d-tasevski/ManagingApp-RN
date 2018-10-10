import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = ({ children, style }) => (
	<View style={[styles.container, style]}>{children}</View>
);

const styles = StyleSheet.create({
	container: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
	},
});

export default CardSection;
