import axios from 'axios';

export const AUTH_URL = `http://localhost:5000/magazz`;//process.env.REACT_APP_API_URL;

const $auth = axios.create({
    withCredentials: true,
    credentials: true,
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

$auth.interceptors.response.use((config) => {
  return config;
}, async (error) => {
  const originalRequest = error.config;
  if (error.response.status == 401 && error.config && !error.config._isRetry) {
    originalRequest._isRetry = true;
    console.log(error);
    try {
        const response = await axios.get(`${AUTH_URL}/refresh`, {withCredentials: true})
        localStorage.setItem('token', response.data.accessToken);
        return $auth.request(originalRequest);
    } catch (e) {
        console.log('НЕ АВТОРИЗОВАН')
    }
  }
  throw error;
})

export {$auth, $host};