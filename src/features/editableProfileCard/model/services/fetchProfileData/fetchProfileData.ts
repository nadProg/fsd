import { createAsyncThunk } from '@reduxjs/toolkit';

import { Id } from '@/shared/types';
import { isAxiosError } from '@/shared/helpers';

import { Profile } from '@/entities/Profile';

import { ThunkConfig } from '@/app/providers/StoreProvider';

export const fetchProfileData = createAsyncThunk<Profile, Id, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (profileId, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    try {
      const response = await extra.api.get<Profile>(`/profile/${profileId}`);

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
