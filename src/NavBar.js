import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="NavBar-container">
          <nav className="NavBar-links">
            <NavLink exact activeClassName="active-link" to="/">
              Home
            </NavLink>
            <NavLink activeClassName="active-link" to="/soda">
              Soda
            </NavLink>
            <NavLink activeClassName="active-link" to="/chips">
              Chips
            </NavLink>
            <NavLink activeClassName="active-link" to="/fresh-sardines">
              Fresh Sardines
            </NavLink>
          </nav>
        </div>
      </>
    );
  }
}

export default NavBar;
