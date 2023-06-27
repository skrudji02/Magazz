import axios from 'axios';

export const AUTH_URL = `http://localhost:5000/magazz`;

const $auth = axios.create({
    withCredentials: true,
    baseURL: AUTH_URL
})

$auth.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})

export default $auth;