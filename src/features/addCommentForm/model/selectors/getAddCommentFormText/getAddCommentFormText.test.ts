import { DeepPartial } from '@/shared/types';
import { StateSchema } from '@/app/providers/StoreProvider';

import { getAddCommentFormText } from './getAddCommentFormText';

describe('getAddCommentFormText', () => {
  test('should return text', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        text: 'text',
      },
    };

    expect(getAddCommentFormText(state as StateSchema)).toBe('text');
  });

  test('should return empty string when empty state', () => {
    expect(getAddCommentFormText({} as StateSchema)).toBe('');
  });
});
