import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarkerAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import "../Styles/floatingContact.css";

const FloatingContact = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleCall = () => {
    window.open("tel:+919900853784", "_blank");
  };

  const handleMap = () => {
    window.open("https://maps.app.goo.gl/LjM9ruSQDW8TJVcc6", "_blank");
  };

  return (
    <div className="floating-container">
      {isOpen && (
        <div className="floating-menu">
          <div className="floating-item" onClick={handleCall}>
            <span className="floating-label">{language === "eng" ? "Call Now" : "ಕರೆ ಮಾಡಿ"}</span>
            <div className="floating-icon call-icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
          </div>
          <div className="floating-item" onClick={handleMap}>
            <span className="floating-label">{language === "eng" ? "Map" : "ನಕ್ಷೆ"}</span>
            <div className="floating-icon map-icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
          </div>
        </div>
      )}
      
      <div className={`floating-toggle ${isOpen ? "open" : ""}`} onClick={toggleOpen}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faPhone} className="toggle-icon" />
      </div>
    </div>
  );
};

export default FloatingContact;
