import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import {setCurrentUser} from './actions';
import jwt from 'jsonwebtoken';
import './styles/index.css';
import App from './components/App';
import setAuthorizationToken from './utils/setAuthToken';

if (sessionStorage.jwtToken) {
	setAuthorizationToken(sessionStorage.jwtToken);
	store.dispatch(setCurrentUser(jwt.decode(sessionStorage.jwtToken)));
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

