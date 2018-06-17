import axios from 'axios';
import setAuthorizationToken from './utils/setAuthToken';
import jwt from 'jsonwebtoken';

export const HANDLE_LOGIN_ERRORS = 'HANDLE_LOGIN_ERRORS';
export const handleLoginErrors = err => ({
	type: HANDLE_LOGIN_ERRORS,
	err
});

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const setCurrentUser = user => ({
	type: SET_CURRENT_USER,
	user
});

export const login = data => dispatch => {
	return axios
		.post('/api/auth', data)
		.then(res => {
			const token = res.data.token;
			sessionStorage.setItem('jwtToken', token);
			setAuthorizationToken(token);
			const user = jwt.decode(token);
			dispatch(setCurrentUser(user));
		})
		.catch(err => {
			dispatch(handleLoginErrors(err.res.data));
		});
};

export const register = data => dispatch => {
	return axios.post('/api/register', data).then(res => {
		console.log(res);
	});
};

export const logout = dispatch => {
	sessionStorage.removeItem('jwtToken');
	setAuthorizationToken(false);
	dispatch(setCurrentUser({}));
};
