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

  const latitude = "12.084820387308788";
  const longitude = "76.33497670409582";

  const handleClick = () => {
    const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(mapUrl, "_blank");
  };

  const handleButtonClick = () => {
    const telUri = `tel:${9900853784}`;
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

        <div className="contact-min-box" onClick={handleClick}>
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
