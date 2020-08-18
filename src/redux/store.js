import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactReducer from './contacts/contacts-reducer';
import authReducer from './auth/auth-reducer';



const middleware = [...getDefaultMiddleware(),logger];

const store = configureStore({
    reducer: {
        auth: authReducer,
        contacts: contactReducer,
    },
    middleware,
});


export default store;