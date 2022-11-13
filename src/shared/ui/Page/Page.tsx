import classNames from 'classnames';

import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll';
import { PropsWithChildren, PropsWithClassName } from 'shared/types';

import styles from './Page.module.scss';

type PageProps = PropsWithChildren & PropsWithClassName & {
  onScrollEnd?: () => void;
};

export const Page = ({ className, children, onScrollEnd }: PageProps) => {
  const { wrapperRef, triggerRef } = useInfiniteScroll<HTMLDivElement, HTMLDivElement>({
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
