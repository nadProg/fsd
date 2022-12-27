import type { Gesture, Spring } from './Animation.types';

export const importAnimation = async (): Promise<[Spring, Gesture]> =>
  Promise.all([import('@react-spring/web'), import('@use-gesture/react')]);
