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
  extraReducers: (builder) => {
    // builder
    //   .addCase(fetchArticleDetailsData.pending, (state) => {
    //     state.error = undefined;
    //     state.isLoading = true;
    //   })
    //   .addCase(fetchArticleDetailsData.fulfilled, (state, action) => {
    //     state.data = action.payload;
    //     state.isLoading = false;
    //   })
    //   .addCase(fetchArticleDetailsData.rejected, (state, action) => {
    //     state.error = action.payload;
    //     state.isLoading = false;
    //   });
  },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;

export const { reducer: addCommentFormReducers } = addCommentFormSlice;
