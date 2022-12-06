import { Profile } from '@/entities/Profile';

import { ValidateProfileError, ValuesOfValidateProfileError } from '../../types/editableProfileCardSchema';

export const validateProfile = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NoData];
  }

  const {
    firstname, lastname, age, country,
  } = profile;

  const errors: ValuesOfValidateProfileError[] = [];

  if (!firstname || !lastname) {
    errors.push(ValidateProfileError.IncorrectUserData);
  }

  if (!age || !Number.isFinite(age)) {
    errors.push(ValidateProfileError.IncorrectAge);
  }

  if (!country) {
    errors.push(ValidateProfileError.IncorrectCountry);
  }

  return errors;
};
