/* eslint-disable import/no-extraneous-dependencies, react/display-name */
import { Story } from '@storybook/react';

import { ReducersMapObject } from '@reduxjs/toolkit';
import { ReducersList } from '@/shared/hooks/useDynamicReducers';
import { DeepPartial } from '@/shared/types';

import { articleDetailsReducer } from '@/entities/Article/testing';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { addCommentFormReducer } from '@/features/addCommentForm/testing';
import { editableProfileSliceReducer } from '@/features/editableProfileCard/testing';
import { articlesPageReducer } from '@/pages/ArticlesPage/testing';
import { articleDetailPageReducer } from '@/pages/ArticleDetailsPage/testing';

import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  editableProfile: editableProfileSliceReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articlesPage: articlesPageReducer,
  articleDetailsPage: articleDetailPageReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema> = {}, asyncReducers: ReducersList = defaultAsyncReducers) =>
  (StoryComponent: Story) =>
    (
      <StoreProvider
        initialState={state as StateSchema}
        asyncReducers={asyncReducers as ReducersMapObject<StateSchema>}
      >
        <StoryComponent />
      </StoreProvider>
    );
