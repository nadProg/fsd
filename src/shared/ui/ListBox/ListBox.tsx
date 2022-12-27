import { Fragment, Key, ReactNode } from 'react';
import classNames from 'classnames';
import { Listbox as HeadLessListBox } from '@headlessui/react';

import { Text } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import type { PropsWithClassName } from '@/shared/types';
import { PopperProvider, usePopper } from '@/shared/providers/PopperProvider';

import styles from './ListBox.module.scss';

type ListBoxItem<V extends Key> = {
  value: V;
  label: ReactNode;
  disabled?: boolean;
};

export type ListBoxProps<V extends Key> = PropsWithClassName & {
  label?: string;
  items?: ListBoxItem<V>[];
  value?: V;
  onChange?: (value: V) => void;
  placeholder?: ReactNode;
  disabled?: boolean;
};

const getTriggerClassName = ({ disabled = false } = {}) =>
  classNames(styles.trigger, {
    [styles.disabled]: disabled,
  });

const getItemClassName = ({ active = false, selected = false, disabled = false } = {}) =>
  classNames(styles.item, {
    [styles.active]: active,
    [styles.selected]: selected,
    [styles.disabled]: disabled,
  });

const ListBoxContent = <V extends Key>({
  className,
  items = [],
  value,
  onChange,
  placeholder,
  label,
  disabled,
}: ListBoxProps<V>) => {
  const { Popper } = usePopper();

  const { referenceRef, popperRef, getPopperProps } = Popper.usePopper<HTMLButtonElement, HTMLUListElement>();
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
      <HeadLessListBox as="div" value={value} onChange={onChange} disabled={disabled}>
        {(listProps) => (
          <>
            <HeadLessListBox.Button as="div">
              <Button ref={referenceRef} className={getTriggerClassName(listProps)} theme="outlined">
                {selectedContent}
              </Button>
            </HeadLessListBox.Button>
            <HeadLessListBox.Options ref={popperRef} className={styles.items} {...getPopperProps()}>
              {items.map((item) => (
                <HeadLessListBox.Option key={item.value} as={Fragment} value={item.value} disabled={item.disabled}>
                  {(itemProps) => <li className={getItemClassName(itemProps)}>{item.label}</li>}
                </HeadLessListBox.Option>
              ))}
            </HeadLessListBox.Options>
          </>
        )}
      </HeadLessListBox>
    </HStack>
  );
};

export const ListBox = <V extends Key>(props: ListBoxProps<V>) => (
  <PopperProvider>
    <ListBoxContent {...props} />
  </PopperProvider>
);
