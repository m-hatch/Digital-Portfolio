import React from 'react';

export default React.createClass({

  render: function() {
    return (
      <div className="splash l-font-smoothing">

        <div className="splash__filter"></div>

        <div id="splash-wrapper"  className="splash__wrapper">
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