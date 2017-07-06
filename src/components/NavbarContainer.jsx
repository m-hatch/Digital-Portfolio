import React from 'react';
import Navbar from './Navbar';

export default React.createClass({

  getInitialState: function () {
      return {
         showNav: true,
         toggleNav: false
      };
   },

  getName: function() {
    return this.props.nav.name || '';
  },

  getLinks: function () {
    return this.props.nav.links || [];
  },

  requestAnimationFrame: function() {
    return this.props.animationFrame;
  },

  getDomElements: function() {
    return {
      "nav_outer" : document.getElementsByClassName('nav')[0],
      "icon" : document.getElementById('icon')
    };
  },

  toggleNav: function() {
    this.setState(prevState => ({
      toggleNav: !prevState.toggleNav
    }));
  },

  handleScroll: function(event) {
    requestAnimationFrame(() => {
      var delta = (event.wheelDelta) ? event.wheelDelta : -1 * event.deltaY;
      (delta < 0) ? this.setState({showNav: false}) : this.setState({showNav: true});
    });
  },

  handleHover: function(mouseEvent) {
    if (mouseEvent.type === 'mouseover') {
      this.setState({showNav: true});
    }
    if (mouseEvent.type === 'mouseout') {
      this.setState({showNav: false});
    }
  },

  componentDidMount: function() {
    window.addEventListener('wheel', this.handleScroll);
    this.getDomElements().icon.addEventListener('click', this.toggleNav);
    this.getDomElements().nav_outer.addEventListener('mouseover', this.handleHover);
    this.getDomElements().nav_outer.addEventListener('mouseout', this.handleHover);
  },

  componentWillUnmount: function() {
    window.removeEventListener('wheel', this.handleScroll);
    this.getDomElements().icon.removeEventListener('click', this.toggleNav);
    this.getDomElements().nav_outer.removeEventListener('mouseover', this.handleHover);
    this.getDomElements().nav_outer.removeEventListener('mouseout', this.handleHover);
  },

  render: function() {
    return (
        <Navbar 
          navTitle={ this.getName() } 
          navLinks={ this.getLinks() } 
          showNav={ this.state.showNav } 
          toggleNav={ this.state.toggleNav } />
    );
  }

});