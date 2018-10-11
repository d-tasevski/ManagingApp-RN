import { combineReducers } from 'redux';

import auth from './auth';
import employees from './employees';

const rootReducer = combineReducers({
	employees,
	auth,
});

export default rootReducer;
