import React from 'react';
import { getScrollTop } from '../util/utilities';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

export const Splash = React.createClass({

  getTypeText: function() {
    const text = this.props.text.position_title;

    const textHtml = text.split('').map(function(char){
      let html;

      if (char === ' ') { 
        html = '<span class="type">&nbsp;</span>';
      } else if (char === '/') { 
        html = '<span class="type__break type"></span>';
      } else { 
        html = '<span class="type">'+char+'</span>';
      }

      return html;
    });

    return textHtml.join('').toString() + '<span class="typewriter__cursor"></span>';
  },

  typewriter: function() {
    const spanList = document.getElementsByClassName('type');
    
    if (this.isInView()) {
      this.clearType(spanList);

      for (var i = 0; i < spanList.length; i++) {
        (function(i) {
          setTimeout(function() { 
            spanList[i].classList.add('type--active'); 
          }, 100 * i);
        })(i);
      }
    }
  },

  parallax: function(event) {
    const scrollTop = getScrollTop();
    const elementHeight = this.refs.splash.clientHeight;

    if (this.isInView()) {
      this.props.dispatch(actions.parallax(scrollTop * .7));
      this.props.dispatch(actions.setSplashOpacity((elementHeight - scrollTop) / elementHeight));
    }
  },

  clearType: function(spanList) {
    for (var i = 0; i < spanList.length; i++) {
      spanList[i].classList.remove('type--active');
    }
  },

  isInView: function() {
    const scrollTop = getScrollTop();
    const elementHeight = this.refs.splash.clientHeight;

    return (scrollTop < elementHeight) ? true : false;
  },

  componentDidMount: function() {
    this.typewriter();
    window.setInterval(this.typewriter, 5000);
    window.addEventListener('scroll', this.parallax);
  },

  componentWillUnmount: function() {
    window.clearInterval(this.typewriter);
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
              <p className="typewriter"
                dangerouslySetInnerHTML={{ __html: this.getTypeText() }}>
              </p>
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
