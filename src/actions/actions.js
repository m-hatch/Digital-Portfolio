// action types
export const PARALLAX = 'PARALLAX';
export const SET_SPLASH_OPACITY = 'SET_SPLASH_OPACITY';

// action creators
export function parallax(position) {
  return { type: PARALLAX, position }
}

export function setSplashOpacity(opacity) {
  return { type: SET_SPLASH_OPACITY, opacity }
}