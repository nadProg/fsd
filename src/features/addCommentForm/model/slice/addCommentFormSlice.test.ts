import { DeepPartial } from '@/shared/types';

import { AddCommentFormSchema } from '../types/addCommentForm';

import { addCommentFormReducer, addCommentFormActions } from './addCommentFormSlice';

describe('addCommentFormSlice', () => {
  test('should set text', () => {
    const state: DeepPartial<AddCommentFormSchema> = {
      text: '',
    };

    expect(addCommentFormReducer(state as AddCommentFormSchema, addCommentFormActions.setText('text'))).toEqual({
      text: 'text',
    });
  });

  test('should clear form', () => {
    const state: DeepPartial<AddCommentFormSchema> = {
      text: 'text',
    };

    expect(addCommentFormReducer(state as AddCommentFormSchema, addCommentFormActions.clearForm())).toEqual({
      text: '',
    });
  });
});
