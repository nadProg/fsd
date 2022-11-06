import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { DeepPartial } from 'shared/types';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileReducer, profileActions } from './profileSlice';

const mockId = '1';

const mockData: ProfileSchema['data'] = {
  firstname: 'firstname',
  username: 'username',
  lastname: 'lastname',
  age: 30,
  city: 'city',
  country: Country.Armenia,
  currency: Currency.Eur,
  avatar: '',
};

const mockForm: ProfileSchema['form'] = {
  firstname: 'upadted firstname',
  username: 'updated username',
  lastname: 'updated lastname',
  age: 40,
  city: 'updated city',
  country: Country.Mongolia,
  currency: Currency.Usd,
  avatar: 'updated',
};

describe('ProfileSlice', () => {
  test('should set readonly true', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    };

    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true)))
      .toEqual({
        ...state,
        readonly: true,
      });
  });

  test('should set readonly false', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: true,
    };

    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(false)))
      .toEqual({
        ...state,
        readonly: false,
      });
  });

  test('should update form', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: mockForm,
    };

    const updatedForm: DeepPartial<ProfileSchema['form']> = {
      firstname: '',
      lastname: '',
    };

    expect(profileReducer(state as ProfileSchema, profileActions.updateForm(updatedForm)))
      .toEqual({
        form: {
          ...state.form,
          ...updatedForm,
        },
      });
  });

  test('should reset form', () => {
    const state: DeepPartial<ProfileSchema> = {
      data: mockData,
      form: mockForm,
    };

    expect(profileReducer(state as ProfileSchema, profileActions.resetForm()))
      .toEqual({
        ...state,
        form: {
          ...state.data,
        },
      });
  });

  test('should handle fetch profile data service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      error: 'error',
      isLoading: false,
    };

    expect(profileReducer(state as ProfileSchema, fetchProfileData.pending))
      .toEqual({
        isLoading: true,
      });
  });

  test('should handle fetch profile data service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(profileReducer(state as ProfileSchema, fetchProfileData.fulfilled(mockData, '', mockId)))
      .toEqual({
        data: mockData,
        form: mockData,
        isLoading: false,
      });
  });

  test('should handle fetch profile data service rejected', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    const action = fetchProfileData.rejected(null, '', mockId, 'error');

    expect(profileReducer(state as ProfileSchema, action))
      .toEqual({
        error: 'error',
        isLoading: false,
      });
  });

  test('should handle update profile data service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      validateErrors: [ValidateProfileError.ServerError],
      isLoading: false,
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
      .toEqual({
        isLoading: true,
      });
  });

  test('should handle update profile data service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(mockData, '')))
      .toEqual({
        data: mockData,
        form: mockData,
        isLoading: false,
      });
  });

  test('should handle update profile data service rejected', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    const action = updateProfileData.rejected(null, '', undefined, [ValidateProfileError.ServerError]);

    expect(profileReducer(state as ProfileSchema, action))
      .toEqual({
        validateErrors: [ValidateProfileError.ServerError],
        isLoading: false,
      });
  });
});
