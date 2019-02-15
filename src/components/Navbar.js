import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink activeStyle={{color: "green"}} exact to="/"> Home </NavLink>
            </li>
            <li className="nav-item pl-3">
              <NavLink activeStyle={{color: "green"}} exact to="/form"> Form </NavLink>
            </li>
            <li className="nav-item pl-3">
              <NavLink activeStyle={{color: "green"}} exact to="/list"> Display List </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
