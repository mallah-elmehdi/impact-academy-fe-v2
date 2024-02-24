import { URLS } from '../constants/url';
import { wrapper } from '../contexts/global';
import { evaluationsByParticipant } from '../contexts/evaluation/apis';
import { client } from './axios';

// !!!!! USE clientPrivate
export const createEvaluation = (data) => async (dispatch) => {
    return wrapper()(dispatch, async () => {
        const response = await client.post(URLS.EVALUATION, data);
        if (response) dispatch(evaluationsByParticipant(data.participantId));
        return response;
    });
};
