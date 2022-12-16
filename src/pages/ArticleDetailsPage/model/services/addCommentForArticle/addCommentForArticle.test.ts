import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import type { User } from '@/entities/User/testing';
import type { Comment } from '@/entities/Comment/testing';

import { addCommentForArticle } from './addCommentForArticle';

const mockArticleId = '1';

const mockUser: User = {
  id: '1',
  username: 'user',
};

const mockComment: Comment = {
  id: '1',
  text: 'comment',
  user: mockUser,
};

describe('addCommentForArticle', () => {
  test('should handle success request', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: {
        authData: mockUser,
      },
      articleDetails: {
        data: {
          id: mockArticleId,
        },
      },
    });

    const { api, dispatch } = thunk;

    api.post.mockReturnValue(Promise.resolve({
      data: mockComment,
    }));

    const result = await thunk.callThunk(mockArticleId);

    expect(result.meta.requestStatus).toBe('fulfilled');

    expect(api.post).toHaveBeenCalled();

    expect(result.payload).toEqual(mockComment);

    expect(dispatch).toHaveBeenCalledTimes(3);
  });

  test('should handle error request', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: {
        authData: mockUser,
      },
      articleDetails: {
        data: {
          id: mockArticleId,
        },
      },
    });

    const { api, dispatch } = thunk;

    api.post.mockReturnValue(Promise.resolve({
      status: 403,
    }));

    const result = await thunk.callThunk(mockArticleId);

    expect(api.post).toHaveBeenCalled();

    expect(result.meta.requestStatus).toBe('rejected');

    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  test('should return error if no data returned', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: {
        authData: mockUser,
      },
      articleDetails: {
        data: {
          id: mockArticleId,
        },
      },
    });

    const { api, dispatch } = thunk;

    api.post.mockReturnValue(Promise.resolve({
      data: undefined,
    }));

    const result = await thunk.callThunk(mockArticleId);

    expect(api.post).toHaveBeenCalled();

    expect(result.meta.requestStatus).toBe('rejected');

    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  test('should return error if no user auth data', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: {},
      articleDetails: {
        data: {
          id: mockArticleId,
        },
      },
    });

    const { api, dispatch } = thunk;

    api.post.mockReturnValue(Promise.resolve({
      data: mockComment,
    }));

    const result = await thunk.callThunk(mockArticleId);

    expect(api.post).not.toHaveBeenCalled();

    expect(result.meta.requestStatus).toBe('rejected');

    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  test('should return error if no article details data', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: {},
    });

    const { api, dispatch } = thunk;

    api.post.mockReturnValue(Promise.resolve({
      data: mockComment,
    }));

    const result = await thunk.callThunk(mockArticleId);

    expect(api.post).not.toHaveBeenCalled();

    expect(result.meta.requestStatus).toBe('rejected');

    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
