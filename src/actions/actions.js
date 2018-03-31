import * as types from './types';

// action creators
export function setMainContent(data) {
  return { type: types.SET_MAIN_CONTENT, data};
}

export function parallax(top) {
  return { type: types.PARALLAX, top };
}

export function setSplashOpacity(opacity) {
  return { type: types.SET_SPLASH_OPACITY, opacity };
}

export function setSplashVisibility(isVisible) {
  return { type: types.SET_SPLASH_VISIBILITY, isVisible };
}

export function showNavFullSize(isFullSize) {
	return { type: types.SHOW_NAV_FULL_SIZE, isFullSize};
}

export function toggleNav() {
	return { type: types.TOGGLE_NAV };
}

export function animateNav(isAnimated) {
	return { type: types.ANIMATE_NAV, isAnimated };
}

export function setScrollPos(scrollPos) {
  return { type: types.SET_SCROLL_POS, scrollPos };
}

export function showFooterFullSize(isFullSize) {
  return { type: types.SHOW_FOOTER_FULL_SIZE, isFullSize};
}

export function showModal(isVisible) {
	return { type: types.SHOW_MODAL, isVisible};
}

export function peekModal(isPeeking) {
  return { type: types.PEEK_MODAL, isPeeking};
}

export function setModalContent(project) {
	return { type: types.SET_MODAL_CONTENT, project };
}

export function showContactForm(isVisible) {
  return { type: types.SHOW_CONTACT_FORM, isVisible};
}

export function setFormCompleted(isComplete) {
  return { type: types.SET_FORM_COMPLETED, isComplete};
}
