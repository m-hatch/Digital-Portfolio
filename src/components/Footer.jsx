import React from 'react';

export default (props) => {

  // build bottom nav links
  const getLinks = () => {
    return props.links.map(link => {
      return (
        <li className="footer__list-item" key={ link.name }>
          <a className="footer__link" href={ link.url } target="_blank">{ link.name }</a>
        </li>
      )
    });
  };

  return (
    <footer className="footer l-font-smoothing">
      <div className="l-wrapper">

        <span className="footer__title">Links:</span>
        <ul className="footer__list">
          { getLinks() }
        </ul>

      </div>
    </footer>
  );
  
}