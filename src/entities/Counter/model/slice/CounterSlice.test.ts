import { CounterSchema } from '../types/CounterSchema';
import { counterReducer, counterActions } from './CounterSlice';

describe('CounterSlice', () => {
  test('should increase counter value', () => {
    const state: CounterSchema = {
      value: 10,
    };

    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 11,
    });
  });

  test('should decrease counter value', () => {
    const state: CounterSchema = {
      value: 10,
    };

    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 9,
    });
  });

  test('should increase counter value with default state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
