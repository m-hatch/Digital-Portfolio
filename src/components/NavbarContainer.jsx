import React from 'react';
import Navbar from './Navbar';

export default React.createClass({

  getInitialState: function () {
      return {
         showNav: true
      };
   },

  getName: function() {
    return this.props.nav.name || '';
  },

  getLinks: function() {
    return this.props.nav.links || [];
  },

  requestAnimationFrame: function() {
    return this.props.animationFrame;
  },

  getDomElements: function() {
    var elements = {};
    var nav = document.getElementById("topNav");
    elements.listElems = nav.getElementsByTagName('li');
    elements.links = nav.getElementsByTagName('a');
    elements.nav_outer = document.getElementsByClassName('nav')[0];
    elements.icon = document.getElementById('icon');

    return elements;
  },

  toggleNav: function() {
    Array.from(this.getDomElements().listElems).forEach(function(elem) {
      elem.classList.toggle('topnav_list-item--open');
    });

    Array.from(this.getDomElements().links).forEach(function(link) {
      link.classList.toggle('topnav__link--open');
    });
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
          showNav={ this.state.showNav } />
    );
  }

});