import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfile } from './validateProfile';
import { ValidateProfileError } from '../../types/profile';

const validMockData = {
  username: 'username',
  firstname: 'firstname',
  lastname: 'lastname',
  age: 30,
  city: 'city',
  country: Country.Armenia,
  currency: Currency.Eur,
  avatar: '',
};

describe('validateProfile', () => {
  test('should return no errors when valid profile is provided', () => {
    const result = validateProfile(validMockData);

    expect(result)
      .toEqual([]);
  });

  test('should return no data error when no profile is provided', () => {
    const result = validateProfile();

    expect(result)
      .toEqual([ValidateProfileError.NoData]);
  });

  test('should return incorrect age error when no age is provided', () => {
    const result = validateProfile({
      ...validMockData,
      age: undefined,
    });

    expect(result)
      .toEqual([ValidateProfileError.IncorrectAge]);
  });

  test('should return incorrect country error when no country is provided', () => {
    const result = validateProfile({
      ...validMockData,
      country: undefined,
    });

    expect(result)
      .toEqual([ValidateProfileError.IncorrectCountry]);
  });

  test('should return incorrect user data error when no firstname is provided', () => {
    const result = validateProfile({
      ...validMockData,
      firstname: undefined,
    });

    expect(result)
      .toEqual([ValidateProfileError.IncorrectUserData]);
  });

  test('should return incorrect user data error when no lastname is provided', () => {
    const result = validateProfile({
      ...validMockData,
      lastname: undefined,
    });

    expect(result)
      .toEqual([ValidateProfileError.IncorrectUserData]);
  });

  test('should return errors for empty profile', () => {
    const result = validateProfile({});

    expect(result).toEqual(expect.arrayContaining([
      ValidateProfileError.IncorrectCountry,
      ValidateProfileError.IncorrectAge,
      ValidateProfileError.IncorrectUserData,
    ]));

    expect(result).toHaveLength(3);
  });
});
