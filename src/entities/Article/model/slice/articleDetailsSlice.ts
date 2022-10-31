import { createSlice } from '@reduxjs/toolkit';

import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { Article } from '../types/article';
import { fetchArticleDetailsData } from '../services/fetchArticleDetailsData/fetchArticleDetailsData';

const initialState: ArticleDetailsSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
};

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {
    // setReadonly: (state, action: PayloadAction<boolean>) => {
    //   state.readonly = action.payload;
    // },
    // updateForm: (state, action: PayloadAction<Profile>) => {
    //   state.form = {
    //     ...state.form,
    //     ...action.payload,
    //   };
    // },
    // resetForm: (state) => {
    //   state.form = state.data;
    //   state.validateErrors = undefined;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleDetailsData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleDetailsData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchArticleDetailsData.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;

export const { reducer: articleDetailsReducer } = articleDetailsSlice;
