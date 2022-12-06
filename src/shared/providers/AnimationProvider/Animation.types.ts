export type Spring = typeof import('@react-spring/web');
export type Gesture = typeof import('@use-gesture/react');

export type AnimationContextValue = {
  Spring: Spring;
  Gesture: Gesture;
};
