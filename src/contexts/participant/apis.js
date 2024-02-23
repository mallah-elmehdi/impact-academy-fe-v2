import { createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../apis/axios';
import { URLS } from '../../constants/url';
import { wrapper } from '../global';

export const participantAll = createAsyncThunk('participant', async (_, { dispatch }) => {
    return wrapper()(dispatch, async () => {
        return await client.get(URLS.PARTICIPANT_ALL);
    });
});
