import React from "react";
import { NavLink } from "react-router-dom";
import penda from './penda.jpeg'


function Navbar() {
  return (
    <div className="links navbar">
      <ul>
      <li>
        <NavLink to="/"><img alt="logo" className="icon" src={penda}/></NavLink>
      </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/history">History</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

// style={styles}  activeStyle={{ background: "blue" }}
