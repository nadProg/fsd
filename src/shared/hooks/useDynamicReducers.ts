import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import { useMountEffect } from 'shared/hooks/useMountEffect';

export type ReducersList = {
  [key in StateSchemaKey]?: Reducer
};

export const useDynamicReducers = (reducers: ReducersList) => {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useMountEffect(() => {
    Object.entries(reducers).forEach(([key, reducer]) => {
      store.reducerManager.add(key as StateSchemaKey, reducer);
      dispatch({ type: `@INIT ${key} reducer` });
    });

    return () => Object.entries(reducers).forEach(([key]) => {
      store.reducerManager.remove(key as StateSchemaKey);
      dispatch({ type: `@DESTROY ${key} reducer` });
    });
  });
};
