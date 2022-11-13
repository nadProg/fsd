import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';

import { fetchArticles } from '../fetchArticles/fetchArticles';
import { articlesPageActions } from '../../slices/articlePageSlice/articlesPageSlice';
import { getArticlesPagePage } from '../../selectors/getArticlesPagePage/getArticlesPagePage';
import { getArticlesPageHasMore } from '../../selectors/getArticlesPageHasMore/getArticlesPageHasMore';
import { getArticlesPageIsLoading } from '../../selectors/getArticlesPageIsLoading/getArticlesPageIsLoading';

export const fetchArticlesNextPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/fetchArticlesNextPage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;

    const hasMore = getArticlesPageHasMore(getState());
    const isLoading = getArticlesPageIsLoading(getState());
    const page = getArticlesPagePage(getState());

    if (hasMore && !isLoading) {
      const nextPage = page + 1;

      await dispatch(fetchArticles({
        page: nextPage,
      }));

      dispatch(articlesPageActions.setPage(nextPage));
    }
  },
);
