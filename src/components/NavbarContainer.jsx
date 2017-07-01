import React from 'react';
import Navbar from './Navbar';

export default React.createClass({
  getNav: function() {
    return this.props.nav || {};
  },
  render: function() {
    return (
      <div className="nav">
        <Navbar />
      </div>
    );
  }
});