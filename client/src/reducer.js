import {
    HANDLE_LOGIN_ERRORS, 
    SET_CURRENT_USER
} from './actions';


const initialState = {
    errorMsg: '',
    user: {},
    isAuthenticated: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_LOGIN_ERRORS:
            state = Object.assign({}, state, {
                errorMsg: action.err.errors,
                isAuthenticated: false
            });
            return state;
        case SET_CURRENT_USER:
            state = Object.assign({}, state, {
                errorMsg: '',
                user: action.user,
                isAuthenticated: true
            });
            console.log(state)
            return state;
        default:
            return state;
    }
};

export default reducer;
