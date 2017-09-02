import * as types from './types';

// action creators
export function parallax(top) {
  return { type: types.PARALLAX, top };
}

export function setSplashOpacity(opacity) {
  return { type: types.SET_SPLASH_OPACITY, opacity };
}

export function showNav(isVisible) {
	return { type: types.SHOW_NAV, isVisible};
}

export function toggleNav() {
	return { type: types.TOGGLE_NAV };
}

export function animateNav(isAnimated) {
	return { type: types.ANIMATE_NAV, isAnimated };
}

export function showModal(isVisible) {
	return { type: types.SHOW_MODAL, isVisible};
}

export function setModalContent(project) {
	return { type: types.SET_MODAL_CONTENT, project };
}

export function showContactForm(isVisible) {
  return { type: types.SHOW_CONTACT_FORM, isVisible};
}