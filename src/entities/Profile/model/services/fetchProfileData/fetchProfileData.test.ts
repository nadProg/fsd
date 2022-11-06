import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { fetchProfileData } from './fetchProfileData';

const mockId = '1';

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

describe('fetchProfileData', () => {
  test('should handle success request', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    const { api, dispatch } = thunk;

    api.get.mockReturnValue(Promise.resolve({
      data: mockData,
    }));

    const result = await thunk.callThunk(mockId);

    expect(result.meta.requestStatus).toBe('fulfilled');

    expect(api.get).toHaveBeenCalled();

    expect(result.payload).toEqual(mockData);

    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  test('should handle error request', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    const { api, dispatch } = thunk;

    api.get.mockReturnValue(Promise.resolve({
      status: 403,
    }));

    const result = await thunk.callThunk(mockId);

    expect(api.get).toHaveBeenCalled();

    expect(result.meta.requestStatus).toBe('rejected');

    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
