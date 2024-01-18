import React from "react";
import "../Styles/navbar.css";
import { NavLink } from "react-router-dom";
import DarkMode from "./DarkMode/DarkMode";

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="nav-img">
        <img src="" alt="img" />
      </div>
      <nav className="nav-links">
        <DarkMode />
        <NavLink className="nav-link" to='/'>Home</NavLink>
        <NavLink className="nav-link" to='/contact'>Contact</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;