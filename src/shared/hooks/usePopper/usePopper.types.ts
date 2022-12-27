import type { HTMLAttributes } from 'react';
import * as PopperJS from '@popperjs/core';
import type { Modifier } from 'react-popper';

export type PopperProps<Popper extends HTMLElement> = HTMLAttributes<Popper>;

export type UsePopperReturn<ReferenceElement extends HTMLElement, PopperElement extends HTMLElement> = {
  referenceRef: (node: ReferenceElement) => void;
  popperRef: (node: PopperElement) => void;
  getPopperProps: () => PopperProps<PopperElement>;
  isReferenceHidden: boolean;
  update: () => void;
};

export type PopperConfig<Modifiers> = Omit<Partial<PopperJS.Options>, 'modifiers'> & {
  modifiers?: ReadonlyArray<Modifier<Modifiers>>;
  boundary?: PopperJS.Boundary;
};
