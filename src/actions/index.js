import { auth } from 'firebase';
import { Actions } from 'react-native-router-flux';

import types from '../types';

export const emailChanged = text => ({
	type: types.EMAIL_CHANGED,
	payload: text,
});

export const passChanged = text => ({
	type: types.PASS_CHANGED,
	payload: text,
});

requestAuthSuccess = user => {
	Actions.employeeList();

	return {
		type: types.AUTH_SUCCESS,
		payload: user,
	};
};

requestAuthFailure = () => ({
	type: types.AUTH_ERROR,
});

export const requestAuth = (email, password) => dispatch => {
	dispatch({ type: types.REQ_AUTH });
	return auth()
		.signInWithEmailAndPassword(email, password)
		.then(user => dispatch(requestAuthSuccess(user)))
		.catch(() =>
			auth()
				.createUserWithEmailAndPassword(email, password)
				.then(user => dispatch(requestAuthSuccess(user)))
				.catch(() => dispatch(requestAuthFailure()))
		);
};

export const setUser = user => ({
	type: types.SET_USER,
	user,
});

export const logoutUser = () => auth().signOut();
