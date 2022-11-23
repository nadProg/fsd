import { Fragment, Key, ReactNode } from 'react';
import classNames from 'classnames';
import { Listbox as HeadLessListBox } from '@headlessui/react';

import { Text } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button';
import { HStack } from 'shared/ui/Stack';
import type { PropsWithClassName } from 'shared/types';

import styles from './ListBox.module.scss';

type ListBoxItem<V extends Key> = {
  value: V;
  label: ReactNode;
  disabled?: boolean;
};

// todo: improve positioning
export type ListBoxProps<V extends Key> = PropsWithClassName & {
  label?: string;
  items?: ListBoxItem<V>[];
  value?: V;
  onChange?: (value: V) => void;
  placeholder?: ReactNode;
  disabled?: boolean;
};

export const ListBox = <V extends Key>({
  className, items = [], value, onChange, placeholder, label, disabled,
}: ListBoxProps<V>) => {
  const selectedItem = value !== undefined ? items.find((item) => item.value === value) : null;
  const selectedContent = selectedItem?.label ?? placeholder;

  return (
    <HStack gap={8} className={className}>
      {label && (
        <Text className={styles.label}>
          {label}
          {'>'}
        </Text>
      )}
      <HeadLessListBox
        as="div"
        className={styles.listBoxWrapper}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        {({ disabled: listBoxDisabled }) => (
          <>
            <HeadLessListBox.Button as="div">
              <Button
                className={classNames(styles.trigger, {
                  [styles.disabled]: listBoxDisabled,
                })}
                theme="outlined"
              >
                {selectedContent}
              </Button>
            </HeadLessListBox.Button>
            <HeadLessListBox.Options className={styles.items}>
              {items.map((item) => (
                <HeadLessListBox.Option
                  key={item.value}
                  as={Fragment}
                  value={item.value}
                  disabled={item.disabled}
                >
                  {
                    ({
                      active,
                      selected,
                      disabled: listItemDisabled,
                    }) => (
                      <li className={classNames(styles.item, {
                        [styles.active]: active,
                        [styles.selected]: selected,
                        [styles.disabled]: listItemDisabled,
                      })}
                      >
                        {item.label}
                      </li>
                    )
                  }
                </HeadLessListBox.Option>
              ))}
            </HeadLessListBox.Options>
          </>
        )}
      </HeadLessListBox>
    </HStack>
  );
};
