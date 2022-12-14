import { useSelector } from 'react-redux';
import type { StateSchema } from '@/app/providers/StoreProvider';

type Selector<T> = (state: StateSchema) => T;
type Result<T> = [() => T, Selector<T>];

export const buildSelector = <T>(selector: Selector<T>): Result<T> => {
  const useSelectorHook = () => useSelector(selector);

  return [useSelectorHook, selector];
};
