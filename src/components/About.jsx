import React from 'react';

export default React.createClass({

  getRichText(markup){
    return { __html: markup };
  },

  render: function() {
    return (
      <div className="l-section">
        <div className="l-wrapper">

          <h2 className="l-section__heading">About</h2>

          <div className="about__description"
            dangerouslySetInnerHTML={ this.getRichText(this.props.description) }>
          </div>

        </div>
      </div>
    );
  }
  
});