import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import { useMountEffect } from 'shared/hooks/useMountEffect';

type ReducersList = {
  [key in StateSchemaKey]?: Reducer
};

type ReducersListEntry = [StateSchemaKey, Reducer];

export const useDynamicReducers = (reducers: ReducersList) => {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useMountEffect(() => {
    Object.entries(reducers).forEach(([key, reducer]: ReducersListEntry) => {
      store.reducerManager.add(key, reducer);
      dispatch({ type: `@INIT ${key} reducer` });
    });

    return () => Object.entries(reducers).forEach(([key]: ReducersListEntry) => {
      store.reducerManager.remove(key);
      dispatch({ type: `@DESTROY ${key} reducer` });
    });
  });
};
