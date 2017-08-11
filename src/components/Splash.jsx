import React from 'react';
import { getScrollTop } from '../util/utilities';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

export const Splash = React.createClass({

  parallax: function(event) {
    const scrollTop = getScrollTop();
    const elementHeight = this.refs.splash.clientHeight;

    // only call when element is in view
    if (scrollTop < elementHeight) {
      this.props.dispatch(actions.parallax(scrollTop * .7));
      this.props.dispatch(actions.setSplashOpacity((elementHeight - scrollTop) / elementHeight));
    }
  },

  componentDidMount: function() {
    window.addEventListener('scroll', this.parallax);
  },

  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.parallax);
  },

  render: function() {
    const splashStyle = { 
      transform: 'translateY(' + this.props.top +'px)',
      opacity: this.props.opacity ? this.props.opacity : 1
    };

    return (
      <div ref="splash" className="splash l-font-smoothing">

        <div className="splash__filter"></div>

        <div className="splash__wrapper " style={ splashStyle }>
          <div className="l-wrapper splash__text">

            <h1 className="splash__heading">{ this.props.text.name }</h1>
            <p className="splash__portfolio">{ this.props.text.title }</p>

            <div className="splash__title">
              <p className="splash__title__text">{ this.props.text.position_title }</p>
            </div>

          </div>
        </div>

      </div>
    );
  }

});

const mapStateToProps = (state) => {
  return {
    top: state.splash.top,
    opacity: state.splash.opacity
  };
}

export default connect(
  mapStateToProps
)(Splash);
