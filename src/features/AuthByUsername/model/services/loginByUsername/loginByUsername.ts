import { createAsyncThunk } from '@reduxjs/toolkit';

import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localStorage';
import { isAxiosError } from 'shared/helpers';
import { ThunkConfig } from 'app/providers/StoreProvider';

type LoginByUsernameParams = {
  username: string;
  password: string;
};

export const loginByUsername = createAsyncThunk<User, LoginByUsernameParams, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkApi) => {
    const { dispatch, rejectWithValue, extra } = thunkApi;

    try {
      const response = await extra.api.post<User>('/login', authData);

      if (!response.data) {
        throw new Error('User is undefined');
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      const code = isAxiosError(error) && error.response ? `${error.response.status}` : 'unknown';

      return rejectWithValue(code);
    }
  },
);
