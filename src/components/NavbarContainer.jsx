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
    const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    const navLinks = document.querySelectorAll('#topNav a');

    Array.prototype.forEach.call(navLinks, function(el){
      const refElement = document.getElementById(el.innerHTML);
      const padding = 50; // for footer
      const refPos = refElement.getBoundingClientRect().top + window.scrollY - window.innerHeight + padding;

      // add active class when section in view
      ((refPos <= scrollPos) 
        && (refPos + refElement.clientHeight > scrollPos || refPos + window.innerHeight > scrollPos)) 
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