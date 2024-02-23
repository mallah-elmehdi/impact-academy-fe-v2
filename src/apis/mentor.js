import { URLS } from '../constants/url';
import { wrapper } from '../contexts/global';
import { mentorAll } from '../contexts/mentor/apis';
import { client } from './axios';

// !!!!! USE clientPrivate
export const createMentor = (data) => async (dispatch) => {
    return wrapper()(dispatch, async () => {
        const response = await client.post(URLS.MENTOR, data);
        if (response) dispatch(mentorAll());
        return response;
    });
};
