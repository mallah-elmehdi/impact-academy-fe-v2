import { createSlice } from '@reduxjs/toolkit';
import { mentorAll, mentorProfile } from './apis';

const initialState = {
    mentors: [],
    profile: null,
};

const mentor = createSlice({
    name: 'mentor',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(mentorAll.fulfilled, (state, { payload }) => {
                state.mentors = payload;
            })
            .addCase(mentorProfile.fulfilled, (state, { payload }) => {
                state.profile = payload;
            });
    },
});

export const {} = mentor.actions;

export default mentor.reducer;
