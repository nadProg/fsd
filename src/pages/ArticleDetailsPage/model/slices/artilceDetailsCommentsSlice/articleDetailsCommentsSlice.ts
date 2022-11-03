import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { Comment } from 'entities/Comment';

import { StateSchema } from 'app/providers/StoreProvider';

import { ArticleDetailsCommentsSchema } from '../../types/articleDetailsCommentsSchema';
import { fetchArticleDetailsComments } from '../../services/fetchArticleDetailsComments/fetchArticleDetailsComments';

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

const articleDetailsInitialState: ArticleDetailsCommentsSchema = {
  isLoading: true,
  ids: [],
  entities: {},
  error: undefined,
};

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments
    || commentsAdapter.getInitialState(articleDetailsInitialState),
);

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState(articleDetailsInitialState),
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(fetchArticleDetailsComments.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    })
    .addCase(fetchArticleDetailsComments.fulfilled, (state, action) => {
      commentsAdapter.setAll(state, action.payload);
      state.isLoading = false;
    })
    .addCase(fetchArticleDetailsComments.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }),
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;

export const { actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice;
