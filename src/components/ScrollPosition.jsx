import React from 'react';
import { withRouter } from 'react-router-dom';
import * as util from '../util/utilities';

class ScrollPosition extends React.Component {

  constructor(props) {
    super(props);
    this.jumpToHash = this.jumpToHash.bind(this);
    this.animateScroll = this.animateScroll.bind(this);
  }

  componentDidUpdate(prevProps) {console.log('hello');
    // check if previous location is homepage
    if (prevProps.location.pathname === '/') {
      // check if current location is homepage
      (this.props.location.pathname === '/')
        ? this.animateScroll(this.props.location.hash)
        : window.scrollTo(0, 0);
    } 
    else {
      // check if location is anchor hash
      (this.props.location.hash !== '')
        ? this.jumpToHash(this.props.location.hash)
        : window.scrollTo(0, 0);
    }
  }

  jumpToHash(hash) {
    const position = this.getPosition(hash);
    util.setScrollTop(position);
  }

  animateScroll(hash) {
    const duration = 400;
    const start = util.getScrollTop();
    const pos = this.getPosition(hash);
    const change = pos - start;

    function animate(elapsedTime = 0) {
      const increment = 20;
      const elapsed = elapsedTime + increment;
      const position = util.easeOutQuad(null, elapsed, start, change, duration);
      util.setScrollTop(position);

      elapsed < duration && setTimeout(function() {
        animate(elapsed);
      }, increment);
    }
    animate();
  }

  getPosition(hash) {
    const id = (hash && hash.replace(/^#/, '')) || '';
    const element = id ? document.getElementById(id) : document.body;
    // set offset for navbar if hash not empty string
    const offset = (id !== '') ? -57 : 0;

    return util.getOffsetTop(element) + offset;
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollPosition);
