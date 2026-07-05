import React, { useState } from "react";
import "../Styles/navbar.css";
import { NavLink } from "react-router-dom";
import DarkMode from "./DarkMode/DarkMode";
import Language from "./Language/Language";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar-container glass-panel">
      <div className="nav-brand">
        <NavLink to="/" onClick={closeMenu}>
          <img src="/logo_.png" alt="Deed Writer Logo" className="nav-logo" />
        </NavLink>
      </div>

      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav-links ${isOpen ? "active" : ""}`}>
        <div className="nav-actions">
          <Language />
          <DarkMode />
        </div>
        <NavLink 
          className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`} 
          to="/" 
          onClick={closeMenu}
        >
          {language === "eng" ? "Home" : "ಮುಖಪುಟ"}
        </NavLink>
        <NavLink 
          className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`} 
          to="/contact" 
          onClick={closeMenu}
        >
          {language === "eng" ? "Contact" : "ಸಂಪರ್ಕ"}
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
