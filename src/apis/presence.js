import { URLS } from '../constants/url';
import { wrapper } from '../contexts/global';
import { presencesByMentor } from '../contexts/presence/apis';
import { client } from './axios';

// !!!!! USE clientPrivate
export const createPresence = (data) => async (dispatch) => {
    return wrapper()(dispatch, async () => {
        const response = await client.post(URLS.PRESENCES, data);
        if (response) dispatch(presencesByMentor());
        return response;
    });
};

export const updatePresence = (data) => async (dispatch) => {
    return wrapper()(dispatch, async () => {
        const response = await client.put(URLS.PRESENCES, data);
        if (response) dispatch(presencesByMentor());
        return response;
    });
};
