import { createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../apis/axios';
import { URLS } from '../../constants/url';
import { wrapper } from '../global';

export const provinceAll = createAsyncThunk('province', async (_, { dispatch }) => {
    return wrapper()(dispatch, async () => {
        return await client.get(URLS.PROVINCE_ALL);
    });
});
