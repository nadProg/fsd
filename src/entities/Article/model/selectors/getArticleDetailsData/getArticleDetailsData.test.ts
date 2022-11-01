import { DeepPartial } from 'shared/types';

import { StateSchema } from 'app/providers/StoreProvider';

import { getArticleDetailsData } from './getArticleDetailsData';

describe('getArticleDetailsData', () => {
  test.skip('should return data', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        // data: {},
      },
    };

    expect(getArticleDetailsData(state as StateSchema)).toBe(false);
  });

  test('should handle empty state', () => {
    expect(getArticleDetailsData({} as StateSchema)).toBeUndefined();
  });
});
