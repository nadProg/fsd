import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { DeepPartial } from '@/shared/types';

import type { Article } from '@/entities/Article/testing';

import { fetchArticles } from './fetchArticles';

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

describe('fetchArticles', () => {
  test('should handle success request', async () => {
    const thunk = new TestAsyncThunk(fetchArticles);

    const { api, dispatch } = thunk;

    api.get.mockReturnValue(
      Promise.resolve({
        data: mockData,
      }),
    );

    const result = await thunk.callThunk({
      page: 10,
    });

    expect(result.meta.requestStatus).toBe('fulfilled');

    expect(api.get).toHaveBeenCalled();

    expect(result.payload).toEqual(mockData);

    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  test('should handle error request', async () => {
    const thunk = new TestAsyncThunk(fetchArticles);

    const { api, dispatch } = thunk;

    api.get.mockReturnValue(
      Promise.resolve({
        status: 403,
      }),
    );

    const result = await thunk.callThunk({
      page: 10,
    });

    expect(api.get).toHaveBeenCalled();

    expect(result.meta.requestStatus).toBe('rejected');

    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  test('should return error if no data returned', async () => {
    const thunk = new TestAsyncThunk(fetchArticles);

    const { api, dispatch } = thunk;

    api.get.mockReturnValue(
      Promise.resolve({
        data: undefined,
      }),
    );

    const result = await thunk.callThunk({
      page: 10,
    });

    expect(api.get).toHaveBeenCalled();

    expect(result.meta.requestStatus).toBe('rejected');

    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
