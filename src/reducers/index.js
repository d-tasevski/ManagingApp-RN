import { combineReducers } from 'redux';

import auth from './auth';

const rootReducer = combineReducers({
	data: () => [],
	auth,
});

export default rootReducer;
