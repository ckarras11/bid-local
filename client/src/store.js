import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import reducer from './reducer';
import {reducer as formReducer} from 'redux-form';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    reducer,
    form: formReducer,
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;