import React from 'react';

export default React.createClass({

  getInitialState: function () {
    return {
      top: 0,
      opacity: 1
    };
  },

  parallax: function(event) {
    var scrollTop = window.pageYOffset;
    var elementHeight = window.innerHeight;

    this.setState({ top: scrollTop * .8 + 'px' });
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
      top: this.state.top,
      opacity: this.state.opacity
    };

    return (
      <div className="splash l-font-smoothing">

        <div className="splash__filter"></div>

        <div id="splash-wrapper"  className="splash__wrapper " style={ splashStyle }>
          <div className="wrapper splash__text">

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