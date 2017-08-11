import * as types from './types';

// action creators
export function parallax(top) {
  return { type: types.PARALLAX, top }
}

export function setSplashOpacity(opacity) {
  return { type: types.SET_SPLASH_OPACITY, opacity }
}