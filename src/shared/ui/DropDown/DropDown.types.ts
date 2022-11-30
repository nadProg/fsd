import { Key, ReactNode } from 'react';
import { PropsWithClassName, ValuesOf } from 'shared/types';

export const DropDownItemType = {
  Button: 'button',
  Link: 'link',
} as const;

type AbstractDropDownItem<V extends Key, T extends ValuesOf<typeof DropDownItemType>> = {
  value: V;
  label: ReactNode;
  type: T;
};

export type ButtonDropDownItem<V extends Key> = AbstractDropDownItem<V, typeof DropDownItemType.Button> & {
  disabled?: boolean;
  onClick?: () => void;
};

export type LinkDropDownItem<V extends Key> = AbstractDropDownItem<V, typeof DropDownItemType.Link> & {
  href: string;
};

export type DropDownItem<V extends Key> = ButtonDropDownItem<V> | LinkDropDownItem<V>;

export type DropDownProps<V extends Key> = PropsWithClassName & {
  items?: DropDownItem<V>[];
  trigger: JSX.Element;
};
