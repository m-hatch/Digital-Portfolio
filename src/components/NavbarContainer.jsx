import React from 'react';
const smoothScroll = require('smoothscroll');
import Navbar from './Navbar';

export default React.createClass({

  getInitialState: function () {
      return {
         showNav: true,
         toggleNav: false,
         animate: false,
         winHeight: window.innerHeight
      };
   },

  getName: function() {
    return this.props.name || '';
  },

  getLinks: function () {
    return this.props.nav.links || [];
  },

  toggleNav: function() {
    this.setState(prevState => ({
      animate: true, 
      toggleNav: !prevState.toggleNav
    }));
  },

  navHide: function(event) {
    const delta = (event.wheelDelta) ? event.wheelDelta : -1 * event.deltaY;
    (delta < 0) ? this.setState({showNav: false}) : this.setState({showNav: true});
  },

  navHighlight: function(event) {
    const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    const navLinks = document.querySelectorAll('#topNav a');

    Array.prototype.forEach.call(navLinks, function(el){
      const refElement = document.getElementById(el.innerHTML);
      const padding = 50; // for footer
      const refPos = refElement.getBoundingClientRect().top + window.scrollY - window.innerHeight + padding;

      ((refPos <= scrollPos) 
        && (refPos + refElement.clientHeight > scrollPos || refPos + window.innerHeight > scrollPos)) 
        ? el.classList.add('topnav__link--active') : el.classList.remove('topnav__link--active');
    });
  },

  handleResize: function(event) {
    // prevent animating nav change on window resize
    this.setState({
      animate: false,
      winHeight: window.innerHeight
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
    window.addEventListener('scroll', this.navHighlight);
    window.addEventListener('wheel', this.navHide);
    window.addEventListener('resize', this.handleResize);
    this.icon.addEventListener('click', this.toggleNav);
    this.nav.addEventListener('mouseenter', this.handleHover);
    this.nav.addEventListener('mouseleave', this.handleHover);
  },

  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.navHighlight);
    window.removeEventListener('wheel', this.navHide);
    window.removeEventListener('resize', this.handleResize);
    this.icon.removeEventListener('click', this.toggleNav);
    this.nav.removeEventListener('mouseenter', this.handleHover);
    this.nav.removeEventListener('mouseleave', this.handleHover);
  },

  render: function() {
    return (
        <Navbar 
          navTitle={ this.getName() } 
          navLinks={ this.getLinks() } 
          navRef={ el => this.nav = el } 
          iconRef={ el => this.icon = el } 
          showNav={ this.state.showNav } 
          toggleNav={ this.state.toggleNav } 
          animate={ this.state.animate } />
    );
  }

});