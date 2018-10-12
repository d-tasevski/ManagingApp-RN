import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Spinner = ({ size = 'large' }) => (
	<View style={styles.spinner}>
		<ActivityIndicator animating size={size} />
	</View>
);

const styles = StyleSheet.create({
	spinner: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Spinner;
