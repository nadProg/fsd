import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import type { Comment } from '@/entities/Comment/testing';

import { fetchArticleDetailsComments } from './fetchArticleDetailsComments';

const mockArticleId = '1';

const mockData: Comment[] = [
  {
    id: '1',
    text: 'text',
    user: {
      id: '1',
      username: 'username',
      avatar: 'avatar',
    },
  },
  {
    id: '2',
    text: 'text 2',
    user: {
      id: '1',
      username: 'username',
      avatar: 'avatar',
    },
  },
  {
    id: '3',
    text: 'text 3',
    user: {
      id: '2',
      username: 'username 2',
    },
  },
];

describe('fetchArticleDetailsComment', () => {
  test('should handle success request', async () => {
    const thunk = new TestAsyncThunk(fetchArticleDetailsComments);

    const { api, dispatch } = thunk;

    api.get.mockReturnValue(Promise.resolve({
      data: mockData,
    }));

    const result = await thunk.callThunk(mockArticleId);

    expect(result.meta.requestStatus).toBe('fulfilled');

    expect(api.get).toHaveBeenCalled();

    expect(result.payload).toEqual(mockData);

    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  test('should handle error request', async () => {
    const thunk = new TestAsyncThunk(fetchArticleDetailsComments);

    const { api, dispatch } = thunk;

    api.get.mockReturnValue(Promise.resolve({
      status: 403,
    }));

    const result = await thunk.callThunk(mockArticleId);

    expect(api.get).toHaveBeenCalled();

    expect(result.meta.requestStatus).toBe('rejected');

    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  test('should return error if no data returned', async () => {
    const thunk = new TestAsyncThunk(fetchArticleDetailsComments);

    const { api, dispatch } = thunk;

    api.get.mockReturnValue(Promise.resolve({
      data: undefined,
    }));

    const result = await thunk.callThunk(mockArticleId);

    expect(api.get).toHaveBeenCalled();

    expect(result.meta.requestStatus).toBe('rejected');

    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
