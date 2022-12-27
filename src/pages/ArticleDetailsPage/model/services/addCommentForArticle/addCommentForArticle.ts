import { createAsyncThunk } from '@reduxjs/toolkit';

import { isAxiosError } from '@/shared/helpers';

import { Comment } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';
import { getArticleDetailsData } from '@/entities/Article';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { fetchArticleDetailsComments } from '../fetchArticleDetailsComments/fetchArticleDetailsComments';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetailsComments/addCommentForArticle',
  async (text, thunkApi) => {
    const { dispatch, rejectWithValue, extra, getState } = thunkApi;

    const userData = getUserAuthData(getState());
    const userId = userData?.id;

    const articleDetailsData = getArticleDetailsData(getState());
    const articleId = articleDetailsData?.id;

    if (!userId || !articleId) {
      // todo: create validation errors
      return rejectWithValue('no data');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        text,
        userId,
        articleId,
      });

      if (!response.data) {
        throw new Error('User is undefined');
      }

      dispatch(fetchArticleDetailsComments(articleId));

      return response.data;
    } catch (error) {
      const code = isAxiosError(error) && error.response ? `${error.response.status}` : 'unknown';

      return rejectWithValue(code);
    }
  },
);
