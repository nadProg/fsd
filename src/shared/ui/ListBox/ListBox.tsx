import { Fragment, Key, ReactNode } from 'react';
import classNames from 'classnames';
import { Listbox as HeadLessListBox } from '@headlessui/react';

import { Text } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button';
import { HStack } from 'shared/ui/Stack';
import type { PropsWithClassName } from 'shared/types';

import styles from './ListBox.module.scss';

type ListBoxItem<V> = {
  id: Key;
  value: V;
  label: ReactNode;
  disabled?: boolean;
};

type ListBoxProps<V> = PropsWithClassName & {
  label?: string;
  items?: ListBoxItem<V>[];
  value?: V;
  onChange?: (value: V) => void;
  placeholder?: ReactNode;
};

// eslint-disable-next-line @typescript-eslint/comma-dangle
export const ListBox = <V,>({
  className, items = [], value, onChange, placeholder, label,
}: ListBoxProps<V>) => {
  const selectedItem = value !== undefined ? items.find((item) => item.value === value) : null;
  const selectedContent = selectedItem?.label ?? placeholder;

  return (
    <HStack gap={8} className={className}>
      {label && (
        <Text>
          {label}
          {'>'}
        </Text>
      )}
      <HeadLessListBox
        as="div"
        className={styles.listBoxWrapper}
        value={value}
        onChange={onChange}
      >
        <HeadLessListBox.Button as="div">
          <Button className={styles.trigger} theme="outlined">
            {selectedContent}
          </Button>
        </HeadLessListBox.Button>
        <HeadLessListBox.Options className={styles.items}>
          {items.map((item) => (
            <HeadLessListBox.Option
              key={item.id}
              as={Fragment}
              value={item.value}
              disabled={item.disabled}
            >
              {
                ({
                  active,
                  selected,
                  disabled,
                }) => (
                  <li className={classNames(styles.item, {
                    [styles.active]: active,
                    [styles.selected]: selected,
                    [styles.disabled]: disabled,
                  })}
                  >
                    {item.label}
                  </li>
                )
              }
            </HeadLessListBox.Option>
          ))}
        </HeadLessListBox.Options>
      </HeadLessListBox>
    </HStack>
  );
};
