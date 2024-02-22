// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/slice';
import loaderReducer from './loader/slice';
import alertReducer from './alert/slice';
import provinceReducer from './province/slice';
import groupReducer from './group/slice';

const rootReducer = combineReducers({
    loader: loaderReducer,
    auth: authReducer,
    alert: alertReducer,
    // ----
    province: provinceReducer,
    group: groupReducer,
});

export default rootReducer;
