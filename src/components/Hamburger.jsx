import React from "react";

const Hamburger = () => {

  const handleLabelClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="hamburger" id="sidebar">
      <input type="checkbox" id="hamburger_check" />
      <label htmlFor="hamburger_check" className="navigation__button" onClick={handleLabelClick}>
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  );
};

export default Hamburger;
