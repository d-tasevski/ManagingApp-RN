import types from '../types';

const initialState = {
	data: [],
	isLoading: false,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.CREATE_EMPLOYEE:
			return { ...state };
		case types.FETCH_EMPLOYEES:
			return { ...state, isLoading: true, error: null };
		case types.FETCH_EMPLOYEES_SUCCESS:
			return { ...state, data: action.payload, isLoading: false };
		case types.FETCH_EMPLOYEES_FAILURE:
			return { ...state, error: action.payload, isLoading: false };
		default:
			return state;
	}
};
