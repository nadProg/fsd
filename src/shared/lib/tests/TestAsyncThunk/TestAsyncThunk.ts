import { StateSchema } from 'app/providers/StoreProvider';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';
import { DeepPartial } from 'shared/types';

type ActionCreator<Return, Arg, RejectedValue> =
  (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios');

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: jest.MockedFn<any>;

  getState: () => StateSchema;

  actionCreator: ActionCreator<Return, Arg, RejectedValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigate: jest.MockedFn<any>;

  constructor(actionCreator: ActionCreator<Return, Arg, RejectedValue>, state: DeepPartial<StateSchema> = {}) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);
    this.navigate = jest.fn();
    this.api = jest.mocked(axios, true);
  }

  callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    return action(
      this.dispatch,
      this.getState,
      {
        api: this.api,
        navigate: this.navigate,
      },
    );
  }
}
