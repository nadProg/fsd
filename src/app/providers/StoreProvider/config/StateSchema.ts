import { NavigateFunction } from 'react-router-dom';
import { AxiosInstance } from 'axios';
import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';

import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';

import { LoginSchema } from 'features/AuthByUsername';

import { UserSchema } from 'entities/User';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { ArticleDetailsSchema } from 'entities/Article';

export type StateSchema = {
  counter: CounterSchema;
  user: UserSchema;
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
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
  navigate?: NavigateFunction;
};

export type ThunkConfig<T> = {
  rejectValue: T;
  extra: ThunkExtraArgs;
  state: StateSchema;
};
