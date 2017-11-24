import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnchor from './ScrollAnchor';

export default (props) => {

  // determine navbar state
  const getClassList = () => {
    return "nav__link topnav__link"
      + ( props.animate ? " topnav__link--animate" : "" )  
      + ( props.toggleNav ? " topnav__link--open" : "" );
  };

  // build navbar links
  const getLinks = () => {
    return props.navLinks.map(link => {

      const links = ( link.url.startsWith('#') ) ? 
        <ScrollAnchor  
          className={ getClassList() } 
          to={ link.url } 
          animate={{ offset: -57, duration: 400 }} >
          { link.name }
        </ScrollAnchor>

        : <Link className={ getClassList() } to={ link.url } >{ link.name }</Link>

      return (
        <li className={"topnav__list-item" 
            + ( props.toggleNav ? " topnav__list-item--open" : "" )} 
            key={ link.name } >
            { links }
        </li>
      )
    });
  };
  
  return (
    <div ref={ props.navRef } className="nav">
      <nav className={"nav__inner l-font-smoothing" + (!props.showNav ? " nav__inner--hide" : "")}>

        <div className="l-wrapper">
          <span className="nav__title">
            <ScrollAnchor  
              className="nav__link"
              to="#" 
              animate={{ offset: 0, duration: 400 }} >
              { props.navTitle }
            </ScrollAnchor>
          </span>
          <span className="nav__icon" onClick={ props.onBtnClick }>&#9776;</span>
        </div>

        <div className="nav__wrapper">
          <ul className="topnav" id="topNav">
            { getLinks() }
          </ul>
        </div>

      </nav>
    </div>
  );

}