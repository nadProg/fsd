import { createAsyncThunk } from '@reduxjs/toolkit';

import { Id } from '@/shared/types';
import { isAxiosError } from '@/shared/helpers';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { Article } from '../../types/article';

export const fetchArticleDetailsData = createAsyncThunk<Article, Id, ThunkConfig<string>>(
  'articleDetails/fetchArticleDetailsData',
  async (articleId, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;
    try {
      const response = await extra.api.get<Article>(`/articles/${articleId}`, {
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
