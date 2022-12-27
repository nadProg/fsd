import { useCallback, useEffect } from 'react';
import classNames from 'classnames';

import type { PropsWithChildren, PropsWithClassName } from '@/shared/types';
import { Portal } from '@/shared/ui/Portal';
import { Overlay } from '@/shared/ui/Overlay';

import { AnimationProvider, useAnimation } from '@/shared/providers/AnimationProvider';
import styles from './Drawer.module.scss';

const height = window.innerHeight;

type DrawerProps = PropsWithClassName &
  PropsWithChildren & {
    isOpen?: boolean;
    onClose?: () => void;
  };

export const DrawerContent = ({ className, children, isOpen, onClose }: DrawerProps): JSX.Element => {
  const { Spring, Gesture } = useAnimation();

  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [api, isOpen, openDrawer]);

  const closeDrawer = useCallback(
    (velocity = 0) => {
      api.start({
        y: height,
        immediate: false,
        config: {
          ...Spring.config.stiff,
          velocity,
        },
        onResolve: onClose,
      });
    },
    [Spring.config.stiff, api, onClose],
  );

  const bind = Gesture.useDrag(
    ({ last, velocity: [, vy], direction: [, dy], movement: [, my], cancel }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          closeDrawer();
        } else {
          openDrawer();
        }
      } else {
        api.start({ y: my, immediate: true });
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    },
  );

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  return (
    <Portal>
      <div
        className={classNames(className, styles.Drawer, {
          [styles.opened]: isOpen,
        })}
      >
        <Overlay onClick={closeDrawer} />
        <Spring.a.div
          className={styles.content}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
};

export const Drawer = ({ children, ...restDrawerProp }: DrawerProps): JSX.Element => (
  <AnimationProvider>
    <DrawerContent {...restDrawerProp}>{children}</DrawerContent>
  </AnimationProvider>
);
