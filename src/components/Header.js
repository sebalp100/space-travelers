import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../planet.png';

function Header() {
  return (
    <nav>
      <div className="navDiv">
        <img alt="icon" src={logo} height="50" />
        <h1>Space Travelers´ Hub</h1>
      </div>
      <div className="link">
        <li>
          <NavLink
            to="/"
            className="navLink"
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Missions"
            className="navLink"
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Dragons"
            className="navLink"
          >
            Dragons
          </NavLink>
        </li>
        <li>My Profile</li>
      </div>
    </nav>
  );
}

export default Header;
