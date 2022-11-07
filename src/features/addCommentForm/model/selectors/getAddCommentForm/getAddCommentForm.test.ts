import { DeepPartial } from 'shared/types';
import { StateSchema } from 'app/providers/StoreProvider';

import { getAddCommentForm } from './getAddCommentForm';

describe('getAddCommentForm', () => {
  test('should return state', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        text: 'text',
        error: '',
      },
    };

    expect(getAddCommentForm(state as StateSchema)).toEqual({
      text: 'text',
      error: '',
    });
  });

  test('should handle empty state', () => {
    expect(getAddCommentForm({} as StateSchema)).toBeUndefined();
  });
});
