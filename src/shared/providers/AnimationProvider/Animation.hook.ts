import { useContext } from 'react';
import { AnimationContext } from './Animation.context';
import type { AnimationContextValue } from './Animation.types';

// eslint-disable-next-line max-len
const isAnimationRequired = (animation: Partial<AnimationContextValue>): animation is AnimationContextValue =>
  animation.Spring !== undefined && animation.Gesture !== undefined;

export const useAnimation = (): AnimationContextValue => {
  const animation = useContext(AnimationContext);

  if (animation === null) {
    throw new Error('useAnimation must be used within AnimationProvider');
  }

  if (!isAnimationRequired(animation)) {
    throw new Error('Animation libraries have not been loaded');
  }

  return animation;
};
