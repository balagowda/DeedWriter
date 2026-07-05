import React from "react";
import "../Styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Main footer grid */}
      <div className="footer-body">

        {/* Brand column */}
        <div className="footer-brand">
          <div className="footer-logo-row">
            <img src="/logo_.png" alt="N Purushothama Logo" className="footer-logo" />
            <span className="footer-site-name">N Purushothama</span>
          </div>
          <p className="footer-tagline">
            Licensed Deed Writer & Document Professional.<br />
            Serving Heggadadevanakote with precision and legal accuracy.
          </p>
        </div>

        {/* Services column */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul className="footer-links">
            <li><Link to="/">All Deeds</Link></li>
          </ul>
        </div>

        {/* Contact column */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-links">
            <li><a href="tel:+919900853784">+91 99008 53784</a></li>
            <li><a href="mailto:purushothama.hdk@gmail.com">purushothama.hdk@gmail.com</a></li>
            <li><a href="https://maps.app.goo.gl/LjM9ruSQDW8TJVcc6" target="_blank" rel="noreferrer">Heggadadevanakote</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
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
