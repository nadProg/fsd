import { createAsyncThunk } from '@reduxjs/toolkit';

import { isAxiosError } from 'shared/helpers';

import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';

import { ThunkConfig } from 'app/providers/StoreProvider';

import { getAddCommentFormText } from '../../selectors/getAddCommentFormText/getAddCommentFormText';

export const sendComment = createAsyncThunk<Comment, void, ThunkConfig<string>>(
  'addCommentForm/sendComment',
  async (authData, thunkApi) => {
    const {
      dispatch, rejectWithValue, extra, getState,
    } = thunkApi;

    const userData = getUserAuthData(getState());
    const userId = userData?.id;

    const text = getAddCommentFormText(getState());

    // const articleDetailsData = getArticleDetailsData(getState());
    // const articleId = articleDetailsData?.id;

    if (!userId || !text) {
      // todo: create validation errors
      rejectWithValue('no data');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        text,
        userId,
      });

      if (!response.data) {
        throw new Error('User is undefined');
      }

      return response.data;
    } catch (error) {
      const code = isAxiosError(error) && error.response ? `${error.response.status}` : 'unknown';

      return rejectWithValue(code);
    }
  },
);
