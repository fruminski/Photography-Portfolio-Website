import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="main-container">
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive ? "" : "";
        }}
      >
        <h1 className="name">Ewelina Kucharska Ruminska</h1>
      </NavLink>
      <nav className="nav-container">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
