import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    severity: 'success',
    message: '',
};

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        openAlert: (state, { payload }) => {
            state.isOpen = true;
            state.severity = payload.severity || 'success';
            state.message = payload.message;
        },
        closeAlert: (state) => {
            state.isOpen = false;
        },
    },
});

export const { openAlert, closeAlert } = alertSlice.actions;

export default alertSlice.reducer;
