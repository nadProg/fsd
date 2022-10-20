import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localStorage';
import { isAxiosError } from 'shared/helpers';

type LoginByUsernameParams = {
  username: string;
  password: string;
};

export const loginByUsername = createAsyncThunk<User, LoginByUsernameParams, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData, thunkApi) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);

      if (!response.data) {
        throw new Error('User is undefined');
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      thunkApi.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      const code = isAxiosError(error) ? `${error.response.status}` : 'unknown';

      return thunkApi.rejectWithValue(code);
    }
  },
);
