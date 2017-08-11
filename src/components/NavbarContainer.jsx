import React from 'react';
import Navbar from './Navbar';
import * as util from '../util/utilities';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

export const NavbarContainer = React.createClass({

  getName: function() {
    return this.props.name || '';
  },

  getLinks: function() {
    return this.props.nav.links || [];
  },

  setVisibility: function(status) {
    this.props.dispatch(actions.showNav(status));
  },

  toggleNav: function() {
    this.props.dispatch(actions.animateNav(true));
    this.props.dispatch(actions.toggleNav());
  },

  handleWheel: function(event) {
    const delta = (event.wheelDelta) ? event.wheelDelta : -1 * event.deltaY;
    (delta < 0) ? this.setVisibility(false) : this.setVisibility(true);
  },

  handleScroll: function(event) {
    const padding = 50; // for footer
    const scrollBottom = util.getScrollBottom(padding);
    const navLinks = document.querySelectorAll('#topNav a');

    Array.prototype.forEach.call(navLinks, function(el){
      const refElement = document.getElementById(el.innerHTML);
      const refPos = util.getOffsetTop(refElement);

      // add active class when section in view
      ((refPos <= scrollBottom) 
        && (refPos + refElement.clientHeight > scrollBottom || refPos + window.innerHeight > scrollBottom)) 
        ? el.classList.add('topnav__link--active') : el.classList.remove('topnav__link--active');
    });
  },

  handleResize: function(event) {
    // prevent animating nav change on window resize
    this.props.dispatch(actions.animateNav(false));
  },

  handleHover: function(mouseEvent) {
    if (mouseEvent.type === 'mouseenter') {
      this.setVisibility(true);
    }
    if (mouseEvent.type === 'mouseleave') {
      setTimeout( () => {
        this.setVisibility(false);
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
          showNav={ this.props.showNav } 
          toggleNav={ this.props.toggleNav } 
          animate={ this.props.animate } />
    );
  }

});

const mapStateToProps = (state) => {
  return {
    showNav: state.navbar.showNav,
    toggleNav: state.navbar.toggleNav,
    animate: state.navbar.animate
  }
}

export default connect(
  mapStateToProps
)(NavbarContainer);