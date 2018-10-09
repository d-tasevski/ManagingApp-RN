import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

import { emailChanged, passChanged, requestAuth } from '../actions';

import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import Button from './common/Button';
import Spinner from './common/Spinner';

export class LoginForm extends Component {
	onEmailChange = text => this.props.emailChanged(text);
	onPassChange = text => this.props.passChanged(text);
	onPress = () => this.props.requestAuth(this.props.auth.email, this.props.auth.password);

	render() {
		const {
			auth: { password, email, error, isLoading },
		} = this.props;

		console.log(error);

		return (
			<Card>
				<CardSection>
					<Input
						label="Email"
						placeholder="mail@mailbox.com"
						onChange={this.onEmailChange}
						value={email}
					/>
				</CardSection>
				<CardSection>
					<Input
						label="Password"
						placeholder="*********"
						secure
						onChange={this.onPassChange}
						value={password}
					/>
				</CardSection>
				<CardSection>
					{isLoading ? <Spinner /> : <Button text="Submit" onPress={this.onPress} />}
				</CardSection>
				<Text style={styles.errorText}>{error}</Text>
			</Card>
		);
	}
}

const styles = StyleSheet.create({
	errorText: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red',
		marginTop: 5,
	},
});

const mapStateToProps = ({ auth }) => ({
	auth,
});

const mapDispatchToProps = dispatch => ({
	emailChanged: text => dispatch(emailChanged(text)),
	passChanged: text => dispatch(passChanged(text)),
	requestAuth: (email, pass) => dispatch(requestAuth(email, pass)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginForm);
