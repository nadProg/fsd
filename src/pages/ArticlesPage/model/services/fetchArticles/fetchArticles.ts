import { createAsyncThunk } from '@reduxjs/toolkit';

import { isAxiosError } from 'shared/helpers';

import { Article } from 'entities/Article';

import { ThunkConfig } from 'app/providers/StoreProvider';

export const fetchArticles = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'articlesPage/fetchArticles',
  async (_, thunkApi) => {
    const {
      rejectWithValue,
      extra,
    } = thunkApi;
    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
        },
      });

      if (!response.data) {
        return rejectWithValue('Articles aro not defined');
      }

      return response.data;
    } catch (error) {
      const code = isAxiosError(error) && error.response ? `${error.response.status}` : 'unknown';

      return rejectWithValue(code);
    }
  },
);
