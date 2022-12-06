import type { Popper } from './Popper.types';

export const importPopper = (): Promise<Popper> => import('shared/hooks/usePopper');
