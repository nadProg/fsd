import { useDispatch, useStore } from 'react-redux';
import type { Reducer } from '@reduxjs/toolkit';

import { useMountEffect } from '@/shared/hooks/useMountEffect';

import type { StateSchemaKey } from '@/app/providers/StoreProvider/config/StateSchema';
import type { ReduxStoreWithManager, StateSchema } from '@/app/providers/StoreProvider';

export type ReducersList = {
  [key in StateSchemaKey]?: Reducer<NonNullable<StateSchema[key]>>;
};

export type DynamicReducersOptions = {
  keepMounted?: boolean;
};

export const useDynamicReducers = (reducers: ReducersList, options: DynamicReducersOptions = {}) => {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useMountEffect(() => {
    const reducersMap = store.reducerManager.getReducerMap();

    Object.entries(reducers).forEach(([key, reducer]) => {
      if (!reducersMap[key as StateSchemaKey]) {
        store.reducerManager.add(key as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${key} reducer` });
      }
    });

    return () => {
      if (!options.keepMounted) {
        Object.entries(reducers).forEach(([key]) => {
          store.reducerManager.remove(key as StateSchemaKey);
          dispatch({ type: `@DESTROY ${key} reducer` });
        });
      }
    };
  });
};
