import { counterReducer, counterActions } from './model/slice/CounterSlice';
import { CounterSchema } from './model/types/CounterSchema';
import { Counter } from './ui/Counter';

export { counterReducer, Counter, counterActions };

export type { CounterSchema };
