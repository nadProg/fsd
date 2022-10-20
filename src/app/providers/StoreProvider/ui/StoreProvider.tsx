import { FC } from 'react';
import { Provider } from 'react-redux';

import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';

type StoreProviderProps = {
  initialState?: StateSchema;
  asyncReducers?: ReducersMapObject<StateSchema>
};

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState, asyncReducers }) => {
  const store = createReduxStore(initialState, asyncReducers);

  return <Provider store={store}>{children}</Provider>;
};
