import { createAsyncThunk } from '@reduxjs/toolkit';

import { ValuesOf } from 'shared/types';
import { SortOrder } from 'shared/constants/queryParams';

import { ArticleSortField } from 'entities/Article';

import { ThunkConfig } from 'app/providers/StoreProvider';

import { ArticleType } from 'entities/Article/model/types/article';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { articlesPageActions } from '../../slices/articlePageSlice/articlesPageSlice';
import { getArticlesPagePage } from '../../selectors/getArticlesPagePage/getArticlesPagePage';
import { getArticlesPageInitialized } from '../../selectors/getArticlesPageInitialized/getArticlesPageInitialized';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (params, thunkApi) => {
    const { getState, dispatch } = thunkApi;

    const isInitialized = getArticlesPageInitialized(getState());
    const page = getArticlesPagePage(getState());

    if (!isInitialized) {
      const sort = params.get('sort') as ValuesOf<typeof ArticleSortField> | null;
      const order = params.get('order') as ValuesOf<typeof SortOrder> | null;
      const type = params.get('type') as ValuesOf<typeof ArticleType> | 'ALL' | null;
      const search = params.get('search');

      if (sort) {
        dispatch(articlesPageActions.setSort(sort));
      }

      if (order) {
        dispatch(articlesPageActions.setOrder(order));
      }

      if (search) {
        dispatch(articlesPageActions.setSearch(search));
      }

      if (type) {
        dispatch(articlesPageActions.setType(type));
      }

      dispatch(articlesPageActions.initState());

      dispatch(fetchArticles({ page }));
    }
  },
);
