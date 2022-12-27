import { useCallback, useMemo, useState } from 'react';

type HoverProps = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

type UseHoverResult = [boolean, HoverProps];

export const useHover = (): UseHoverResult => {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = useCallback(() => {
    setIsHover(true);
  }, [setIsHover]);

  const onMouseLeave = useCallback(() => {
    setIsHover(false);
  }, [setIsHover]);

  return useMemo(() => [isHover, { onMouseEnter, onMouseLeave }], [isHover, onMouseLeave, onMouseEnter]);
};
