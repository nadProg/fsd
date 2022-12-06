import { Menu } from '@headlessui/react';
import classNames from 'classnames';
import {
  cloneElement, Fragment, Key,
} from 'react';

import { Button } from 'shared/ui/Button';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { PopperProvider, usePopper } from 'shared/providers/PopperProvider';

import { isButtonDropDownItem } from './utils/isButtonDropDownItem';
import { DropDownProps } from './DropDown.types';
import styles from './DropDown.module.scss';

const getItemClassName = (active: boolean): string => classNames(styles.item, {
  [styles.active]: active,
});

const DropDownContent = <V extends Key>({
  className,
  trigger,
  items = [],
}: DropDownProps<V>): JSX.Element => {
  const { Popper } = usePopper();

  const {
    referenceRef,
    popperRef,
    getPopperProps,
  } = Popper.usePopper();

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
              isButtonDropDownItem(item)
                ? (
                  <Button
                    onClick={item.onClick}
                    className={getItemClassName(active)}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <AppLink
                    to={item.href}
                    theme={AppLinkTheme.Clear}
                    className={getItemClassName(active)}
                  >
                    {item.label}
                  </AppLink>
                )
            )}
          </Menu.Item>
        ))}

      </Menu.Items>
    </Menu>
  );
};

export const DropDown = <V extends Key>(props: DropDownProps<V>) => (
  <PopperProvider>
    <DropDownContent {...props} />
  </PopperProvider>
);
