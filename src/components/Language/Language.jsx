import React from "react";
import { useLanguage } from '../../context/LanguageContext'
import './language.css';

const Language = () => {

  const { toggleLanguage } = useLanguage();

  const handleCheckboxChange = () => {
    toggleLanguage();
  };

  return (
    <label class="lang_switch">
      <input type="checkbox" id="language_check" onChange={handleCheckboxChange}/>
      <div class="lang_slider lang_slider--0">ಕ</div>
      <div class="lang_slider lang_slider--1">
        <div></div>
        <div></div>
      </div>
      <div class="lang_slider lang_slider--2"></div>
      <div class="lang_slider lang_slider--3">Eng</div>
    </label>
  );
};

export default Language;
