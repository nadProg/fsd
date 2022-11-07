import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile';

import { updateProfileData } from './updateProfileData';

const mockData = {
  username: 'username',
  firstname: 'firstname',
  lastname: 'lastname',
  age: 30,
  city: 'city',
  country: Country.Armenia,
  currency: Currency.Eur,
  avatar: '',
};

describe('updateProfileData', () => {
  test('should handle success request', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        data: {
          id: '1',
        },
        form: mockData,
      },
    });

    const { api, dispatch } = thunk;

    api.put.mockReturnValue(Promise.resolve({
      data: mockData,
    }));

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('fulfilled');

    expect(api.put).toHaveBeenCalled();

    expect(result.payload).toEqual(mockData);

    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  test('should handle error request', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        data: {
          id: '1',
        },
        form: mockData,
      },
    });

    const { api, dispatch } = thunk;

    api.put.mockReturnValue(Promise.resolve({
      status: 403,
    }));

    const result = await thunk.callThunk();

    expect(api.put).toHaveBeenCalled();

    expect(result.meta.requestStatus).toBe('rejected');

    expect(result.payload).toEqual([ValidateProfileError.ServerError]);

    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  test('should handle undefined form state', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        data: {
          id: '1',
        },
        form: undefined,
      },
    });

    const { api, dispatch } = thunk;

    const result = await thunk.callThunk();

    expect(api.put).not.toHaveBeenCalled();

    expect(result.meta.requestStatus).toBe('rejected');

    expect(result.payload).toEqual([ValidateProfileError.NoData]);

    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  test('should handle empty form state', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        data: {
          id: '1',
        },
        form: {},
      },
    });

    const { api, dispatch } = thunk;

    const result = await thunk.callThunk();

    expect(api.put).not.toHaveBeenCalled();

    expect(result.meta.requestStatus).toBe('rejected');

    expect(result.payload).toEqual(expect.arrayContaining([
      ValidateProfileError.IncorrectAge,
      ValidateProfileError.IncorrectCountry,
      ValidateProfileError.IncorrectUserData,
    ]));

    expect(result.payload).toHaveLength(3);

    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
