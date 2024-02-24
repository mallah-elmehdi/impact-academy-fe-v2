import { createSlice } from '@reduxjs/toolkit';
import { presencesByWorkshopAndGroup } from './apis';

const initialState = {
    presences: [],
};

const presence = createSlice({
    name: 'presence',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(presencesByWorkshopAndGroup.fulfilled, (state, { payload }) => {
            state.presences = payload;
        });
    },
});

export const {} = presence.actions;

export default presence.reducer;
