import { useCallback, useState } from 'react';
import { usePopper as useOriginalPopper } from 'react-popper';

import type { Nullable } from 'shared/types';
import { isFunction } from 'shared/helpers';

import { PopperConfig, PopperProps, UsePopperReturn } from './usePopper.types';

const DEFAULT_OPTIONS = {
  placement: 'bottom',
} as const;

const DEFAULT_MODIFIERS = [
  {
    name: 'flip',
  },
  {
    name: 'offset',
    options: {
      offset: [0, 5],
    },
  },
];

export const usePopper = <ReferenceElement extends HTMLElement = HTMLButtonElement,
  PopperElement extends HTMLElement = HTMLDivElement,
  Modifiers extends string = string,
>(config: PopperConfig<Modifiers> = {}): UsePopperReturn<ReferenceElement, PopperElement> => {
  const [referenceElement, setReferenceElement] = useState<Nullable<ReferenceElement>>(null);
  const [popperElement, setPopperElement] = useState<Nullable<PopperElement>>(null);

  const modifiers = Array.isArray(config.modifiers)
    ? DEFAULT_MODIFIERS.concat(config.modifiers)
    : DEFAULT_MODIFIERS;

  const boundaryModifier = config.boundary
    ? {
      name: 'preventOverflow',
      options: {
        boundary: config.boundary,
      },
    }
    : null;

  const popper = useOriginalPopper(referenceElement, popperElement, {
    ...DEFAULT_OPTIONS,
    ...config,
    modifiers: boundaryModifier ? [boundaryModifier, ...modifiers] : modifiers,
  });

  const {
    styles,
    attributes,
    state,
    update,
  } = popper;

  const isReferenceHidden = Boolean(
    state?.modifiersData.hide?.isReferenceHidden,
  );

  const updatePopper = useCallback(() => {
    if (isFunction(update)) {
      setTimeout(update);
    }
  }, [update]);

  // todo: dependecies
  const getPopperProps = useCallback((): PopperProps<PopperElement> => ({
    style: {
      ...styles.popper,
      zIndex: 10,
    },
    ...attributes.popper,
  }), [styles, attributes]);

  return {
    getPopperProps,
    isReferenceHidden,
    referenceRef: setReferenceElement,
    popperRef: setPopperElement,
    update: updatePopper,
  };
};
