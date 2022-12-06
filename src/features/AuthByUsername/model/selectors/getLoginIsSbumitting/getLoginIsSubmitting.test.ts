import { DeepPartial } from '@/shared/types';
import { StateSchema } from '@/app/providers/StoreProvider';

import { getLoginIsSubmitting } from './getLoginIsSubmitting';

describe('getLoginIsSubmitting', () => {
  test('should return isSubmitting', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isSubmitting: true,
      },
    };

    expect(getLoginIsSubmitting(state as StateSchema)).toEqual(true);
  });

  test('should handle empty state', () => {
    expect(getLoginIsSubmitting({} as StateSchema)).toBe(false);
  });
});
