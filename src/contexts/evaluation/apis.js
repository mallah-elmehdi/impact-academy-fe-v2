import { createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../apis/axios';
import { URLS } from '../../constants/url';
import { wrapper } from '../global';

export const evaluationsByParticipant = createAsyncThunk('evaluationByParticipant', async (participantId, { dispatch }) => {
    return wrapper()(dispatch, async () => {
        return await client.get(`${URLS.EVALUATION_BY_PARTICIPANT}?participantId=${participantId}`);
    });
});
