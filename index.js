import React from 'react';
import { AppRegistry } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import App from './src/App';
import rootReducer from './src/reducers';
import { name as appName } from './app.json';

const store = createStore(rootReducer, applyMiddleware(thunk));

const Root = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

AppRegistry.registerComponent(appName, () => Root);
