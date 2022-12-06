import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Profile } from '@/entities/Profile';

import { EditableProfileCardSchema } from '../types/editableProfileCardSchema';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

const initialState: EditableProfileCardSchema = {
  readonly: true,
  isLoading: false,
  data: undefined,
  error: undefined,
};

export const editableProfileSlice = createSlice({
  name: 'editableProfileSlice',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    updateForm: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
    resetForm: (state) => {
      state.form = state.data;
      state.validateErrors = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.form = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(updateProfileData.pending, (state) => {
        state.validateErrors = undefined;
        state.isLoading = true;
      })
      .addCase(updateProfileData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.form = action.payload;
        state.isLoading = false;
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.validateErrors = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: editableProfileSliceActions } = editableProfileSlice;

export const { reducer: editableProfileSliceReducer } = editableProfileSlice;
