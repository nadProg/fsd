import { useContext } from 'react';
import { PopperContext } from './Popper.context';
import type { PopperContextValue } from './Popper.types';

// eslint-disable-next-line max-len
const isPopperRequired = (popper: Partial<PopperContextValue>): popper is PopperContextValue => popper.Popper !== undefined;

export const usePopper = (): PopperContextValue => {
  const popper = useContext(PopperContext);

  if (popper === null) {
    throw new Error('usePopper must be used within PopperProvider');
  }

  if (!isPopperRequired(popper)) {
    throw new Error('Popper has not been loaded');
  }

  return popper;
};
