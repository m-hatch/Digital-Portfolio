import React from 'react';
import ModalContainer from './ModalContainer';

class Blog extends React.Component {

  constructor(props) {
    super(props);
    this.checkRoute = this.checkRoute.bind(this);
  }

  componentDidMount() {
    this.checkRoute(this.props.location.pathname);
  }

  checkRoute(path) {
    const navLinks = document.querySelectorAll('#topNav a');

    Array.prototype.forEach.call(navLinks, function(el){

      // add active class to nav link when route matches
      let route = path.substr(1, path.length);

      if (route.indexOf('/') !== -1) {
        route = route.substr(0, route.indexOf('/'));
      }

      (route === el.getAttribute('href')) 
        ? el.classList.add('topnav__link--active') 
        : el.classList.remove('topnav__link--active');
    });
  }

  render() {
    return (
      <div> 

        <h1>Blog</h1>

        <ModalContainer />

      </div>
    );
  }
  
}

export default Blog;
