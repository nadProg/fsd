import { UIEventHandler, useCallback } from 'react';
import classNames from 'classnames';

import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll';
import { PropsWithChildren, PropsWithClassName } from 'shared/types';

import { getScrollPosition, scrollPositionSliceActions } from 'features/keepScrollPosition';

import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useMountEffect } from 'shared/hooks/useMountEffect';
import styles from './Page.module.scss';

type PageProps = PropsWithChildren & PropsWithClassName & {
  onScrollEnd?: () => void;
};

export const Page = ({
  className,
  children,
  onScrollEnd,
}: PageProps) => {
  const {
    wrapperRef,
    triggerRef,
  } = useInfiniteScroll<HTMLDivElement, HTMLDivElement>({
    callback: onScrollEnd,
  });

  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const scrollPosition = useSelector(
    (state: StateSchema) => getScrollPosition(state, pathname),
  );

  const onPageScroll = useCallback<UIEventHandler>((evt) => {
    dispatch(scrollPositionSliceActions.setScrollPosition({
      position: evt.currentTarget.scrollTop,
      path: pathname,
    }));
  }, [dispatch, pathname]);

  useMountEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTop = scrollPosition;
    }
  });

  return (
    <main
      ref={wrapperRef}
      className={classNames(className, styles.Page, 'app__main')}
      onScroll={onPageScroll}
    >
      {children}
      <div ref={triggerRef} />
    </main>
  );
};
