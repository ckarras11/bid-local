import { SET_MESSAGE, SET_CURRENT_USER, SET_NEW_SIGNUP } from './actions';

const initialState = {
	message: '',
	user: {},
	isAuthenticated: false,
	newSignup: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MESSAGE:
			state = Object.assign({}, state, {
				message: action.msg
			});
			return state;
		case SET_CURRENT_USER:
			state = Object.assign({}, state, {
				message: '',
				user: action.user,
				isAuthenticated: true,
				newSignup: ''
			});
			return state;
		case SET_NEW_SIGNUP:
			state = Object.assign({}, state, {
				message: 'User Created',
				isAuthenticated: false,
				newSignup: action.email
			});
			return state;
		default:
			return state;
	}
};

export default reducer;
