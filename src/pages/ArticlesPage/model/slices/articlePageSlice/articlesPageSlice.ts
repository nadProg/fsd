import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ValuesOf } from 'shared/types';

import { Article, ArticleSortField, ArticleView } from 'entities/Article';

import { StateSchema } from 'app/providers/StoreProvider';

import { SortOrder } from 'shared/constants/queryParams';
import { initialArticlesPageState } from './initialArticlePageState';
import { fetchArticles } from '../../services/fetchArticles/fetchArticles';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

const ARTICLE_VIEW_LOCAL_STORAGE_KEY = 'article_view';

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage
    ?? articlesAdapter.getInitialState(initialArticlesPageState),
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
    setOrder: (state, action: PayloadAction<ValuesOf<typeof SortOrder>>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ValuesOf<typeof ArticleSortField>>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLE_VIEW_LOCAL_STORAGE_KEY);

      if (view === ArticleView.List || view === ArticleView.Grid) {
        state.view = view;
        state.limit = view === ArticleView.List ? 3 : 9;
      }

      // eslint-disable-next-line no-underscore-dangle
      state.__initialized__ = true;
    },
  },
  extraReducers: (builder) => builder
    .addCase(fetchArticles.pending, (state, action) => {
      state.error = undefined;
      state.isLoading = true;

      if (action.meta.arg.replace) {
        articlesAdapter.removeAll(state);
      }
    })
    .addCase(fetchArticles.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hasMore = !!action.payload.length;

      if (action.meta.arg.replace) {
        articlesAdapter.setAll(state, action.payload);
        return;
      }

      articlesAdapter.addMany(state, action.payload);
    })
    .addCase(fetchArticles.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }),
});

export const { reducer: articlesPageReducer } = articlesPageSlice;

export const { actions: articlesPageActions } = articlesPageSlice;
