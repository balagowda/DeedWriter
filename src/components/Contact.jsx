import React from "react";
import "../Styles/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { language } = useLanguage();

  const handleMapClick = () => {
    const mapUrl = "https://maps.app.goo.gl/LjM9ruSQDW8TJVcc6";
    window.open(mapUrl, "_blank");
  };

  const handleButtonClick = () => {
    const telUri = `tel:+919900853784`;
    window.open(telUri, '_blank');
  };

  const handleEmailClick = (e) => {
    window.location.href = "mailto:purushothama.hdk@gmail.com";
    e.preventDefault();
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>{language === "eng" ? "Get In Touch" : "ಸಂಪರ್ಕಿಸಿ"}</h2>
        <p>{language === "eng" ? "We are here to assist you with all your deed and documentation needs." : "ನಿಮ್ಮ ಎಲ್ಲಾ ಪತ್ರ ಮತ್ತು ದಾಖಲಾತಿ ಅಗತ್ಯತೆಗಳಿಗಾಗಿ ನಾವು ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ಇಲ್ಲಿದ್ದೇವೆ."}</p>
      </div>

      <div className="contact-grid">
        <div className="contact-card" onClick={handleButtonClick}>
          <div className="contact-icon">
            <FontAwesomeIcon icon={faPhoneVolume} />
          </div>
          <h3>{language === "eng" ? "Phone" : "ದೂರವಾಣಿ"}</h3>
          <p className="contact-detail">+91 9900853784</p>
          <span className="contact-action">{language === "eng" ? "Call Now" : "ಈಗ ಕರೆ ಮಾಡಿ"} ➔</span>
        </div>

        <div className="contact-card" onClick={handleEmailClick}>
          <div className="contact-icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <h3>{language === "eng" ? "Email" : "ಇಮೇಲ್"}</h3>
          <p className="contact-detail">purushothama.hdk@gmail.com</p>
          <span className="contact-action">{language === "eng" ? "Send Email" : "ಇಮೇಲ್ ಕಳುಹಿಸಿ"} ➔</span>
        </div>

        <div className="contact-card" onClick={handleMapClick}>
          <div className="contact-icon">
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
          <h3>{language === "eng" ? "Office Location" : "ಕಚೇರಿ ಸ್ಥಳ"}</h3>
          <p className="contact-detail">{language === "eng" ? "Heggadadevanakote" : "ಹೆಗ್ಗಡದೇವನಕೋಟೆ"}</p>
          <span className="contact-action">{language === "eng" ? "View Map" : "ನಕ್ಷೆ ವೀಕ್ಷಿಸಿ"} ➔</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
