import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';

const {
    registerSuccess, 
    registerError,
    loginSuccess,
    loginError,
    } = authActions;

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
    [registerSuccess]: (_, {payload}) => payload.user,
    [loginSuccess]: (_, {payload}) => payload.user,
});

const token = createReducer(null, {
    [registerSuccess]: (_, {payload}) => payload.token,[loginSuccess]: (_, {payload}) => payload.token,
});

const error = createReducer(null, {
    [registerError]: (_, {payload}) => payload,
    [loginError]: (_, {payload}) => payload,
});


export default combineReducers({
    user,
    token,
    error,
});