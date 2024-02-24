import { URLS } from '../constants/url';
import { wrapper } from '../contexts/global';
import { participantAll, participantProfile } from '../contexts/participant/apis';
import { client } from './axios';

// !!!!! USE clientPrivate
export const createParticipant = (data) => async (dispatch) => {
    return wrapper()(dispatch, async () => {
        const response = await client.post(URLS.PARTICIPANT, data);
        if (response) dispatch(participantAll());
        return response;
    });
};

export const updateParticipantProfile = (data) => async (dispatch) => {
    return wrapper()(dispatch, async () => {
        const response = await client.put(URLS.PARTICIPANT_PROFILE, data);
        if (response) dispatch(participantProfile());
        return response;
    });
};
