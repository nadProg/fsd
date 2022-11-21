import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';

import { PropsWithChildren } from 'shared/types';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

type StoreProviderProps = PropsWithChildren & {
  initialState?: StateSchema;
  asyncReducers?: ReducersMapObject<StateSchema>
};

export const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
  const store = createReduxStore({ initialState, asyncReducers });

  return <Provider store={store}>{children}</Provider>;
};
