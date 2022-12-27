import { useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import type { PropsWithChildren } from '@/shared/types';
import type { AnimationContextValue, Gesture, Spring } from './Animation.types';
import { importAnimation } from './Animation.helpers';
import { AnimationContext } from './Animation.context';

type AnimationProviderProps = PropsWithChildren & {
  fallback?: ReactNode;
};
export const AnimationProvider = ({ children, fallback = null }: AnimationProviderProps): JSX.Element => {
  const springRef = useRef<Spring>();
  const gestureRef = useRef<Gesture>();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    importAnimation().then(([spring, gesture]) => {
      springRef.current = spring;
      gestureRef.current = gesture;
      setIsLoading(false);
    });
  }, []);

  const value: Partial<AnimationContextValue> = useMemo(
    () => ({
      Spring: springRef.current,
      Gesture: gestureRef.current,
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }),
    [isLoading],
  );

  if (isLoading || !springRef.current || !gestureRef.current) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{fallback}</>;
  }

  return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>;
};
