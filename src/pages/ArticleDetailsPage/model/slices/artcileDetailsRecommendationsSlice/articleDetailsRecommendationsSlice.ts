import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { Article } from '@/entities/Article';

import { StateSchema } from '@/app/providers/StoreProvider';

import { fetchRecommendations } from '../../services/fetchRecommendations/fetchRecommendations';
import { articleDetailsRecommendationInitialState } from './articleDetailsRecommendationInitialState';

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state) =>
    state.articleDetailsPage?.recommendations ||
    recommendationsAdapter.getInitialState(articleDetailsRecommendationInitialState),
);

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: recommendationsAdapter.getInitialState(articleDetailsRecommendationInitialState),
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchRecommendations.fulfilled, (state, action) => {
        recommendationsAdapter.setAll(state, action.payload);
        state.isLoading = false;
      })
      .addCase(fetchRecommendations.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export const { reducer: articleDetailsRecommendationsReducer } = articleDetailsCommentsSlice;

export const { actions: articleDetailsRecommendationsActions } = articleDetailsCommentsSlice;
