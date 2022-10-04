import React from "react";
import { NavLink } from "react-router-dom";
const styles = {
  display: "auto",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "underline",
  color: "black",
};
function Navbar() {
  return (
    <div>
      <span>Home</span>
      <span>About</span>
      <span>History</span>
      <span>Register</span>

      {/* <NavLink to="/" style={styles} activeStyle={{background:"blue", color:"white"}}>
      Home
    </NavLink>
    <NavLink to="/actors" style={styles} activeStyle={{background:"blue"}}>Actors</NavLink>
    <NavLink to="/directors" style={styles} activeStyle={{background:"blue"}}>Directors</NavLink>
    <NavLink to="/movies"style={styles} activeStyle={{background:"blue"}}>Movies</NavLink>
     */}
    </div>
  );
}

export default Navbar;
