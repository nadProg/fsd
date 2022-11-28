import {
  CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';

import { $api } from 'shared/api/api';
import { rtkApi } from 'shared/api/rtkApi';

import { userReducer } from 'entities/User';
import { counterReducer } from 'entities/Counter';

import { scrollPositionSliceReducer } from 'features/keepScrollPosition';

import { StateSchema, ThunkExtraArgs } from './StateSchema';
import { createReducerManager } from './reducerManager';

type StoreConfig = {
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
};

export const createReduxStore = (
  {
    initialState,
    asyncReducers,
  }: StoreConfig = {},
) => {
  const ensuredAsyncReducers = asyncReducers || {};

  const rootReducer: ReducersMapObject<StateSchema> = {
    ...ensuredAsyncReducers,
    counter: counterReducer,
    user: userReducer,
    scrollPosition: scrollPositionSliceReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const extraArgument: ThunkExtraArgs = {
    api: $api,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    }).concat(rtkApi.middleware),
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
