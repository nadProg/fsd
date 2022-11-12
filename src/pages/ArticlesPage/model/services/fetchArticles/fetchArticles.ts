import { createAsyncThunk } from '@reduxjs/toolkit';

import { isAxiosError } from 'shared/helpers';

import { Article } from 'entities/Article';

import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageLimit } from '../../selectors/getArticlesPageLimit/getArticlesPageLimit';

type FetchArticlesParams = {
  page?: number;
};

export const fetchArticles = createAsyncThunk<Article[], FetchArticlesParams, ThunkConfig<string>>(
  'articlesPage/fetchArticles',
  async (params, thunkApi) => {
    const {
      rejectWithValue, extra, getState,
    } = thunkApi;

    const { page = 1 } = params;

    const limit = getArticlesPageLimit(getState());

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
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
