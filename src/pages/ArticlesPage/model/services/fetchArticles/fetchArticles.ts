import { createAsyncThunk } from '@reduxjs/toolkit';

import { isAxiosError } from 'shared/helpers';

import { Article } from 'entities/Article';

import { ThunkConfig } from 'app/providers/StoreProvider';

import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import { getArticlesPageSearch } from '../../selectors/getArticlesPageSearch/getArticlesPageSearch';
import { getArticlesPageOrder } from '../../selectors/getArticlesPageOrder/getArticlesPageOrder';
import { getArticlesPageSort } from '../../selectors/getArticlesPageSort/getArticlesPageSort';
import { getArticlesPageLimit } from '../../selectors/getArticlesPageLimit/getArticlesPageLimit';

type FetchArticlesParams = {
  page?: number;
  replace?: boolean;
};

export const fetchArticles = createAsyncThunk<Article[], FetchArticlesParams, ThunkConfig<string>>(
  'articlesPage/fetchArticles',
  async (params, thunkApi) => {
    const {
      rejectWithValue, extra, getState,
    } = thunkApi;

    const { page = 1 } = params;

    const search = getArticlesPageSearch(getState());
    const order = getArticlesPageOrder(getState());
    const sort = getArticlesPageSort(getState());
    const limit = getArticlesPageLimit(getState());

    addQueryParams({
      order, sort, search,
    });

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _order: order,
          _sort: sort,
          q: search,
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
