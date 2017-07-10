import React from 'react';

export default React.createClass({

  getInitialState: function () {
    return {
      top: 0,
      opacity: 1
    };
  },

  parallax: function(event) {
    const scrollTop = window.pageYOffset;
    const elementHeight = this.refs.splash.clientHeight;

    this.setState({ top: scrollTop * .7 + 'px' });
    this.setState({ opacity: (elementHeight - scrollTop) / elementHeight });
  },

  componentDidMount: function() {
    window.addEventListener('scroll', this.parallax);
  },

  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.parallax);
  },

  render: function() {
    const splashStyle = { 
      transform: 'translateY(' + this.state.top +')',
      opacity: this.state.opacity ? this.state.opacity : 1
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