import { createSlice } from '@reduxjs/toolkit';
import { mentorAll } from './apis';

const initialState = {
    mentors: [],
};

const mentor = createSlice({
    name: 'mentor',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(mentorAll.fulfilled, (state, { payload }) => {
            state.mentors = payload;
        });
    },
});

export const {} = mentor.actions;

export default mentor.reducer;
