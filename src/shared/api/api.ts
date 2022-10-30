import axios from 'axios';

import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localStorage';

const $api = axios.create({
  baseURL: __API_URL__,
});

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem(USER_LOCALSTORAGE_KEY);

  if (token) {
    config.headers = {
      ...config.headers,
      authorization: token,
    };
  }

  return config;
});

export { $api };
