import React from "react";
import "../Styles/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { language } = useLanguage();

  // const latitude = "12.084805916318393";
  // const longitude = "76.334935912306";
  // `https://www.google.com/maps?q=${latitude},${longitude}`

  const handleMapClick = () => {
    const mapUrl = "https://maps.app.goo.gl/LjM9ruSQDW8TJVcc6"
    window.open(mapUrl, "_blank");
  };

  const handleButtonClick = () => {
    const telUri = `tel:+${919900853784}`;
    window.open(telUri, '_blank');
  };


  return (
    <div className="contact-container">
      <div className="contact-box">

        <div className="contact-min-box" onClick={handleButtonClick}>
          <h3 className="mob">
            <FontAwesomeIcon icon={faPhoneVolume} /> &nbsp; 9900853784
          </h3>
        </div>

        <div className="contact-min-box">
          <Link
            to="#"
            onClick={(e) => {
              window.location.href = "mailto:purushothama.hdk@gmail.com";
              e.preventDefault();
            }}
            className="link-mail"
          >
            <h4>
              <FontAwesomeIcon icon={faEnvelope} /> &nbsp;
              purushothama.hdk@gmail.com
            </h4>
          </Link>
        </div>

        <div className="dot-line">----------------------------</div>

        <div className="contact-min-box" onClick={handleMapClick}>
          <p>
            <FontAwesomeIcon icon={faLocationDot} /> &nbsp;
            {language === "eng" ? "Map direction" : "ನಕ್ಷೆ ನಿರ್ದೇಶನ"}
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
