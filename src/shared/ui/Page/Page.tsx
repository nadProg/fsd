import {
  MutableRefObject, ReactNode, useRef,
} from 'react';
import classNames from 'classnames';

import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll';

import styles from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <main
      ref={wrapperRef}
      className={classNames(className, styles.Page, 'app__main')}
    >
      {children}
      <div ref={triggerRef} />
    </main>
  );
};
