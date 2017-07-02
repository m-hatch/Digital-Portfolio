import React from 'react';
import Navbar from './Navbar';

export default React.createClass({

  getTitle: function() {
    return this.props.nav.title || '';
  },

  getLinks: function() {
    return this.props.nav.links || [];
  },

  getDomElements: function() {
    var elements = {};
    var nav = document.getElementById("topNav");
    elements.listElems = nav.getElementsByTagName('li');
    elements.links = nav.getElementsByTagName('a');
    elements.nav_outer = document.getElementsByClassName('nav')[0];
    elements.nav_inner = document.getElementsByClassName('nav__inner')[0];
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
    var delta = (event.wheelDelta) ? event.wheelDelta : -1 * event.deltaY;
    
    if (delta < 0) {
      this.getDomElements().nav_inner.classList.add('nav__inner--hide');
    } else {
      this.getDomElements().nav_inner.classList.remove('nav__inner--hide');
    }
  },

  handleHover: function(mouseEvent) {
    if (mouseEvent.type === 'mouseover') {
      this.getDomElements().nav_inner.classList.remove('nav__inner--hide');
    }
    if (mouseEvent.type === 'mouseout') {
      this.getDomElements().nav_inner.classList.add('nav__inner--hide');
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
      <div className="nav">
        <Navbar 
          navTitle={ this.getTitle() } 
          navLinks={ this.getLinks() } />
      </div>
    );
  }

});