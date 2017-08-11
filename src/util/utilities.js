export function getScrollTop(padding = 0) {
  return document.documentElement.scrollTop + padding || document.body.scrollTop + padding;
}

export function setScrollTop(position) {
  document.documentElement.scrollTop = document.body.scrollTop = position;
}

export function getScrollCenter() {
  return getScrollTop() + (window.innerHeight/2);
}

export function getScrollBottom(padding = 0) {
  return getScrollTop() + window.innerHeight - padding;
}

export function getOffsetTop(element) {
  return getScrollTop() + element.getBoundingClientRect().top;
}

// jQuery easing 'swing'
export function easeOutQuad(x, t, b, c, d) {
  return -c * (t /= d) * (t - 2) + b;
}