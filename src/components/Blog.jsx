import React from 'react';
import { Route } from 'react-router-dom';
import blogData from '../blog.json';
import BlogLanding from './BlogLanding';
import Article from './Article';
import Sidebar from './Sidebar';
import ModalContainer from './ModalContainer';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class Blog extends React.Component {

  constructor(props) {
    super(props);
    this.checkRoute = this.checkRoute.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.checkRoute(this.props.match.path);
  }

  componentWillUnmount() {
    this.clearRouteHighlight();
  }

  getData() {
    return blogData.blog;
  }

  checkRoute(path) {
    const navLinks = document.querySelectorAll('#topNav a');

    Array.prototype.forEach.call(navLinks, function(el){

      // add active class to nav link when route matches
      let route = (path.indexOf('/', 1) !== -1) 
        ? path.substr(0, route.indexOf('/', 1))
        : path;

      (route === el.getAttribute('href')) 
        ? el.classList.add('topnav__link--active') 
        : el.classList.remove('topnav__link--active');
    });
  }

  clearRouteHighlight() {
    const navLinks = document.querySelectorAll('#topNav a');

    Array.prototype.forEach.call(navLinks, function(el){
      el.classList.remove('topnav__link--active');
    });
  }

  handleClick(event) {
    this.props.openForm();
  }

  render() {
    const contextPath = this.props.match.url;
    const nestedPath = `${contextPath}/:navLabel`;

    return (
      <div> 

        <div className="l-container blog">
          <div className="l-wrapper">

            <div className="blog__row">

              <div className="blog__col blog__main">

                <Route exact path={ contextPath } render={(props) => 
                  <BlogLanding {...props} blog={ this.getData() }
                  navPath={ contextPath }/>
                }/>

                <Route path={ nestedPath } render={(props) => 
                  <Article {...props} articles={ this.getData().articles }/>
                }/>

              </div>

              <Sidebar articles={ this.getData().articles } navPath={ contextPath } />

            </div>

            <div className="blog__footer">
              <p className="l-text-center blog__contact">
                { this.getData().contact }
                <button className="blog__btn contact__button" onClick={ this.handleClick }>
                  Send a message
                </button>
              </p>
            </div>

          </div>
        </div>

        <ModalContainer />

      </div>
    );
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    openForm: () => {
      dispatch(actions.showContactForm(true));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Blog);
