import { FC } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';

import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

type StoreProviderProps = {
  initialState?: StateSchema;
  asyncReducers?: ReducersMapObject<StateSchema>
};

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState, asyncReducers }) => {
  const store = createReduxStore({ initialState, asyncReducers });

  return <Provider store={store}>{children}</Provider>;
};
