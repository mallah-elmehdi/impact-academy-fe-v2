import { createSlice } from '@reduxjs/toolkit';
import { evaluationsByParticipant } from './apis';

const initialState = {
    evaluationByParticipant: [],
};

const evaluation = createSlice({
    name: 'evaluation',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(evaluationsByParticipant.fulfilled, (state, { payload }) => {
            state.evaluationByParticipant = payload;
        });
    },
});

export const {} = evaluation.actions;

export default evaluation.reducer;
