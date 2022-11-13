import { DeepPartial, Id } from 'shared/types';

import { Article } from 'entities/Article';

import { articlesPageActions, articlesPageReducer } from './articlesPageSlice';
import { fetchArticles } from '../../services/fetchArticles/fetchArticles';
import { ArticlesPageSchema } from '../../types/articlesPageSchema';

const mockParams = {
  page: 5,
};

const mockArticle1: DeepPartial<Article> = {
  id: '1',
  title: 'title',
  user: {
    id: '1',
    username: 'username',
    avatar: 'avatar',
  },
};

const mockArticle2: DeepPartial<Article> = {
  id: '2',
  title: 'title',
  user: {
    id: '1',
    username: 'username',
    avatar: 'avatar',
  },
};

const mockArticle3: DeepPartial<Article> = {
  id: '3',
  title: 'title',
  user: {
    id: '2',
    username: 'username 2',
  },
};

const mockData: DeepPartial<Article>[] = [mockArticle1, mockArticle2, mockArticle3];

const mockArticleIds = [mockArticle1.id, mockArticle2.id, mockArticle3.id];

const mockArticleEntities = {
  [mockArticle1.id as Id]: mockArticle1,
  [mockArticle2.id as Id]: mockArticle2,
  [mockArticle3.id as Id]: mockArticle3,
};

describe('articlesPageSlice', () => {
  test('should set page', () => {
    const state = {} as ArticlesPageSchema;
    const actionSet5 = articlesPageActions.setPage(5);
    const actionSet10 = articlesPageActions.setPage(10);
    const actionSet100 = articlesPageActions.setPage(100);

    expect(articlesPageReducer(state, actionSet5))
      .toEqual({
        page: 5,
      });

    expect(articlesPageReducer(state, actionSet10))
      .toEqual({
        page: 10,
      });

    expect(articlesPageReducer(state, actionSet100))
      .toEqual({
        page: 100,
      });
  });

  test('should set view', () => {
    const state = {} as ArticlesPageSchema;
    const actionSetList = articlesPageActions.setView('list');
    const actionSetGrid = articlesPageActions.setView('grid');

    expect(articlesPageReducer(state, actionSetList))
      .toEqual({
        view: 'list',
      });

    expect(articlesPageReducer(state, actionSetGrid))
      .toEqual({
        view: 'grid',
      });
  });

  test('should init state when no view in localStorage', () => {
    const state = {} as ArticlesPageSchema;
    const initAction = articlesPageActions.initState();

    Storage.prototype.getItem = jest.fn(() => null);

    expect(articlesPageReducer(state, initAction))
      .toEqual({
        __initialized__: true,
      });

    expect(Storage.prototype.getItem).toHaveBeenCalledTimes(1);
    expect(Storage.prototype.getItem).toHaveBeenCalledWith('article_view');
  });

  test('should init state when list view in localStorage', () => {
    const state = {} as ArticlesPageSchema;
    const initAction = articlesPageActions.initState();

    Storage.prototype.getItem = jest.fn(() => 'list');

    expect(articlesPageReducer(state, initAction))
      .toEqual({
        view: 'list',
        limit: 3,
        __initialized__: true,
      });

    expect(Storage.prototype.getItem).toHaveBeenCalledTimes(1);
    expect(Storage.prototype.getItem).toHaveBeenCalledWith('article_view');
  });

  test('should init state when grid view in localStorage', () => {
    const state = {} as ArticlesPageSchema;
    const initAction = articlesPageActions.initState();

    Storage.prototype.getItem = jest.fn(() => 'grid');

    expect(articlesPageReducer(state, initAction))
      .toEqual({
        view: 'grid',
        limit: 9,
        __initialized__: true,
      });

    expect(Storage.prototype.getItem).toHaveBeenCalledTimes(1);
    expect(Storage.prototype.getItem).toHaveBeenCalledWith('article_view');
  });

  test('should handle fetch articles service pending', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      error: 'error',
      isLoading: false,
    };

    const action = fetchArticles.pending;

    expect(articlesPageReducer(state as ArticlesPageSchema, action))
      .toEqual({
        isLoading: true,
      });
  });

  test('should handle fetch article service fulfilled', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      ids: [],
      entities: {},
      isLoading: true,
    };

    const action = fetchArticles.fulfilled(mockData as Article[], '', mockParams);

    expect(articlesPageReducer(state as ArticlesPageSchema, action))
      .toEqual({
        ids: mockArticleIds,
        entities: mockArticleEntities,
        isLoading: false,
        hasMore: true,
      });
  });

  test('should handle fetch article service rejected', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      isLoading: true,
    };

    const action = fetchArticles.rejected(null, '', mockParams, 'error');

    expect(articlesPageReducer(state as ArticlesPageSchema, action))
      .toEqual({
        error: 'error',
        isLoading: false,
      });
  });
});
