import React from 'react';
import Typewriter from './Typewriter';
import { 
  getScrollTop,
  isInView 
} from '../util/utilities';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.parallax = this.parallax.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.parallax);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.parallax);
  }

  parallax(event) {
    const scrollTop = getScrollTop();
    const elementHeight = this.refs.splash.clientHeight;

    // check if splash is in view
    if (isInView(this.refs.splash)) {
      this.props.setVisibility(true);
      this.props.setOpacity((elementHeight - scrollTop) / elementHeight);
      this.props.setParallax(scrollTop * .7);
    } else {
      this.props.setVisibility(false);
    }
  }

  render() {
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
              
              <Typewriter 
                text={ this.props.text.position_title }
                isVisible={ this.props.isVisible } />

            </div>

          </div>
        </div>

      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    top: state.splash.top,
    opacity: state.splash.opacity,
    isVisible: state.splash.isVisible
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setVisibility: (isVisible) => {
      dispatch(actions.setSplashVisibility(isVisible));
    },
    setOpacity: (opacity) => {
      dispatch(actions.setSplashOpacity(opacity));
    },
    setParallax: (scrollTop) => {
      dispatch(actions.parallax(scrollTop));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
