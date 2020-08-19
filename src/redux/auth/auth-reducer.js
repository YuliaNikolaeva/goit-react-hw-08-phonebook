import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';

const {
    registerSuccess, 
    registerError,
    loginSuccess,
    loginError,
    logoutSuccess,
    logoutError,
    getCurrentUserSuccess,
    getCurrentUserError,
    } = authActions;

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
    [registerSuccess]: (_, {payload}) => payload.user,
    [loginSuccess]: (_, {payload}) => payload.user,
    [logoutSuccess]: (_, __) => initialUserState,
    [getCurrentUserSuccess]: (_, {payload}) => payload,
});

const token = createReducer(null, {
    [registerSuccess]: (_, {payload}) => payload.token,
    [loginSuccess]: (_, {payload}) => payload.token,
    [logoutSuccess]: (_, __) => null,
});

const setError = (_, {payload}) => payload;

const error = createReducer(null, {
    [registerError]: setError,
    [loginError]: setError,
    [logoutError]: setError,
    [getCurrentUserError]: setError,
});


export default combineReducers({
    user,
    token,
    error,
});