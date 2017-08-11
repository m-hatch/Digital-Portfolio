import React from 'react';

export default React.createClass({

  getLinks: function() {
    const links =  this.props.links ;
    
    return links.map(link => {
      return (
        <li className="footer__list-item" key={ link.name }>
          <a className="footer__link" href={ link.url } target="_blank">{ link.name }</a>
        </li>
      )
    });
  },

  render: function() {
    return (
      <footer className="footer l-font-smoothing">
        <div className="l-wrapper">

          <span className="footer__title">Links:</span>
          <ul className="footer__list">
            { this.getLinks() }
          </ul>

        </div>
      </footer>
    );
  }
  
});