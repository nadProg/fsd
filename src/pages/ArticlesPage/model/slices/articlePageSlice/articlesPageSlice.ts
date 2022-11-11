import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Article, ArticleView } from 'entities/Article';

import { StateSchema } from 'app/providers/StoreProvider';

import { ValuesOf } from 'shared/types';
import { ArticlesPageSchema } from '../../types/articlesPageSchema';
import { fetchArticles } from '../../services/fetchArticles/fetchArticles';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

const articlesPageState: ArticlesPageSchema = {
  isLoading: true,
  ids: [],
  entities: {},
  error: undefined,
  view: ArticleView.List,
};

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage
    || articlesAdapter.getInitialState(articlesPageState),
);

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState(articlesPageState),
  reducers: {
    setView: (state, action: PayloadAction<ValuesOf<typeof ArticleView>>) => {
      state.view = action.payload;
    },
  },
  extraReducers: (builder) => builder
    .addCase(fetchArticles.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    })
    .addCase(fetchArticles.fulfilled, (state, action) => {
      articlesAdapter.setAll(state, action.payload);
      state.isLoading = false;
    })
    .addCase(fetchArticles.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }),
});

export const { reducer: articlesPageReducer } = articlesPageSlice;

export const { actions: articlesPageActions } = articlesPageSlice;
