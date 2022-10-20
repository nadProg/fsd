import axios from 'axios';

import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername', () => {
  test('should handle success request', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({
      data: {
        id: 'id',
        username: 'user',
      },
    }));

    const thunk = new TestAsyncThunk(loginByUsername);

    const result = await thunk.callThunk({
      username: 'user',
      password: '123',
    });

    expect(result.meta.requestStatus).toBe('fulfilled');

    expect(mockedAxios.post).toHaveBeenCalled();

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData({
      id: 'id',
      username: 'user',
    }));

    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
  });

  test('should handle error request', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({
      status: 403,
    }));

    const thunk = new TestAsyncThunk(loginByUsername);

    const result = await thunk.callThunk({
      username: 'user',
      password: '123',
    });

    expect(mockedAxios.post).toHaveBeenCalled();

    expect(result.meta.requestStatus).toBe('rejected');

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });
});
