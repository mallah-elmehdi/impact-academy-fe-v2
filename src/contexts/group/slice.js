import { createSlice } from '@reduxjs/toolkit';
import { groupAll } from './apis';

const initialState = {
    groups: [],
};

const group = createSlice({
    name: 'group',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(groupAll.fulfilled, (state, { payload }) => {
            state.groups = payload;
        });
    },
});

export const {} = group.actions;

export default group.reducer;
