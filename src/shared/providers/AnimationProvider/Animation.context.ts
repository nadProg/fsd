import { createContext } from 'react';
import { Nullable } from 'shared/types';
import { AnimationContextValue } from './Animation.types';

export const AnimationContext = createContext<Nullable<Partial<AnimationContextValue>>>(null);
