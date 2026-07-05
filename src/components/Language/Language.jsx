import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./language.css";

const Language = () => {
  const { language, toggleLanguage } = useLanguage();
  const isKannada = language !== "eng";

  return (
    // Clicking anywhere on the pill — container OR either label — toggles language
    <div
      className="lang-toggle"
      role="button"
      aria-label={isKannada ? "Switch to English" : "ಕನ್ನಡಕ್ಕೆ ಬದಲಿಸಿ"}
      onClick={toggleLanguage}
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggleLanguage()}
    >
      {/* Sliding green indicator */}
      <span
        className="lang-indicator"
        style={{ transform: isKannada ? "translateX(100%)" : "translateX(0%)" }}
      />
      {/* Labels — purely visual, clicks bubble up to the parent */}
      <span className={`lang-option ${!isKannada ? "lang-active" : ""}`}>EN</span>
      <span className={`lang-option ${isKannada ? "lang-active" : ""}`}>ಕ</span>
    </div>
  );
};

export default Language;
