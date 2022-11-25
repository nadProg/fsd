import { Menu } from '@headlessui/react';
import classNames from 'classnames';
import {
  cloneElement, Fragment, Key, ReactNode,
} from 'react';

import type { PropsWithClassName } from 'shared/types';
import { Button } from 'shared/ui/Button';

import { usePopper } from 'shared/hooks/usePopper';
import styles from './DropDown.module.scss';

type DropDownItem<V extends Key> = {
  value: V;
  label: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

type DropDownProps<V extends Key> = PropsWithClassName & {
  items?: DropDownItem<V>[];
  trigger: JSX.Element;
};

const getButtonClassName = (active: boolean): string => classNames(styles.item, {
  [styles.active]: active,
});

export const DropDown = <V extends Key>({
  className,
  trigger,
  items = [],
}: DropDownProps<V>): JSX.Element => {
  const {
    referenceRef,
    popperRef,
    getPopperProps,
  } = usePopper();

  return (
    <Menu as="div" className={classNames(className, styles.DropDown)}>
      <Menu.Button as={Fragment}>
        {cloneElement(trigger, {
          ref: referenceRef,
        })}
      </Menu.Button>

      <Menu.Items ref={popperRef} className={styles.items} {...getPopperProps()}>
        {items.map((item) => (
          <Menu.Item key={item.value} as={Fragment}>
            {({ active }) => (
              <Button
                onClick={item.onClick}
                className={getButtonClassName(active)}
              >
                {item.label}
              </Button>
            )}
          </Menu.Item>
        ))}

      </Menu.Items>
    </Menu>
  );
};
