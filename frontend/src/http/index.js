import axios from 'axios';

export const AUTH_URL = `http://localhost:5000/magazz`;//process.env.REACT_APP_API_URL;

const $auth = axios.create({
    withCredentials: true,
    baseURL: AUTH_URL
})

const $host = axios.create({
  withCredentials: true,
  baseURL: AUTH_URL
})

$auth.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})

export {$auth, $host};