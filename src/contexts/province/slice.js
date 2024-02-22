import { createSlice } from '@reduxjs/toolkit';
import { provinceAll } from './apis';

const initialState = {
    provinces: [],
};

const province = createSlice({
    name: 'province',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(provinceAll.fulfilled, (state, { payload }) => {
            state.provinces = payload;
        });
    },
});

export const {} = province.actions;

export default province.reducer;
