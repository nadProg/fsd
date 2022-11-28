import { DeepPartial } from 'shared/types';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { EditableProfileCardSchema, ValidateProfileError } from '../types/editableProfileCardSchema';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { editableProfileSliceReducer, editableProfileSliceActions } from './editableProfileCardSlice';

const mockId = '1';

const mockData: EditableProfileCardSchema['data'] = {
  firstname: 'firstname',
  username: 'username',
  lastname: 'lastname',
  age: 30,
  city: 'city',
  country: Country.Armenia,
  currency: Currency.Eur,
  avatar: '',
};

const mockForm: EditableProfileCardSchema['form'] = {
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
    const state: DeepPartial<EditableProfileCardSchema> = {
      readonly: false,
    };

    const action = editableProfileSliceActions.setReadonly(true);

    expect(editableProfileSliceReducer(state as EditableProfileCardSchema, action))
      .toEqual({
        ...state,
        readonly: true,
      });
  });

  test('should set readonly false', () => {
    const state: DeepPartial<EditableProfileCardSchema> = {
      readonly: true,
    };

    const action = editableProfileSliceActions.setReadonly(false);

    expect(editableProfileSliceReducer(state as EditableProfileCardSchema, action))
      .toEqual({
        ...state,
        readonly: false,
      });
  });

  test('should update form', () => {
    const state: DeepPartial<EditableProfileCardSchema> = {
      form: mockForm,
    };

    const updatedForm: DeepPartial<EditableProfileCardSchema['form']> = {
      firstname: '',
      lastname: '',
    };

    const action = editableProfileSliceActions.updateForm(updatedForm);

    expect(editableProfileSliceReducer(state as EditableProfileCardSchema, action))
      .toEqual({
        form: {
          ...state.form,
          ...updatedForm,
        },
      });
  });

  test('should reset form', () => {
    const state: DeepPartial<EditableProfileCardSchema> = {
      data: mockData,
      form: mockForm,
    };

    expect(editableProfileSliceReducer(state as EditableProfileCardSchema, editableProfileSliceActions.resetForm()))
      .toEqual({
        ...state,
        form: {
          ...state.data,
        },
      });
  });

  test('should handle fetch profile data service pending', () => {
    const state: DeepPartial<EditableProfileCardSchema> = {
      error: 'error',
      isLoading: false,
    };

    expect(editableProfileSliceReducer(state as EditableProfileCardSchema, fetchProfileData.pending))
      .toEqual({
        isLoading: true,
      });
  });

  test('should handle fetch profile data service fulfilled', () => {
    const state: DeepPartial<EditableProfileCardSchema> = {
      isLoading: true,
    };

    const action = fetchProfileData.fulfilled(mockData, '', mockId);

    expect(editableProfileSliceReducer(state as EditableProfileCardSchema, action))
      .toEqual({
        data: mockData,
        form: mockData,
        isLoading: false,
      });
  });

  test('should handle fetch profile data service rejected', () => {
    const state: DeepPartial<EditableProfileCardSchema> = {
      isLoading: true,
    };

    const action = fetchProfileData.rejected(null, '', mockId, 'error');

    expect(editableProfileSliceReducer(state as EditableProfileCardSchema, action))
      .toEqual({
        error: 'error',
        isLoading: false,
      });
  });

  test('should handle update profile data service pending', () => {
    const state: DeepPartial<EditableProfileCardSchema> = {
      validateErrors: [ValidateProfileError.ServerError],
      isLoading: false,
    };

    expect(editableProfileSliceReducer(state as EditableProfileCardSchema, updateProfileData.pending))
      .toEqual({
        isLoading: true,
      });
  });

  test('should handle update profile data service fulfilled', () => {
    const state: DeepPartial<EditableProfileCardSchema> = {
      isLoading: true,
    };

    expect(editableProfileSliceReducer(state as EditableProfileCardSchema, updateProfileData.fulfilled(mockData, '')))
      .toEqual({
        data: mockData,
        form: mockData,
        isLoading: false,
      });
  });

  test('should handle update profile data service rejected', () => {
    const state: DeepPartial<EditableProfileCardSchema> = {
      isLoading: true,
    };

    const action = updateProfileData.rejected(null, '', undefined, [ValidateProfileError.ServerError]);

    expect(editableProfileSliceReducer(state as EditableProfileCardSchema, action))
      .toEqual({
        validateErrors: [ValidateProfileError.ServerError],
        isLoading: false,
      });
  });
});
