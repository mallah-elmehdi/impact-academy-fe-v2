import { createSlice } from '@reduxjs/toolkit';
import { participantAll, participantByMentor, participantProfile } from './apis';

const initialState = {
    participants: [],
    profile: null,
};

const participant = createSlice({
    name: 'participant',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(participantAll.fulfilled, (state, { payload }) => {
                state.participants = payload;
            })
            .addCase(participantByMentor.fulfilled, (state, { payload }) => {
                state.participants = payload;
            })
            .addCase(participantProfile.fulfilled, (state, { payload }) => {
                state.profile = payload;
            });
    },
});

export const {} = participant.actions;

export default participant.reducer;
