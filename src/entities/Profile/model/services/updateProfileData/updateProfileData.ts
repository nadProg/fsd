import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';

import { validateProfile } from 'entities/Profile/model/services/validateProfile/validateProfile';

import { Profile, ValuesOfValidateProfileError } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValuesOfValidateProfileError[]>>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const { rejectWithValue, extra, getState } = thunkApi;

    const form = getProfileForm(getState());

    const errors = validateProfile(form);

    if (errors.length) {
      return rejectWithValue(errors);
    }

    try {
      const response = await extra.api.put<Profile>('/profile', form);

      if (!response.data) {
        throw new Error('Profile is undefined');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(validateProfile());
    }
  },
);
