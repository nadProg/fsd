import { DeepPartial } from 'shared/types';
import { LoginSchema } from '../types/LoginSchema';
import { loginReducer, loginActions } from './LoginSlice';

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
});
