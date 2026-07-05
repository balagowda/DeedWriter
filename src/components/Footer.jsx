import React from "react";
import "../Styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} N Purushothama. All rights reserved.
        </p>
        <p className="footer-developer">
          Crafted with care by <a href="mailto:balagowda9483@gmail.com">balachandregowda</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
