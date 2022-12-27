import { useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import type { PropsWithChildren } from '@/shared/types';
import type { Popper, PopperContextValue } from './Popper.types';
import { PopperContext } from './Popper.context';
import { importPopper } from './Popper.helpers';

type PopperProviderProps = PropsWithChildren & {
  fallback?: ReactNode;
};
export const PopperProvider = ({ children, fallback = null }: PopperProviderProps): JSX.Element => {
  const popperRef = useRef<Popper>();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    importPopper().then((popper) => {
      popperRef.current = popper;
      setIsLoading(false);
    });
  }, []);

  const value: Partial<PopperContextValue> = useMemo(
    () => ({
      Popper: popperRef.current,
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }),
    [isLoading],
  );

  if (isLoading || !popperRef.current) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{fallback}</>;
  }

  return <PopperContext.Provider value={value}>{children}</PopperContext.Provider>;
};
