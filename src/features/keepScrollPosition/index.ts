import {
  scrollPositionSliceReducer,
  scrollPositionSliceActions,
} from './model/slices/scrollPositionSlice/scrollPositionSlice';
import { getScrollPosition } from './model/selectors/getScrollPosition/getScrollPosition';
import type { ScrollPositionSchema } from './model/types/scrollPositionSchema';

export { scrollPositionSliceReducer, getScrollPosition, scrollPositionSliceActions };

export type { ScrollPositionSchema };
