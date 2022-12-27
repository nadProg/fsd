import { AxiosInstance } from 'axios';
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

import { rtkApi } from '@/shared/api/rtkApi';

import { UserSchema } from '@/entities/User';
import { CounterSchema } from '@/entities/Counter';
import { ArticleDetailsSchema } from '@/entities/Article';

import { LoginSchema } from '@/features/AuthByUsername';
import { AddCommentFormSchema } from '@/features/addCommentForm';
import { ScrollPositionSchema } from '@/features/keepScrollPosition';
import { EditableProfileCardSchema } from '@/features/editableProfileCard';

import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import { ArticlesPageSchema } from '@/pages/ArticlesPage';

export type StateSchema = {
  counter: CounterSchema;
  user: UserSchema;
  loginForm?: LoginSchema;
  editableProfile?: EditableProfileCardSchema;
  articleDetails?: ArticleDetailsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
  scrollPosition: ScrollPositionSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
};

export type StateSchemaKey = keyof StateSchema;

export type ReducerManager = {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
};

export type ReduxStoreWithManager = EnhancedStore<StateSchema> & {
  reducerManager: ReducerManager;
};

export type ThunkExtraArgs = {
  api: AxiosInstance;
};

export type ThunkConfig<T> = {
  rejectValue: T;
  extra: ThunkExtraArgs;
  state: StateSchema;
};
