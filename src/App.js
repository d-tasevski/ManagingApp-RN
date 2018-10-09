import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';

import config from './config';
import { setUser } from './actions';

import LoginForm from './components/LoginForm';
import Header from './components/common/Header';

class App extends Component {
	componentDidMount() {
		firebase.initializeApp(config.firebaseConfig);
		firebase.auth().onAuthStateChanged(user => {
			if (!user) return this.props.setUser({});

			this.props.setUser(user);
		});
	}

	logoutUser = () => firebase.auth().signOut();

	render() {
		return (
			<View>
				<Header text="E-Manager" />
				<LoginForm />
			</View>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	setUser: user => dispatch(setUser(user)),
});

export default connect(
	null,
	{ setUser }
)(App);
