import React from 'react';

export default React.createClass({
  
  render: function() {
    return (
      <div className="project__image">
        <a href={ this.props.link } target="_blank">
          <div className="image__filter"></div>
          <img className="project__img" 
	          src={ 'img/' + this.props.img } 
	          alt={ this.props.imgAlt } />
        </a>
      </div>
    );
  }

});