import { createAsyncThunk } from '@reduxjs/toolkit';

import { isAxiosError } from 'shared/helpers';

import { Article } from 'entities/Article';

import { ThunkConfig } from 'app/providers/StoreProvider';

export const fetchRecommendations = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'articleDetailsPage/fetchRecommendations',
  async (params, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _limit: 4,
          _page: 1,
        },
      });

      if (!response.data) {
        return rejectWithValue('Articles are not defined');
      }

      return response.data;
    } catch (error) {
      const code = isAxiosError(error) && error.response ? `${error.response.status}` : 'unknown';

      return rejectWithValue(code);
    }
  },
);
