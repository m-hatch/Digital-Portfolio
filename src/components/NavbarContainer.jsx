import React from 'react';
import Navbar from './Navbar';
import * as util from '../util/utilities';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class NavbarContainer extends React.Component {

  constructor(props) {
    super(props);
    this.handleWheel = this.handleWheel.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.setFullSize = this.setFullSize.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  componentDidMount() {
    window.addEventListener('wheel', this.handleWheel, {passive: true});
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleWheel);
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }

  handleWheel(event) {
    // shrink navigation on down scroll, show full size on up scroll
    const delta = (event.wheelDelta) ? event.wheelDelta : -1 * event.deltaY;
    (delta < 0) ? this.setFullSize(false) : this.setFullSize(true);
  }

  handleScroll(event) {
    // highlight active section in navbar
    const padding = 50; // for footer
    const scrollBottom = util.getScrollBottom(padding);
    const navLinks = document.querySelectorAll('#topNav a');

    Array.prototype.forEach.call(navLinks, function(el){
      const refElement = document.getElementById(el.innerHTML);
      const refPos = refElement ? util.getOffsetTop(refElement) : null;

      // check if section exists on page
      if (refPos !== null) {

        // add active class when section in view
        ((refPos <= scrollBottom) 
          && (refPos + refElement.clientHeight > scrollBottom || refPos + window.innerHeight > scrollBottom)) 
          ? el.classList.add('topnav__link--active') : el.classList.remove('topnav__link--active');
      }
    });
  }

  handleResize(event) {
    // prevent animating nav change on window resize
    this.props.setAnimation(false);
  }

  handleHover(mouseEvent) {
    this.setFullSize(true);
  }

  setFullSize(status) {
    this.props.setShowNavFullSize(status);
  }

  toggleNav() {
    this.props.setAnimation(true);
    this.props.toggle();
  }

  render() {
    return (
        <Navbar 
          navTitle={ this.props.name } 
          navLinks={ this.props.nav.links } 
          onMouseEnter={ this.handleHover } 
          onBtnClick={ this.toggleNav } 
          showNav={ this.props.showNavFullSize } 
          toggleNav={ this.props.toggleNav } 
          animate={ this.props.animate } />
    );
  }

}

const mapStateToProps = (state) => {
  return {
    scrollPos: state.navbar.scrollPos,
    showNavFullSize: state.navbar.fullSize,
    toggleNav: state.navbar.toggleNav,
    animate: state.navbar.animate
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setScrollPos: (pos) => {
      dispatch(actions.setScrollPos(pos));
    },
    setShowNavFullSize: (status) => {
      dispatch(actions.showNavFullSize(status));
    },
    setAnimation: (status) => {
      dispatch(actions.animateNav(status));
    },
    toggle: () => {
      dispatch(actions.toggleNav());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarContainer);