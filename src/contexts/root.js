// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/slice';
import loaderReducer from './loader/slice';
import alertReducer from './alert/slice';

const rootReducer = combineReducers({
    loader: loaderReducer,
    auth: authReducer,
    alert: alertReducer,
});

export default rootReducer;
