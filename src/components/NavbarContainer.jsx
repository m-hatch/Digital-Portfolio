import React from 'react';
import Navbar from './Navbar';

export default React.createClass({

  getInitialState: function () {
      return {
         showNav: true,
         toggleNav: false,
         animate: false
      };
   },

  getName: function() {
    return this.props.name || '';
  },

  getLinks: function () {
    return this.props.nav.links || [];
  },

  getScrollTop: function() {
    return document.documentElement.scrollTop || document.body.scrollTop;
  },

  getScrollBottom: function(padding) {
    return this.getScrollTop() + window.innerHeight - padding;
  },

  getOffsetTop: function(element) {
    return this.getScrollTop() + element.getBoundingClientRect().top;
  },

  toggleNav: function() {
    this.setState(prevState => ({
      animate: true, 
      toggleNav: !prevState.toggleNav
    }));
  },

  handleWheel: function(event) {
    const delta = (event.wheelDelta) ? event.wheelDelta : -1 * event.deltaY;
    (delta < 0) ? this.setState({showNav: false}) : this.setState({showNav: true});
  },

  handleScroll: function(event) {
    const self = this;
    const padding = 50; // for footer
    const scrollBottom = this.getScrollBottom(padding);
    const navLinks = document.querySelectorAll('#topNav a');

    Array.prototype.forEach.call(navLinks, function(el){
      const refElement = document.getElementById(el.innerHTML);
      const refPos = self.getOffsetTop(refElement);

      // add active class when section in view
      ((refPos <= scrollBottom) 
        && (refPos + refElement.clientHeight > scrollBottom || refPos + window.innerHeight > scrollBottom)) 
        ? el.classList.add('topnav__link--active') : el.classList.remove('topnav__link--active');
    });
  },

  handleResize: function(event) {
    // prevent animating nav change on window resize
    this.setState({
      animate: false,
    });
  },

  handleHover: function(mouseEvent) {
    if (mouseEvent.type === 'mouseenter') {
      this.setState({showNav: true});
    }
    if (mouseEvent.type === 'mouseleave') {
      setTimeout( () => {
        this.setState({showNav: false});
      }, 400);
    }
  },

  componentDidMount: function() {
    window.addEventListener('wheel', this.handleWheel);
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
    this.nav.addEventListener('mouseenter', this.handleHover);
    this.nav.addEventListener('mouseleave', this.handleHover);
  },

  componentWillUnmount: function() {
    window.removeEventListener('wheel', this.handleWheel);
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
    this.nav.removeEventListener('mouseenter', this.handleHover);
    this.nav.removeEventListener('mouseleave', this.handleHover);
  },

  render: function() {
    return (
        <Navbar 
          navTitle={ this.getName() } 
          navLinks={ this.getLinks() } 
          navRef={ el => this.nav = el } 
          onBtnClick={ this.toggleNav } 
          showNav={ this.state.showNav } 
          toggleNav={ this.state.toggleNav } 
          animate={ this.state.animate } />
    );
  }

});