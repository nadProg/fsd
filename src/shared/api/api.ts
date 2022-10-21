import axios, { AxiosRequestHeaders } from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localStorage';

const token = localStorage.getItem(USER_LOCALSTORAGE_KEY);

const headers: AxiosRequestHeaders = token ? {
  authorization: token,
} : {};

export const $api = axios.create({
  baseURL: __API_URL__,
  headers,
});
