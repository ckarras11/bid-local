import {
	SET_MESSAGE,
	SET_CURRENT_USER,
	SET_NEW_SIGNUP,
	TOGGLE_MODAL,
	SET_UPLOAD,
	UPLOAD_ITEM_SUCCESS
} from './actions';

const initialState = {
	message: '',
	user: {},
	upload: {},
	isAuthenticated: false,
	newSignup: '',
	showModal: false,
	newItem: {}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_MODAL:
			state = Object.assign({}, state, {
				showModal: !state.showModal
			});
			return state;
		case SET_MESSAGE:
			state = Object.assign({}, state, {
				message: action.msg
			});
			return state;
		case SET_UPLOAD:
			state = Object.assign({}, state, {
				upload: action.upload
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
		case UPLOAD_ITEM_SUCCESS:
			state = Object.assign({}, state, {
				newItem: action.item,
				showModal: false
			});
			return state;
		default:
			return state;
	}
};

export default reducer;
