import { createAsyncThunk } from '@reduxjs/toolkit';

import { Id } from 'shared/types';
import { isAxiosError } from 'shared/helpers';

import { ThunkConfig } from 'app/providers/StoreProvider';

import { Comment } from 'entities/Comment';

export const fetchArticleDetailsComments = createAsyncThunk<Comment[], Id | undefined, ThunkConfig<string>>(
  'articleDetailsComments/fetchArticleDetailsComments',
  async (articleId, thunkApi) => {
    const {
      rejectWithValue,
      extra,
    } = thunkApi;
    try {
      if (!articleId) {
        throw new Error('Article id is undefined');
      }

      const response = await extra.api.get<Comment[]>(`/articles/${articleId}/comments`, {
        params: {
          _expand: 'user',
        },
      });

      if (!response.data) {
        throw new Error('Article is undefined');
      }

      return response.data;
    } catch (error) {
      const code = isAxiosError(error) && error.response ? `${error.response.status}` : 'unknown';

      return rejectWithValue(code);
    }
  },
);
