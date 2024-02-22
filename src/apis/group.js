import { URLS } from '../constants/url';
import { wrapper } from '../contexts/global';
import { groupAll } from '../contexts/group/apis';
import { client } from './axios';

// !!!!! USE clientPrivate
export const createGroup = (data) => async (dispatch) => {
    return wrapper()(dispatch, async () => {
        const response = await client.post(URLS.GROUP, data);
        if (response) dispatch(groupAll());
        return response;
    });
};
