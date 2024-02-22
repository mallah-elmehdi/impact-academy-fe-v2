import axios from 'axios';
import { BASE_URL } from '../constants/url';

let store;

export const injectStore = (_store) => {
    store = _store;
};

export const client = axios.create({
    baseURL: BASE_URL,
});

export const clientPrivate = axios.create({
    baseURL: BASE_URL,
});

clientPrivate.interceptors.request.use(
    (config) => {
        if (!config.headers['Authorization']) {
            config.headers['Authorization'] = `Bearer ${store.getState().auth.access_token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// clientPrivate.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     async (error) => {
//     }
// );
