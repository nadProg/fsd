// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername';
import { profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/hooks/useDynamicReducers';
import { DeepPartial } from 'shared/types';
import { articleDetailsReducer } from 'entities/Article';
import {
  articleDetailsCommentsReducer,
} from 'pages/ArticleDetailsPage/model/slices/artilceDetailsCommentsSlice/articleDetailsCommentsSlice';
import { addCommentFormReducer } from 'features/addCommentForm/model/slice/addCommentFormSlice';
import { articlesPageReducer } from 'pages/ArticlesPage/model/slices/articlePageSlice/articlesPageSlice';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
  addCommentForm: addCommentFormReducer,
  articlesPage: articlesPageReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
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
