import { RefObject, useEffect, useRef } from 'react';

export type UseInfiniteScrollOptions = {
  callback?: () => void;
  options?: IntersectionObserverInit;
};

export type UseInfiniteScrollResult<WrapperElement extends HTMLElement, TriggerElement extends HTMLElement> = {
  wrapperRef: RefObject<WrapperElement>;
  triggerRef: RefObject<TriggerElement>;
};

const DEFAULT_ROOT_MARGIN = '0px';
const DEFAULT_THRESHOLD = 1.0;

export const useInfiniteScroll = <WrapperElement extends HTMLElement, TriggerElement extends HTMLElement>({
  callback,
  options: { threshold, rootMargin } = {},
}: UseInfiniteScrollOptions): UseInfiniteScrollResult<WrapperElement, TriggerElement> => {
  const wrapperRef = useRef<WrapperElement>(null);
  const triggerRef = useRef<TriggerElement>(null);

  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;

    let observer: IntersectionObserver | null = null;

    if (callback && triggerElement && wrapperElement) {
      const options = {
        root: wrapperElement,
        rootMargin: rootMargin ?? DEFAULT_ROOT_MARGIN,
        threshold: threshold ?? DEFAULT_THRESHOLD,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(triggerElement);
    }

    return () => {
      if (observer && triggerElement) {
        observer.unobserve(triggerElement);
      }
    };
  }, [callback, triggerRef.current, wrapperRef.current, rootMargin, threshold]);

  return {
    triggerRef,
    wrapperRef,
  };
};
