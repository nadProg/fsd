import { FC } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ReducersMapObject } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { createReduxStore } from '../config/store';

type StoreProviderProps = {
  initialState?: StateSchema;
  asyncReducers?: ReducersMapObject<StateSchema>
};

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState, asyncReducers }) => {
  const navigate = useNavigate();
  const store = createReduxStore(initialState, asyncReducers, navigate);

  return <Provider store={store}>{children}</Provider>;
};
