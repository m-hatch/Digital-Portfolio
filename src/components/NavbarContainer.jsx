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

  getDomElements: function() {
    return {
      "nav_outer" : document.getElementsByClassName('nav')[0],
      "icon" : document.getElementById('icon')
    };
  },

  toggleNav: function() {
    this.setState(prevState => ({
      animate: true, 
      toggleNav: !prevState.toggleNav
    }));
  },

  handleResize: function(event) {
    this.setState({
      animate: false
    });
  },

  handleScroll: function(event) {
    var delta = (event.wheelDelta) ? event.wheelDelta : -1 * event.deltaY;
    (delta < 0) ? this.setState({showNav: false}) : this.setState({showNav: true});
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
    window.addEventListener('resize', this.handleResize);
    this.getDomElements().icon.addEventListener('click', this.toggleNav);
    this.getDomElements().nav_outer.addEventListener('mouseover', this.handleHover);
    this.getDomElements().nav_outer.addEventListener('mouseout', this.handleHover);
  },

  componentWillUnmount: function() {
    window.removeEventListener('wheel', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
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
          toggleNav={ this.state.toggleNav } 
          animate={ this.state.animate } />
    );
  }

});