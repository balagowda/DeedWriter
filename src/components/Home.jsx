import React from "react";
import "../Styles/home.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Home = () => {
  const { language } = useLanguage();

  return (
    <div className="home-container">
      <div className="home-header">
        <h2>{language === "eng" ? "N Purushothama" : "ಎನ್ ಪುರುಷೋತ್ತಮ"}</h2>

        <p className="sub-header-1">
          {language === "eng" ? "Document writer" : "ಪತ್ರ ಬರಹಗಾರರು"}

          <span style={{ color: "rgb(235, 192, 23)" }}>
            {language === "eng" ? " Heggadadevanakote" : " ಹೆಗ್ಗಡದೇವನಕೋಟೆ"}
          </span>
        </p>
        <br />

        <p className="sub-header-2">
          {language === "eng"
            ? "Registration and Non-registration Documents will be written"
            : "ನೋಂದಣಿ ಮತ್ತು ನೋಂದಣಿ-ರಹಿತ ಪತ್ರಗಳನ್ನು ಬರೆಯಲಾಗುವುದು"}
        </p>

        <div className="homecontact">
          <Link to={"/contact"} className="link">
            <span className="home-contact-button">
              {language === "eng" ? "Contact" : "ಸಂಪರ್ಕ"}
            </span>
          </Link>
        </div>
      </div>
      <section className="home-services">
        <div className="service-container">
          <div className="service-container-box">
            <Link to={"/sale"} className="link">
              <div className="service-box">
                {language === "eng" ? "Sale Deed" : "ಕ್ರಯ ಪತ್ರ"}
              </div>
            </Link>
            <Link to={"/gift"} className="link">
              <div className="service-box">
                {language === "eng" ? "Gift Deed" : "ದಾನ ಪತ್ರ"}
              </div>
            </Link>
            <Link to={"/partition"} className="link">
              <div className="service-box">
                {language === "eng" ? "Partition Deed" : "ವಿಭಾಗ ಪತ್ರ"}
              </div>
            </Link>
            <Link to={"/release"} className="link">
              <div className="service-box">
                {language === "eng" ? "Release Deed" : "ಹಕ್ಕುಖುಲಾಸೆ ಪತ್ರ"}
              </div>
            </Link>
            <Link to={"/exchange"} className="link">
              <div className="service-box">
                {language === "eng" ? "Exchange of Deed" : "ಅದಲು-ಬದಲು"}
              </div>
            </Link>
            <Link to={"/cancel"} className="link">
              <div className="service-box">
                {language === "eng" ? "Cancellation Deed" : "ರದ್ದಾಯತಿ ಪತ್ರ"}
              </div>
            </Link>
            <Link to={"/rent"} className="link">
              <div className="service-box">
                {language === "eng" ? "Rental Agreement" : "ಬಾಡಿಗೆ ಕರಾರು"}
              </div>
            </Link>
            <Link to={"/reconveyance"} className="link">
              <div className="service-box">
                {language === "eng" ? "Reconveyance Deed" : "ಬಿಡುಗಡೆ ಪತ್ರ"}
              </div>
            </Link>
            <Link to={"/saleagreement"} className="link">
              <div className="service-box">
                {language === "eng" ? "Sale Agreement" : "ಕ್ರಯದ ಕರಾರು"}
              </div>
            </Link>
            <Link to={"/joint"} className="link">
              <div className="service-box">
                {language === "eng"
                  ? "Joint Development Agreement"
                  : "ಜಂಟಿ ಅಭಿವೃದ್ಧಿ ಕರಾರು"}
              </div>
            </Link>
            <Link to={"/consent"} className="link">
              <div className="service-box">
                {language === "eng" ? "Consent Deed" : "ಒಪ್ಪಿಗೆ ಪತ್ರ"}
              </div>
            </Link>
            <Link to={"/attorney"} className="link">
              <div className="service-box">
                {language === "eng"
                  ? "General Power Attorney"
                  : "ಸಾಮಾನ್ಯ ಅಧಿಕಾರ ಪತ್ರ"}
              </div>
            </Link>
            <Link to={"/will"} className="link">
              <div className="service-box">
                {language === "eng" ? "Will" : "ಇಚ್ಛಾಪತ್ರ"}
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
