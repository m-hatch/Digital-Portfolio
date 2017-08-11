import React from 'react';
import * as util from '../util/utilities';

export default React.createClass({

  animateScroll: function(props) {
    const id = (props.to && props.to.replace(/^#/, '')) || '';
    const element = id ? document.getElementById(id) : document.body;
    const start = util.getScrollTop();
    const pos = util.getOffsetTop(element) + props.animate.offset;
    const change = pos - start;
    const duration = props.animate.duration;

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
  },

  handleClick: function(event) {
    event.preventDefault();
    this.animateScroll(this.props);
  },
  
  render: function() {

    return (
      <a className={ this.props.className } href='' onClick={ this.handleClick } >
        { this.props.children }
      </a>
    );
  }

});