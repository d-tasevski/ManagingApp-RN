import types from '../types';

const initialState = {
	email: '',
	password: '',
	isLoading: false,
	user: {},
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case types.PASS_CHANGED:
			return { ...state, password: action.payload };
		case types.REQ_AUTH:
			return { ...state, isLoading: true, error: null };
		case types.AUTH_SUCCESS:
			return { ...initialState, user: action.payload };
		case types.SET_USER:
			return { ...state, isLoading: false, user: action.payload };
		case types.AUTH_ERROR:
			return {
				...initialState,
				email: state.email,
				error: 'Authorization Error',
			};
		default:
			return state;
	}
};
