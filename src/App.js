import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import config from './config';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export class App extends Component {
	state = {
		isLoggedIn: null,
	};

	componentDidMount() {
		firebase.initializeApp(config.firebaseConfig);

		firebase.auth().onAuthStateChanged(user => {
			if (!user) return this.setState({ isLoggedIn: false });

			this.setState({ isLoggedIn: true });
		});
	}

	logoutUser = () => firebase.auth().signOut();

	render() {
		return (
			<Provider store={store}>
				<View>
					<Text>Manager</Text>
				</View>
			</Provider>
		);
	}
}

export default App;
