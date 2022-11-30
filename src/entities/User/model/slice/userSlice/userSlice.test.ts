import { DeepPartial } from 'shared/types';
import { userActions, userReducer } from './userSlice';
import { UserSchema } from '../../types/user';

describe('userSlice', () => {
  test('should set authData', () => {
    const state = {} as UserSchema;

    const action = userActions.setAuthData({
      id: '1',
      username: 'username',
      roles: [],
    });

    const actionWithAvatar = userActions.setAuthData({
      id: '1',
      username: 'username',
      avatar: 'avatar',
      roles: [],
    });

    expect(userReducer(state, action)).toEqual({
      authData: {
        id: '1',
        username: 'username',
        roles: [],
      },
    });

    expect(userReducer(state, actionWithAvatar)).toEqual({
      authData: {
        id: '1',
        username: 'username',
        avatar: 'avatar',
        roles: [],
      },
    });
  });

  test('should init authData when no user in localStorage', () => {
    const state = {} as UserSchema;

    const action = userActions.initAuthData();

    Storage.prototype.getItem = jest.fn(() => null);

    expect(userReducer(state, action)).toEqual({
      __initialized__: true,
    });

    expect(Storage.prototype.getItem).toHaveBeenCalledTimes(1);
    expect(Storage.prototype.getItem).toHaveBeenCalledWith('user');
  });

  test('should init authData when user in localStorage', () => {
    const state = {} as UserSchema;

    const action = userActions.initAuthData();

    Storage.prototype.getItem = jest.fn(() => JSON.stringify({
      username: 'username',
      id: '1',
      avatar: 'avatar',
    }));

    expect(userReducer(state, action)).toEqual({
      authData: {
        id: '1',
        username: 'username',
        avatar: 'avatar',
      },
      __initialized__: true,
    });

    expect(Storage.prototype.getItem).toHaveBeenCalledTimes(1);
    expect(Storage.prototype.getItem).toHaveBeenCalledWith('user');
  });

  test('should logout', () => {
    const state: DeepPartial<UserSchema> = {
      authData: {
        id: '1',
        username: 'username',
      },
      __initialized__: true,
    };

    const action = userActions.logout();

    Storage.prototype.removeItem = jest.fn();

    expect(userReducer(state as UserSchema, action)).toEqual({ __initialized__: true });

    expect(Storage.prototype.removeItem).toHaveBeenCalledTimes(1);
    expect(Storage.prototype.removeItem).toHaveBeenCalledWith('user');
  });
});
