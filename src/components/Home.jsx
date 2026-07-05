import React, { useState } from "react";
import "../Styles/home.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Home = () => {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");

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
    { path: "/others", en: "Other Documents", kn: "ಇತರ ದಾಖಲೆಗಳು", icon: "📂" },
  ];

  const filteredServices = services.filter((service) => {
    const term = searchTerm.toLowerCase();
    return service.en.toLowerCase().includes(term) || service.kn.includes(term);
  });

  return (
    <div className="home-container">
      <section className="home-hero">
        <div className="hero-content">

          {/* Licensed badge */}
          <div className="hero-badge">
            {language === "eng" ? "Licensed Document Professional" : "ಪರವಾನಗಿ ಪಡೆದ ದಾಖಲೆ ತಜ್ಞ"}
          </div>

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

          {/* <div className="search-bar-container">
            <input
              type="text"
              className="search-input"
              placeholder={language === "eng" ? "Search for a deed..." : "ಪತ್ರಕ್ಕಾಗಿ ಹುಡುಕಿ..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="search-icon">🔍</span>
          </div> */}

          <div className="hero-cta">
            <Link to={"/contact"} className="btn-primary">
              {language === "eng" ? "Contact Us" : "ಸಂಪರ್ಕಿಸಿ"}
            </Link>
          </div>

          {/* Trust badges */}
          <div className="trust-badges">
            <span className="trust-badge">
              <span className="trust-badge-icon">🏅</span>
              {language === "eng" ? "Licensed Professional" : "ಪರವಾನಗಿ ತಜ್ಞ"}
            </span>
            <span className="trust-dot"></span>
            <span className="trust-badge">
              <span className="trust-badge-icon">📋</span>
              {language === "eng" ? "25+ Deed Types" : "25+ ಪತ್ರ ಪ್ರಕಾರಗಳು"}
            </span>
            <span className="trust-dot"></span>
            <span className="trust-badge">
              <span className="trust-badge-icon">📍</span>
              {language === "eng" ? "Heggadadevanakote" : "ಹೆಗ್ಗಡದೇವನಕೋಟೆ"}
            </span>
          </div>
        </div>
      </section>

      <section className="home-services">
        <div className="services-header">
          <h2>{language === "eng" ? "Our Services" : "ನಮ್ಮ ಸೇವೆಗಳು"}</h2>
          <div className="section-divider"></div>
        </div>

        {filteredServices.length > 0 ? (
          <div className="service-grid">
            {filteredServices.map((service, index) => (
              <Link to={service.path} className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-name">
                  {language === "eng" ? service.en : service.kn}
                </h3>
                <div className="service-hover-indicator">
                  {language === "eng" ? "View details" : "ವಿವರ ನೋಡಿ"} →
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>{language === "eng" ? "No deeds found matching your search." : "ನಿಮ್ಮ ಹುಡುಕಾಟಕ್ಕೆ ಹೊಂದುವ ಯಾವುದೇ ಪತ್ರಗಳು ಕಂಡುಬಂದಿಲ್ಲ."}</p>
          </div>
        )}
      </section>

      {/* Experience & Trust Section */}
      <section className="home-stats">
        <div className="stats-content">
          <div className="stats-text">
            <h2>
              {language === "eng" ? "Trusted by Generations" : "ಪೀಳಿಗೆಗಳಿಂದ ನಂಬಿಕಾರ್ಹ"}
            </h2>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">
                  {language === "eng" ? "Years of Experience" : "ವರ್ಷಗಳ ಅನುಭವ"}
                </span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">5000+</span>
                <span className="stat-label">
                  {language === "eng" ? "Happy Customers" : "ಸಂತೋಷದ ಗ್ರಾಹಕರು"}
                </span>
              </div>
            </div>
            <p className="stats-description">
              {language === "eng" 
                ? "Providing expert legal documentation services with unmatched precision, integrity, and deep understanding of local property laws since 2000."
                : "2000 ರಿಂದಲೂ ನಿಖರತೆ, ಸಮಗ್ರತೆ ಮತ್ತು ಸ್ಥಳೀಯ ಆಸ್ತಿ ಕಾನೂನುಗಳ ಆಳವಾದ ತಿಳುವಳಿಕೆಯೊಂದಿಗೆ ಪರಿಣಿತ ಕಾನೂನು ದಾಖಲೀಕರಣ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತಿದ್ದೇವೆ."}
            </p>
          </div>
          
          <div className="stats-seal-wrapper">
            <div className="seal-container">
              <svg className="seal-text-svg" viewBox="0 0 100 100">
                <path id="seal-path" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text>
                  <textPath href="#seal-path" startOffset="0%">
                    • TRUST & EXPERIENCE SINCE 2000 • TRUST & EXPERIENCE SINCE 2000 
                  </textPath>
                </text>
              </svg>
              <div className="seal-center-icon">⚖️</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
