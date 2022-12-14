import { createSelector } from '@reduxjs/toolkit';

import { getCounter } from '../getCounter/getCounter';
import { buildSelector } from '@/shared/lib/store';

export const [useCounterValue, getCounterValue] = buildSelector(createSelector(getCounter, (counter) => counter.value));
