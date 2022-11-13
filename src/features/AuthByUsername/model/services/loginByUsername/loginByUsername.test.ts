import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { loginByUsername } from './loginByUsername';

describe('loginByUsername', () => {
  test('should handle success request', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);

    const { api, dispatch } = thunk;

    api.post.mockReturnValue(Promise.resolve({
      data: {
        id: 'id',
        username: 'user',
      },
    }));

    const result = await thunk.callThunk({
      username: 'user',
      password: '123',
    });

    expect(result.meta.requestStatus).toBe('fulfilled');

    expect(api.post).toHaveBeenCalled();

    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData({
      id: 'id',
      username: 'user',
    }));

    // todo: add storage

    expect(dispatch).toHaveBeenCalledTimes(3);
  });

  test('should handle error request', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);

    const { api, dispatch } = thunk;

    api.post.mockReturnValue(Promise.resolve({
      status: 403,
    }));

    const result = await thunk.callThunk({
      username: 'user',
      password: '123',
    });

    expect(api.post).toHaveBeenCalled();

    expect(result.meta.requestStatus).toBe('rejected');

    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
