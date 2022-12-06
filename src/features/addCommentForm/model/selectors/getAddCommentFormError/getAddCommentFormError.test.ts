import { DeepPartial } from '@/shared/types';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getAddCommentFormError } from './getAddCommentFormError';

describe('getAddCommentFormError', () => {
  test('should return state', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        error: 'error',
      },
    };

    expect(getAddCommentFormError(state as StateSchema)).toBe('error');
  });

  test('should handle empty state', () => {
    expect(getAddCommentFormError({} as StateSchema)).toBeUndefined();
  });
});
