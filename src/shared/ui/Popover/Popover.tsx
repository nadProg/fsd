import { cloneElement, Fragment } from 'react';
import { Popover as HeadlessPopover } from '@headlessui/react';

import { PopperProvider, usePopper } from '@/shared/providers/PopperProvider';

import type { PopoverProps } from './Popover.types';

import styles from './Popover.module.scss';

const PopoverContent = ({ trigger, className, children }: PopoverProps): JSX.Element => {
  const { Popper } = usePopper();

  const { referenceRef, popperRef, getPopperProps } = Popper.usePopper();

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

export const Popover = ({ children, ...restPopoverProps }: PopoverProps) => (
  <PopperProvider>
    <PopoverContent {...restPopoverProps}>{children}</PopoverContent>
  </PopperProvider>
);
