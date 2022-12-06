import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';
import { getScroll } from '../getScroll/getScroll';

const DEFAULT_SCROLL_POSITION = 0;

export const getScrollPosition = createSelector(
  getScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] ?? DEFAULT_SCROLL_POSITION,
);
