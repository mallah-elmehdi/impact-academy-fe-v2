import { createSlice } from '@reduxjs/toolkit';
import { logIn } from './apis';

const initialState = {
    access_token: null,
    role: null,
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
            state.role = payload.role;
        });
    },
});

// export const {  } = authSlice.actions;

export default authSlice.reducer;
