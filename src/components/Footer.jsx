import React from "react";
import "../Styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const handleClick = (e) => {
    window.location.href = "mailto:balagowda9483@gmail.com";
    e.preventDefault();
  };

  return (
    <div className="developer">
      <p className="dev_text">Made with ❤️ balachandregowda</p>
      <p className="dev_contact" onClick={handleClick}>
        <FontAwesomeIcon icon={faEnvelope} /> balagowda9483@gmail.com
      </p>
    </div>
  );
};

export default Footer;
