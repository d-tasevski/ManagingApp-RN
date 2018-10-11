import React, { Component } from 'react';
import { Picker, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { createEmployee } from '../actions';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import Button from './common/Button';

export class EmployeeCreate extends Component {
	state = {
		name: '',
		phone: '',
		shift: 'wednesday',
	};

	onNameChange = name => this.setState({ name });
	onPhoneChange = phone => this.setState({ phone });
	onShiftChange = shift => this.setState({ shift });
	onPress = () => {
		this.props.createEmployee({ ...this.state });
		this.setState(
			{
				name: '',
				phone: '',
				shift: 'wednesday',
			},
			() => Actions.pop()
		);
	};

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Name"
						placeholder="Employee name"
						value={this.state.name}
						onChange={this.onNameChange}
					/>
				</CardSection>
				<CardSection>
					<Input
						label="Phone"
						placeholder="111-111-1111"
						value={this.state.phone}
						onChange={this.onPhoneChange}
					/>
				</CardSection>
				<CardSection style={{ borderBottomWidth: 0 }}>
					<Text style={styles.pickerLabel}>Select Shift</Text>
				</CardSection>
				<CardSection>
					<Picker
						style={{ flex: 1 }}
						selectedValue={this.state.shift}
						onValueChange={this.onShiftChange}
					>
						<Picker.Item label="Monday" value="Monday" />
						<Picker.Item label="Tuesday" value="tuesday" />
						<Picker.Item label="Wednesday" value="wednesday" />
						<Picker.Item label="Thursday" value="thursday" />
						<Picker.Item label="Friday" value="friday" />
						<Picker.Item label="Saturday" value="saturday" />
					</Picker>
				</CardSection>
				<CardSection>
					<Button text="Save" onPress={this.onPress} />
				</CardSection>
			</Card>
		);
	}
}

const styles = StyleSheet.create({
	pickerLabel: {
		fontSize: 18,
		paddingLeft: 20,
		color: '#777',
	},
});

export default connect(
	null,
	{ createEmployee }
)(EmployeeCreate);
