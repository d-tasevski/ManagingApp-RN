import React from 'react';
import { Modal, Text, View, StyleSheet } from 'react-native';

import Button from './Button';
import CardSection from './CardSection';

const ConfirmModal = ({ visible, children, onAccept, onDecline }) => {
	return (
		<Modal visible={visible} animationType="slide" transparent onRequestClose={() => null}>
			<View style={styles.container}>
				<CardSection style={styles.cardSection}>
					<Text style={styles.text}>{children}</Text>
				</CardSection>
				<CardSection>
					<Button onPress={onAccept} text="Yes" />
					<Button onPress={onDecline} text="No" />
				</CardSection>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	cardSection: {
		justifyContent: 'center',
	},
	text: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		lineHeight: 40,
	},
	container: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
		position: 'relative',
		flex: 1,
		justifyContent: 'center',
	},
});

export default ConfirmModal;
