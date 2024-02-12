import { createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../apis/axios';
import { wrapper } from '../global';
import { URLS } from '../../constants/url';

export const logIn = createAsyncThunk('auth/logIn', async (data, { dispatch }) => {
    return wrapper()(dispatch, async () => {
        return await client.post(URLS.LOGIN, data);
    });
});
