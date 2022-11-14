import { DependencyList, useCallback, useRef } from 'react';

import { Callback } from 'shared/types';

export const useDebouncedCallback = <F extends Callback>(
  callback: F,
  delay: number,
  deps: DependencyList,
) => {
  const timeoutId = useRef<NodeJS.Timeout>();

  return useCallback((...args) => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => {
      callback(...args);
    }, delay);
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [...deps, delay]);
};
