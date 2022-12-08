import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleRatingSchema } from '../types/articleRatingSchema';

const initialState: ArticleRatingSchema = {
  // initialState
};

export const articleRatingSlice = createSlice({
  name: 'articleRating',
  initialState,
  reducers: {
    template: (state, action: PayloadAction<string>) => {
      // template
    },
  },
  // extraReducers: (builder) => {
  //     builder
  //         .addCase(, (state) => {
  //             state.error = undefined;
  //             state.isLoading = true;
  //         })
  //         .addCase(, (state) => {
  //             state.isLoading = false;
  //         })
  //         .addCase(, (state, action) => {
  //             state.isLoading = false;
  //             state.error = action.payload;
  //         });
  // },
});

export const { actions: articleRatingActions } = articleRatingSlice;
export const { reducer: articleRatingReducer } = articleRatingSlice;
