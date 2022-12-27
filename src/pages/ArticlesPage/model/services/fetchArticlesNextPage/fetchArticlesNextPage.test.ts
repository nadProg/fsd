import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import type { DeepPartial } from '@/shared/types';

import type { Article } from '@/entities/Article/testing';

import { fetchArticles } from '../fetchArticles/fetchArticles';
import { fetchArticlesNextPage } from './fetchArticlesNextPage';
import { articlesPageActions } from '../../slices/articlePageSlice/articlesPageSlice';

jest.mock('../fetchArticles/fetchArticles');
jest.mock('../../slices/articlePageSlice/articlesPageSlice');

const mockData: DeepPartial<Article>[] = [
  {
    id: '1',
    title: 'title',
    user: {
      id: '1',
      username: 'username',
      avatar: 'avatar',
    },
  },
  {
    id: '2',
    title: 'title',
    user: {
      id: '1',
      username: 'username',
      avatar: 'avatar',
    },
  },
  {
    id: '3',
    title: 'title',
    user: {
      id: '2',
      username: 'username 2',
    },
  },
];

describe('fetchArticlesNextPage', () => {
  test('should fetch next articles page', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesNextPage, {
      articlesPage: {
        ids: [],
        entities: {},
        isLoading: false,
        hasMore: true,
        page: 5,
        limit: 3,
      },
    });

    const { api, dispatch } = thunk;

    api.get.mockReturnValue(
      Promise.resolve({
        data: mockData,
      }),
    );

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('fulfilled');

    expect(fetchArticles).toHaveBeenCalledWith({ page: 6 });
    expect(articlesPageActions.setPage).toHaveBeenCalledWith(6);

    expect(result.payload).toBeUndefined();

    expect(dispatch).toHaveBeenCalledTimes(4);
  });

  test('should not fetch next articles page when loading', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesNextPage, {
      articlesPage: {
        ids: [],
        entities: {},
        isLoading: true,
        hasMore: true,
        page: 5,
        limit: 3,
      },
    });

    const { api, dispatch } = thunk;

    api.get.mockReturnValue(
      Promise.resolve({
        data: mockData,
      }),
    );

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('fulfilled');

    expect(fetchArticles).not.toHaveBeenCalled();
    expect(articlesPageActions.setPage).not.toHaveBeenCalled();

    expect(result.payload).toBeUndefined();

    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  test('should not fetch next articles page when has no more', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesNextPage, {
      articlesPage: {
        ids: [],
        entities: {},
        isLoading: false,
        hasMore: false,
        page: 5,
        limit: 3,
      },
    });

    const { api, dispatch } = thunk;

    api.get.mockReturnValue(
      Promise.resolve({
        data: mockData,
      }),
    );

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('fulfilled');

    expect(fetchArticles).not.toHaveBeenCalled();
    expect(articlesPageActions.setPage).not.toHaveBeenCalled();

    expect(result.payload).toBeUndefined();

    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
