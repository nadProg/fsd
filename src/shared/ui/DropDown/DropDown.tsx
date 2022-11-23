import { Menu } from '@headlessui/react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Fragment, Key, ReactNode } from 'react';

import type { PropsWithClassName } from 'shared/types';
import { Button } from 'shared/ui/Button';

import styles from './DropDown.module.scss';

type DropDownItem<V extends Key> = {
  value: V;
  label: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

// todo: improve positioning
type DropDownProps<V extends Key> = PropsWithClassName & {
  items?: DropDownItem<V>[];
  trigger: ReactNode;
};

export const DropDown = <V extends Key>({ className, trigger, items = [] }: DropDownProps<V>): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Menu as="div" className={classNames(className, styles.DropDown)}>
      <Menu.Button as={Fragment}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={styles.items}>
        {items.map((item) => (
          <Menu.Item key={item.value} as={Fragment}>
            {({ active }) => (
              <Button
                onClick={item.onClick}
                className={classNames(styles.item, {
                  [styles.active]: active,
                })}
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
