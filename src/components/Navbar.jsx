import React, { useState } from "react";
import "../Styles/navbar.css";
import { NavLink } from "react-router-dom";
import DarkMode from "./DarkMode/DarkMode";
import Language from "./Language/Language";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar-container">

      {/* Left — Logo + Brand Name */}
      <div className="nav-brand">
        <NavLink to="/" onClick={closeMenu}>
          <img src="/logo_.png" alt="N Purushothama" className="nav-logo" />
          <div className="nav-brand-text">
            <span className="nav-brand-name">N Purushothama</span>
            <span className="nav-brand-sub">
              {language === "eng" ? "Deed Writer" : "ಪತ್ರ ಬರಹಗಾರ"}
            </span>
          </div>
        </NavLink>
      </div>

      {/* Center — Nav Links (desktop) */}
      <nav className={`nav-center ${isOpen ? "active" : ""}`}>
        <NavLink
          className={({ isActive }) => `nav-link ${isActive ? "active-link" : ""}`}
          to="/"
          onClick={closeMenu}
        >
          {language === "eng" ? "Home" : "ಮುಖಪುಟ"}
        </NavLink>
        <NavLink
          className={({ isActive }) => `nav-link ${isActive ? "active-link" : ""}`}
          to="/contact"
          onClick={closeMenu}
        >
          {language === "eng" ? "Contact" : "ಸಂಪರ್ಕ"}
        </NavLink>

        {/* Mobile-only controls inside drawer */}
        <div className="nav-mobile-controls">
          <span className="nav-mobile-controls-label">
            {language === "eng" ? "Preferences" : "ಆದ್ಯತೆಗಳು"}
          </span>
          <Language />
          <DarkMode />
        </div>
      </nav>

      {/* Right — Controls (desktop) */}
      <div className="nav-actions">
        <Language />
        <DarkMode />
      </div>

      {/* Hamburger — mobile only */}
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        role="button"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

    </header>
  );
};

export default Navbar;
