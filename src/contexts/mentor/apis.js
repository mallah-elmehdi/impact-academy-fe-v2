import { createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../apis/axios';
import { URLS } from '../../constants/url';
import { wrapper } from '../global';

export const mentorAll = createAsyncThunk('mentor', async (_, { dispatch }) => {
    return wrapper()(dispatch, async () => {
        return await client.get(URLS.MENTOR_ALL);
    });
});
