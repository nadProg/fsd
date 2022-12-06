import type { PropsWithChildren, PropsWithClassName } from '@/shared/types';

export type PopoverProps = PropsWithClassName & PropsWithChildren & {
  trigger: JSX.Element;
};
