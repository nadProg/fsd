import { EffectCallback, useEffect } from 'react';

export const useMountEffect = (effectCallback: EffectCallback) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effectCallback, []);
};
