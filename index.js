
/**
* @file index.js
* @author Kjetil Fossheim
 * Entry point for the app. Sets the router up with redux store.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// main routes
import AppRoutes from './routes';

import store from './store';

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
}

ReactDOM.render(
	<Provider store={store}>
		<AppRoutes />
	</Provider>,
	document.getElementById('app')
)
