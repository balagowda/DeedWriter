import React from "react";
import "../Styles/home.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Home = () => {
  const { language } = useLanguage();

  const services = [
    { path: "/sale", en: "Sale Deed", kn: "ಕ್ರಯ ಪತ್ರ", icon: "📄" },
    { path: "/gift", en: "Gift Deed", kn: "ದಾನ ಪತ್ರ", icon: "🎁" },
    { path: "/partition", en: "Partition Deed", kn: "ವಿಭಾಗ ಪತ್ರ", icon: "➗" },
    { path: "/release", en: "Release Deed", kn: "ಹಕ್ಕುಖುಲಾಸೆ ಪತ್ರ", icon: "🕊️" },
    { path: "/exchange", en: "Exchange of Deed", kn: "ಅದಲು-ಬದಲು", icon: "🔄" },
    { path: "/cancel", en: "Cancellation Deed", kn: "ರದ್ದಾಯತಿ ಪತ್ರ", icon: "❌" },
    { path: "/rent", en: "Rental Agreement", kn: "ಬಾಡಿಗೆ ಕರಾರು", icon: "🏠" },
    { path: "/reconveyance", en: "Reconveyance Deed", kn: "ಬಿಡುಗಡೆ ಪತ್ರ", icon: "📜" },
    { path: "/saleagreement", en: "Sale Agreement", kn: "ಕ್ರಯದ ಕರಾರು", icon: "🤝" },
    { path: "/joint", en: "Joint Development Agreement", kn: "ಜಂಟಿ ಅಭಿವೃದ್ಧಿ ಕರಾರು", icon: "🏗️" },
    { path: "/consent", en: "Consent Deed", kn: "ಒಪ್ಪಿಗೆ ಪತ್ರ", icon: "✅" },
    { path: "/attorney", en: "General Power Attorney", kn: "ಸಾಮಾನ್ಯ ಅಧಿಕಾರ ಪತ್ರ", icon: "⚖️" },
    { path: "/will", en: "Will", kn: "ಇಚ್ಛಾಪತ್ರ", icon: "✒️" },
  ];

  return (
    <div className="home-container">
      <section className="home-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            {language === "eng" ? "N Purushothama" : "ಎನ್ ಪುರುಷೋತ್ತಮ"}
          </h1>
          
          <h2 className="hero-subtitle">
            {language === "eng" ? "Expert Document Writer" : "ನುರಿತ ಪತ್ರ ಬರಹಗಾರರು"}
            <span className="hero-highlight">
              {language === "eng" ? " • Heggadadevanakote" : " • ಹೆಗ್ಗಡದೇವನಕೋಟೆ"}
            </span>
          </h2>
          
          <p className="hero-description">
            {language === "eng"
              ? "Professional drafting of Registration and Non-registration Documents with precision and legal accuracy."
              : "ನೋಂದಣಿ ಮತ್ತು ನೋಂದಣಿ-ರಹಿತ ಪತ್ರಗಳನ್ನು ನಿಖರವಾಗಿ ಮತ್ತು ಕಾನೂನುಬದ್ಧವಾಗಿ ಬರೆಯಲಾಗುವುದು."}
          </p>
          
          <div className="hero-cta">
            <Link to={"/contact"} className="btn-primary">
              {language === "eng" ? "Contact Us" : "ಸಂಪರ್ಕಿಸಿ"}
            </Link>
          </div>
        </div>
      </section>

      <section className="home-services">
        <div className="services-header">
          <h2>{language === "eng" ? "Our Services" : "ನಮ್ಮ ಸೇವೆಗಳು"}</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="service-grid">
          {services.map((service, index) => (
            <Link to={service.path} className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-name">
                {language === "eng" ? service.en : service.kn}
              </h3>
              <div className="service-hover-indicator">➔</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
