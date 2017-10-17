import React from 'react';
import * as util from '../util/utilities';

export default (props) => {

  const animateScroll = (options) => {
    const id = (options.to && options.to.replace(/^#/, '')) || '';
    const element = id ? document.getElementById(id) : document.body;
    const start = util.getScrollTop();
    const pos = util.getOffsetTop(element) + options.animate.offset;
    const change = pos - start;
    const duration = options.animate.duration;

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
    window.location.hash = id;
  };

  const handleClick = (event) => {
    event.preventDefault();
    animateScroll(props);
  };
  
  return (
    <a className={ props.className } href='' onClick={ handleClick } >
      { props.children }
    </a>
  );

}