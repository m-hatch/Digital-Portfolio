import React from 'react';
import { Link } from 'react-router-dom';

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

      return (
        <li className={"topnav__list-item" 
            + ( props.toggleNav ? " topnav__list-item--open" : "" )} 
            key={ link.name } >
            <Link className={ getClassList() } to={ link.url } >
              { link.name }
            </Link>
        </li>
      )
    });
  };
  
  return (
    <div ref={ props.navRef } className="nav">
      <nav className={"nav__inner l-font-smoothing" + (!props.showNav ? " nav__inner--small" : "")}>

        <div className="l-wrapper">
          <span className="nav__title">
            <Link className="nav__link" to="/">{ props.navTitle }</Link>
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