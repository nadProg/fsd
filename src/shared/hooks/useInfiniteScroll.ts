import { RefObject, useEffect, useRef } from 'react';

export type UseInfiniteScrollOptions = {
  callback?: () => void;
};

export type UseInfiniteScrollResult<WrapperElement extends HTMLElement, TriggerElement extends HTMLElement> = {
  wrapperRef: RefObject<WrapperElement>;
  triggerRef: RefObject<TriggerElement>;
};

export const useInfiniteScroll = <WrapperElement extends HTMLElement, TriggerElement extends HTMLElement>({
  callback,
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
        rootMargin: '0px',
        threshold: 1.0,
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
  }, [callback, triggerRef, wrapperRef]);

  return {
    triggerRef,
    wrapperRef,
  };
};
