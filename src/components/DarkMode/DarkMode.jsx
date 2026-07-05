import React, { useState } from "react";
import "./DarkMode.css";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.querySelector("body").setAttribute("data-theme", next ? "dark" : "light");
  };

  return (
    <button
      className={`theme-toggle-btn ${isDark ? "is-dark" : "is-light"}`}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      type="button"
    >
      {/* Sun icon */}
      <svg
        className="theme-icon sun-icon"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4.5" strokeWidth="1.75" stroke="currentColor" />
        <line x1="12" y1="2" x2="12" y2="4.5" strokeWidth="1.75" stroke="currentColor" strokeLinecap="round" />
        <line x1="12" y1="19.5" x2="12" y2="22" strokeWidth="1.75" stroke="currentColor" strokeLinecap="round" />
        <line x1="2" y1="12" x2="4.5" y2="12" strokeWidth="1.75" stroke="currentColor" strokeLinecap="round" />
        <line x1="19.5" y1="12" x2="22" y2="12" strokeWidth="1.75" stroke="currentColor" strokeLinecap="round" />
        <line x1="4.93" y1="4.93" x2="6.7" y2="6.7" strokeWidth="1.75" stroke="currentColor" strokeLinecap="round" />
        <line x1="17.3" y1="17.3" x2="19.07" y2="19.07" strokeWidth="1.75" stroke="currentColor" strokeLinecap="round" />
        <line x1="19.07" y1="4.93" x2="17.3" y2="6.7" strokeWidth="1.75" stroke="currentColor" strokeLinecap="round" />
        <line x1="6.7" y1="17.3" x2="4.93" y2="19.07" strokeWidth="1.75" stroke="currentColor" strokeLinecap="round" />
      </svg>

      {/* Moon icon */}
      <svg
        className="theme-icon moon-icon"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
          strokeWidth="1.75"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default DarkMode;
