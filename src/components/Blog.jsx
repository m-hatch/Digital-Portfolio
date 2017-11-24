import React from 'react';
import { Route, Link } from 'react-router-dom';
import Article from './Article';
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

  handleClick(event) {
    this.props.openForm();
  }

  render() {
    const navPath = `${this.props.match.url}/${this.props.content.articles[0].nav_label}`;
    console.log('match',`${this.props.match.url}/:navLabel`);
    return (
      <div> 

        <div className="l-container blog">
          <div className="l-wrapper">

            <h1 className="l-section__heading blog__heading">{ this.props.content.heading }</h1>
            <p>{ this.props.content.description }</p>
            <a className="blog__link" href="">one</a>
            <a className="blog__link" href="">two</a>

            <div className="blog__row">

              <div className="blog__col blog__main">

                <h2>Recent posts</h2>

                <Route exact path={this.props.match.url} render={() => (
                  <h3>Please select a topic.</h3>)
                }/>

                <Route path={`${this.props.match.url}/:navLabel`} render={ 
                  (props) => <Article {...props} articles={ this.props.content.articles }/>
                }/>

              </div>

              <div className="blog__col blog__sidebar">
                <h2>Browse Topics</h2>
                <Link className="blog__link" to={ navPath } >{ this.props.content.articles[0].title }</Link>
              </div>

            </div>

            <div>
              <p className="l-text-center">
                { this.props.content.contact }
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
