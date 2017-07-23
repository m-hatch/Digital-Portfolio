import React from 'react';

export default React.createClass({

  getScrollTop: function() {
    return document.documentElement.scrollTop || document.body.scrollTop;
  },

  setScrollTop: function(position) {
    document.documentElement.scrollTop = document.body.scrollTop = position;
  },

  getOffsetTop: function(element) {
    const { top } = element.getBoundingClientRect();
    return top + this.getScrollTop();
  },

  // jQuery easing 'swing'
  easeOutQuad: function(x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  },

  animateScroll: function(props) {
    const self = this;
    const id = (props.to && props.to.replace(/^#/, '')) || '';
    const element = id ? document.getElementById(id) : document.body;
    const start = this.getScrollTop();
    const pos = this.getOffsetTop(element) + props.animate.offset;
    const change = pos - start;
    const duration = props.animate.duration;

    function animate(elapsedTime = 0) {
      const increment = 20;
      const elapsed = elapsedTime + increment;
      const position = self.easeOutQuad(null, elapsed, start, change, duration);
      self.setScrollTop(position);

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