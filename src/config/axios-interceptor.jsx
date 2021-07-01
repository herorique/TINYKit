import axios from 'axios';
import { getToken, clearToken } from '../auth/authenticationService';

import { PUBLIC_URL } from '../constant';

const TIMEOUT = 1 * 60 * 1000;
axios.defaults.timeout = TIMEOUT;
axios.defaults.baseURL = PUBLIC_URL;

const setupAxiosInterceptors = () => {
  const onRequestSuccess = config => {
    const token = getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  };

  const onResponseSuccess = response => response;
  const onResponseError = err => {
    const status = err.status || (err.response ? err.response.status : 0);

    if (status === 403 || status === 401) {
      clearToken();
    }

    return Promise.reject(err);
  };

  axios.interceptors.request.use(onRequestSuccess);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default setupAxiosInterceptors;
