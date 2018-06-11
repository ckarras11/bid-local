import {
    HANDLE_LOGIN_ERRORS, 
    SET_CURRENT_USER
} from './actions';


const initialState = {
    errorMsg: '',
    username: '',
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
            break;
        case SET_CURRENT_USER:
            console.log(action.user)
            state = Object.assign({}, state, {
                errorMsg: '',
                username: action.user.username,
                isAuthenticated: true
            });
            return state;
            break;
    }
    return state;
};

export default reducer;
