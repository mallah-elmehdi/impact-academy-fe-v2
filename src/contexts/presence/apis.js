import { createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../apis/axios';
import { URLS } from '../../constants/url';
import { wrapper } from '../global';

export const presencesByWorkshopAndGroup = createAsyncThunk('presencesByWorkshopAndGroup', async ({ workshop, groupId }, { dispatch }) => {
    return wrapper()(dispatch, async () => {
        return await client.get(`${URLS.PRESENCES_BY_WORKSHOP_AND_GROUP}?workshop=${workshop}&groupId=${groupId}`);
    });
});

export const presencesByMentor = createAsyncThunk('presencesByWorkshopAndGroup', async (_, { dispatch }) => {
    return wrapper()(dispatch, async () => {
        return await client.get(`${URLS.PRESENCES_BY_MENTOR}`);
    });
});
