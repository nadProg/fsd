import { createContext } from 'react';
import type { Nullable } from 'shared/types';
import type { PopperContextValue } from './Popper.types';

export const PopperContext = createContext<Nullable<Partial<PopperContextValue>>>(null);
