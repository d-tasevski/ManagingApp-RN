import React, { Component } from 'react';
import { Picker, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Communications from 'react-native-communications';

import { createEmployee, updateEmployee } from '../actions';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import Button from './common/Button';

export class EmployeeCreate extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: props.employee ? props.employee.name : '',
			phone: props.employee ? props.employee.phone : '',
			shift: props.employee ? props.employee.shift : 'Wednesday',
		};
	}

	onNameChange = name => this.setState({ name });
	onPhoneChange = phone => this.setState({ phone });
	onShiftChange = shift => this.setState({ shift });
	onPress = () => {
		if (this.props.employee) {
			this.props.updateEmployee({ ...this.state, id: this.props.employee.id });
		} else {
			this.props.createEmployee({ ...this.state });
		}
		return this.setState(
			{
				name: '',
				phone: '',
				shift: 'Wednesday',
			},
			() => Actions.pop()
		);
	};
	sendText = () => {
		const { phone, shift } = this.state;
		return Communications.text(phone, `Your upcoming shift is on ${shift}. C ya!`);
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
						<Picker.Item label="Tuesday" value="Tuesday" />
						<Picker.Item label="Wednesday" value="Wednesday" />
						<Picker.Item label="Thursday" value="Thursday" />
						<Picker.Item label="Friday" value="Friday" />
						<Picker.Item label="Saturday" value="Saturday" />
					</Picker>
				</CardSection>
				<CardSection>
					<Button
						text={this.props.employee ? 'Save Changes' : 'Create employee'}
						onPress={this.onPress}
					/>
				</CardSection>
				<CardSection>
					<Button text="Text Shift" onPress={this.sendText} />
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
	{ createEmployee, updateEmployee }
)(EmployeeCreate);
