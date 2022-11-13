import { DeepPartial } from 'shared/types';

import { LoginSchema } from '../../types/loginSchema';
import { loginReducer, loginActions } from './loginSlice';
import { loginByUsername, LoginByUsernameParams } from '../../services/loginByUsername/loginByUsername';

describe('LoginSlice', () => {
  test('should set username', () => {
    const state: DeepPartial<LoginSchema> = {
      username: 'user',
    };

    expect(loginReducer(state as LoginSchema, loginActions.setUsername('newUser'))).toEqual({
      username: 'newUser',
    });
  });

  test('should set password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: 'password',
    };

    expect(loginReducer(state as LoginSchema, loginActions.setPassword('newPassword'))).toEqual({
      password: 'newPassword',
    });
  });

  test('should handle pending login by username', () => {
    const state: DeepPartial<LoginSchema> = {
      isSubmitting: false,
      error: 'error',
    };

    const action = loginByUsername.pending;

    expect(loginReducer(state as LoginSchema, action)).toEqual({
      isSubmitting: true,
    });
  });

  test('should handle fulfilled login by username', () => {
    const state: DeepPartial<LoginSchema> = {
      isSubmitting: true,
    };

    const action = loginByUsername.fulfilled;

    expect(loginReducer(state as LoginSchema, action)).toEqual({
      isSubmitting: false,
    });
  });

  test('should handle rejected login by username', () => {
    const state: DeepPartial<LoginSchema> = {
      isSubmitting: true,
    };
    const params = {} as LoginByUsernameParams;

    const action = loginByUsername.rejected(null, '', params, 'error');

    expect(loginReducer(state as LoginSchema, action)).toEqual({
      isSubmitting: false,
      error: 'error',
    });
  });
});
