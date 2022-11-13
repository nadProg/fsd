import { DeepPartial, Id } from 'shared/types';

import { Article } from 'entities/Article';

import { articlesPageReducer } from './articlesPageSlice';
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
