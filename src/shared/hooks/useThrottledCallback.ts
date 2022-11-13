import { DependencyList, useCallback, useRef } from 'react';

import { Callback } from 'shared/types';

export const useThrottledCallback = <F extends Callback>(
  callback: F,
  delay: number,
  deps: DependencyList,
) => {
  const throttlingRef = useRef(false);

  return useCallback((...args) => {
    if (!throttlingRef.current) {
      callback(...args);
      throttlingRef.current = true;

      setTimeout(() => {
        throttlingRef.current = false;
      }, delay);
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [...deps, delay]);
};
