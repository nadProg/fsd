import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';

import { fetchArticles } from '../fetchArticles/fetchArticles';
import { articlesPageActions } from '../../slices/articlePageSlice/articlesPageSlice';
import { getArticlesPagePage } from '../../selectors/getArticlesPagePage/getArticlesPagePage';
import { getArticlesPageInitialized } from '../../selectors/getArticlesPageInitialized/getArticlesPageInitialized';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;

    const isInitialized = getArticlesPageInitialized(getState());
    const page = getArticlesPagePage(getState());

    if (!isInitialized) {
      dispatch(articlesPageActions.initState());

      dispatch(fetchArticles({ page }));
    }
  },
);
