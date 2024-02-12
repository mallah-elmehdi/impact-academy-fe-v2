import { createSlice } from '@reduxjs/toolkit';
import { logIn } from './apis';

const initialState = {
    access_token: null,
    refresh_token: null,
    is_admin: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOutState: (state) => {
            state = initialState;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(logIn.fulfilled, (state, { payload }) => {
            state.access_token = payload.access_token;
            state.refresh_token = payload.refresh_token;
            state.is_admin = payload.is_admin === true;
        });
    },
});

// export const {  } = authSlice.actions;

export default authSlice.reducer;
