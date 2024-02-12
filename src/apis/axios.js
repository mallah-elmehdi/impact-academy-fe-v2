import axios from 'axios';
import { BASE_URL } from '../constants/url';

export const client = axios.create({
    baseURL: BASE_URL,
});

export const clientPrivate = axios.create({
    baseURL: BASE_URL,
});

// clientPrivate.interceptors.request.use(
//     (config) => {

//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// clientPrivate.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     async (error) => {
//     }
// );
