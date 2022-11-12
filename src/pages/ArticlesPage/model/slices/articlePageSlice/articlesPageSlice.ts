import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ValuesOf } from 'shared/types';

import { Article, ArticleView } from 'entities/Article';

import { StateSchema } from 'app/providers/StoreProvider';

import { initialArticlesPageState } from './initialArticlePageState';
import { fetchArticles } from '../../services/fetchArticles/fetchArticles';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

const ARTICLE_VIEW_LOCAL_STORAGE_KEY = 'article_view';

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage
    || articlesAdapter.getInitialState(initialArticlesPageState),
);

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState(initialArticlesPageState),
  reducers: {
    setView: (state, action: PayloadAction<ValuesOf<typeof ArticleView>>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY);

      if (view === ArticleView.List || view === ArticleView.Grid) {
        state.view = view;
        state.limit = view === ArticleView.List ? 4 : 9;
      }
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
