import { createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../apis/axios';
import { URLS } from '../../constants/url';
import { wrapper } from '../global';

export const groupAll = createAsyncThunk('group', async (_, { dispatch }) => {
    return wrapper()(dispatch, async () => {
        return await client.get(URLS.GROUP_ALL);
    });
});
