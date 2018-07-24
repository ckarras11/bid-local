import axios from 'axios';
import setAuthorizationToken from './utils/setAuthToken';
import jwt from 'jsonwebtoken';

export const SET_MESSAGE = 'SET_MESSAGE';
export const setMessage = msg => ({
	type: SET_MESSAGE,
	msg
});

// Toggles the modal on and off, also determines the modal to display
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const toggleModal = () => ({
	type: TOGGLE_MODAL
});

export const SET_UPLOAD = 'SET_UPLOAD';
export const setUpload = upload => ({
	type: SET_UPLOAD,
	upload
});
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const setCurrentUser = user => ({
	type: SET_CURRENT_USER,
	user
});

export const SET_NEW_SIGNUP = 'SET_NEW_SIGNUP';
export const setNewSignup = email => ({
	type: SET_NEW_SIGNUP,
	email
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
			dispatch(setMessage(err.response.data.errors));
		});
};

export const register = data => dispatch => {
	return axios
		.post('/api/register', data)
		.then(res => {
			dispatch(setNewSignup(res.data.newUser));
		})
		.catch(err => {
			dispatch(setMessage(err.response.data.errors));
		});
};

export const postItem = data => dispatch => {
	console.log(data);
};

export const logout = dispatch => {
	sessionStorage.removeItem('jwtToken');
	setAuthorizationToken(false);
	dispatch(setCurrentUser({}));
};
