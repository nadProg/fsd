import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialScrollPositionState } from './initialScrollPositionState';

export const scrollPositionSlice = createSlice({
  name: 'scrollPositionSlice',
  initialState: initialScrollPositionState,
  reducers: {
    setScrollPosition: (state, action: PayloadAction<{ path: string; position: number }>) => {
      const { path, position } = action.payload;
      state.scroll[path] = position;
    },
  },
  extraReducers: {},
});

export const { actions: scrollPositionSliceActions } = scrollPositionSlice;

export const { reducer: scrollPositionSliceReducer } = scrollPositionSlice;
