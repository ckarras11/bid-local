import axios from 'axios';
import setAuthorizationToken from './utils/setAuthToken';
import jwt from 'jsonwebtoken';

export const HANDLE_LOGIN_ERRORS = 'HANDLE_LOGIN_ERRORS';
export const handleLoginErrors = err => ({
    type: HANDLE_LOGIN_ERRORS,
    err,
});

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    user,
});


export const login = data => dispatch => {
    return axios.post('/api/auth', data)
    .then(response => {
        const token = response.data.token;
        sessionStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
        const user = jwt.decode(token);
        dispatch(setCurrentUser(user))
    })
    .catch(err => {
        dispatch(handleLoginErrors(err.response.data));
    })
}