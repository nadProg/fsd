// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react';

import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from '@/features/AuthByUsername';
import { ReducersList } from '@/shared/hooks/useDynamicReducers';
import { DeepPartial } from '@/shared/types';

import { articleDetailsReducer } from '@/entities/Article';

import { addCommentFormReducer } from '@/features/addCommentForm/model/slice/addCommentFormSlice';
import { editableProfileSliceReducer } from '@/features/editableProfileCard';

import { articlesPageReducer } from '@/pages/ArticlesPage/model/slices/articlePageSlice/articlesPageSlice';
import {
  articleDetailPageReducer,
} from '@/pages/ArticleDetailsPage/model/slices/articleDetailsPageSlice/articleDetailPageSlice';

import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  editableProfile: editableProfileSliceReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articlesPage: articlesPageReducer,
  articleDetailsPage: articleDetailPageReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema> = {},
  asyncReducers: ReducersList = defaultAsyncReducers,
  // eslint-disable-next-line react/display-name
) => (StoryComponent: Story) => (
  <StoreProvider
    initialState={state as StateSchema}
    asyncReducers={asyncReducers as ReducersMapObject<StateSchema>}
  >
    <StoryComponent />
  </StoreProvider>
);
