import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./language.css";

const Language = () => {
  const { language, toggleLanguage } = useLanguage();
  const isKannada = language !== "eng";

  return (
    <div className="lang-toggle" role="group" aria-label="Language selector">
      {/* Sliding indicator */}
      <span
        className="lang-indicator"
        style={{ transform: isKannada ? "translateX(100%)" : "translateX(0%)" }}
      />
      <button
        className={`lang-option ${!isKannada ? "lang-active" : ""}`}
        onClick={() => isKannada && toggleLanguage()}
        aria-label="Switch to English"
        type="button"
      >
        EN
      </button>
      <button
        className={`lang-option ${isKannada ? "lang-active" : ""}`}
        onClick={() => !isKannada && toggleLanguage()}
        aria-label="Switch to Kannada"
        type="button"
      >
        ಕ
      </button>
    </div>
  );
};

export default Language;
