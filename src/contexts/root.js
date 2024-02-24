// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/slice';
import loaderReducer from './loader/slice';
import alertReducer from './alert/slice';
import provinceReducer from './province/slice';
import groupReducer from './group/slice';
import mentorReducer from './mentor/slice';
import participantReducer from './participant/slice';
import evaluationReducer from './evaluation/slice';
import presenceReducer from './presence/slice';

const rootReducer = combineReducers({
    loader: loaderReducer,
    auth: authReducer,
    alert: alertReducer,
    // ----
    province: provinceReducer,
    group: groupReducer,
    mentor: mentorReducer,
    participant: participantReducer,
    evaluation: evaluationReducer,
    presence: presenceReducer,
});

export default rootReducer;
