import React from 'react';

export default React.createClass({
  
  render: function() {

    var links =  this.props.navLinks ;
    var linksList = links.map(link => {
      return (
        <li className={"topnav_list-item" + (this.props.toggleNav ? " topnav_list-item--open" : "")} 
            key={ link.name }>
          <a className={"nav__link topnav__link" + (this.props.toggleNav ? " topnav__link--open" : "")} 
            href={ link.url }>{ link.name }</a>
        </li>
      )
    });

    return (
      <div className="nav">
        <nav className={"nav__inner l-font-smoothing" + (!this.props.showNav ? " nav__inner--hide" : "")}>
          <div className="l-wrapper">
            <span className="nav__title">
              <a className="nav__link" href="">{ this.props.navTitle }</a>
            </span>
            <span id="icon" className="nav__icon">&#9776;</span>
          </div>

          <div className="nav__wrapper">
            <ul className="topnav" id="topNav">
              { linksList }
            </ul>
          </div>
        </nav>
      </div>
    );
  }

});