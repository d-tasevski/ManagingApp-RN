import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';

import config from './config';
import { setUser } from './actions';
import Router from './Router';

class App extends Component {
	componentDidMount() {
		firebase.initializeApp(config.firebaseConfig);
	}

	render() {
		return <Router />;
	}
}

export default connect(
	null,
	{ setUser }
)(App);
