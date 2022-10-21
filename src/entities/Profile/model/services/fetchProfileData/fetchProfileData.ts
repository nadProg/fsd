import { createAsyncThunk } from '@reduxjs/toolkit';

import { isAxiosError } from 'shared/helpers';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkApi) => {
    const { dispatch, rejectWithValue, extra } = thunkApi;

    try {
      const response = await extra.api.get<Profile>(`/profile?unique="${Math.random()}"`);

      if (!response.data) {
        throw new Error('Profile is undefined');
      }

      return response.data;
    } catch (error) {
      const code = isAxiosError(error) && error.response ? `${error.response.status}` : 'unknown';

      return rejectWithValue(code);
    }
  },
);
