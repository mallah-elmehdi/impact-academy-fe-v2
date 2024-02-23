import { createSlice } from '@reduxjs/toolkit';
import { participantAll } from './apis';

const initialState = {
    participants: [],
};

const participant = createSlice({
    name: 'participant',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(participantAll.fulfilled, (state, { payload }) => {
            state.participants = payload;
        });
    },
});

export const {} = participant.actions;

export default participant.reducer;
