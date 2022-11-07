import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
  text: '',
};

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    clearForm: (state) => {
      state.text = '';
    },
  },
  extraReducers: {},
});

export const { actions: addCommentFormActions } = addCommentFormSlice;

export const { reducer: addCommentFormReducer } = addCommentFormSlice;
