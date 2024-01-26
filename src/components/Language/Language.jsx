import React from "react";
import { useLanguage } from '../../context/LanguageContext'
import './language.css';

const Language = () => {

  const { toggleLanguage } = useLanguage();

  const handleCheckboxChange = () => {
    toggleLanguage();
  };

  return (
    <label className="lang_switch">
      <input type="checkbox" id="language_check" onChange={handleCheckboxChange}/>
      <div className="lang_slider lang_slider--0">ಕ</div>
      <div className="lang_slider lang_slider--1">
        <div></div>
        <div></div>
      </div>
      <div className="lang_slider lang_slider--2"></div>
      <div className="lang_slider lang_slider--3">Eng</div>
    </label>
  );
};

export default Language;
