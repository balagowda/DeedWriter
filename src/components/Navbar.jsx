import React, { useState } from "react";
import "../Styles/navbar.css";
import { NavLink } from "react-router-dom";
import DarkMode from "./DarkMode/DarkMode";
import Language from "./Language/Language";
import { useLanguage } from "../context/LanguageContext";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const { language } = useLanguage();
  const [hamburger, setHamburger] = useState(true);

  const handleHamClick = () => {
    setHamburger((prevHamburger) => !prevHamburger);
    console.log(hamburger);
  };

  return (
    <header className="navbar-container">
      <div onClick={handleHamClick}>
        <Hamburger />
      </div>
      <div className="nav-img">
        <img src="" alt="img" />
      </div>
      <nav className="nav-links" id={hamburger ? "display-ham" : ""}>
        <Language />
        <DarkMode />
        <NavLink className="nav-link" to="/">
          {language === "eng" ? "Home" : "ಮುಖಪುಟ"}
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          {language === "eng" ? "Contact" : "ಸಂಪರ್ಕ"}
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
