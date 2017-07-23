import React from 'react';
const smoothScroll = require('smoothscroll');
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

  handleResize: function(event) {
    // prevent animating nav change on window resize
    this.setState({
      animate: false
    });
  },

  handleScroll: function(event) {
    const delta = (event.wheelDelta) ? event.wheelDelta : -1 * event.deltaY;
    (delta < 0) ? this.setState({showNav: false}) : this.setState({showNav: true});
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

  handleClick: function(event) {
    event.preventDefault();
    console.log(event.target);
    smoothScroll(event.target);
  },

  componentDidMount: function() {
    window.addEventListener('wheel', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
    this.icon.addEventListener('click', this.toggleNav);
    this.nav.addEventListener('mouseenter', this.handleHover);
    this.nav.addEventListener('mouseleave', this.handleHover);
  },

  componentWillUnmount: function() {
    window.removeEventListener('wheel', this.handleScroll);
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
          animate={ this.state.animate }
          onClick={ this.handleClick } />
    );
  }

});