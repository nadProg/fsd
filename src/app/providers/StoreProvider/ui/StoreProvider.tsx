import { FC } from 'react';
import { Provider } from 'react-redux';

import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { createReduxStore } from '../config/store';

type StoreProviderProps = {
  initialState?: StateSchema;
};

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
  const store = createReduxStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};
