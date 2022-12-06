import { createContext } from 'react';
import type { Nullable } from '@/shared/types';
import type { AnimationContextValue } from './Animation.types';

export const AnimationContext = createContext<Nullable<Partial<AnimationContextValue>>>(null);
