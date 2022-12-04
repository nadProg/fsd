import { cloneElement, Fragment } from 'react';
import { Popover as HeadlessPopover } from '@headlessui/react';

import { usePopper } from 'shared/hooks/usePopper';

import type { PopoverProps } from './Popover.types';

import styles from './Popover.module.scss';

export const Popover = ({ trigger, className, children }: PopoverProps): JSX.Element => {
  const {
    referenceRef,
    popperRef,
    getPopperProps,
  } = usePopper();

  return (
    <HeadlessPopover className={className}>
      <HeadlessPopover.Button as={Fragment}>
        {cloneElement(trigger, {
          ref: referenceRef,
        })}
      </HeadlessPopover.Button>

      <HeadlessPopover.Panel ref={popperRef} className={styles.panel} {...getPopperProps()}>
        {children}
      </HeadlessPopover.Panel>
    </HeadlessPopover>
  );
};
