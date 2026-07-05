import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../Styles/sidebar.css";

const servicesList = [
  { path: "/sale", en: "Sale Deed", kn: "ಕ್ರಯ ಪತ್ರ", icon: "📄" },
  { path: "/gift", en: "Gift Deed", kn: "ದಾನ ಪತ್ರ", icon: "🎁" },
  { path: "/partition", en: "Partition Deed", kn: "ವಿಭಾಗ ಪತ್ರ", icon: "➗" },
  { path: "/release", en: "Release Deed", kn: "ಹಕ್ಕುಖುಲಾಸೆ ಪತ್ರ", icon: "🕊️" },
  { path: "/exchange", en: "Exchange of Deed", kn: "ಅದಲು-ಬದಲು", icon: "🔄" },
  { path: "/cancel", en: "Cancellation Deed", kn: "ರದ್ದಾಯತಿ ಪತ್ರ", icon: "❌" },
  { path: "/rent", en: "Rental Agreement", kn: "ಬಾಡಿಗೆ ಕರಾರು", icon: "🏠" },
  { path: "/reconveyance", en: "Reconveyance Deed", kn: "ಬಿಡುಗಡೆ ಪತ್ರ", icon: "📜" },
  { path: "/saleagreement", en: "Sale Agreement", kn: "ಕ್ರಯದ ಕರಾರು", icon: "🤝" },
  { path: "/joint", en: "Joint Development", kn: "ಜಂಟಿ ಅಭಿವೃದ್ಧಿ", icon: "🏗️" },
  { path: "/consent", en: "Consent Deed", kn: "ಒಪ್ಪಿಗೆ ಪತ್ರ", icon: "✅" },
  { path: "/attorney", en: "General Power Attorney", kn: "ಸಾಮಾನ್ಯ ಅಧಿಕಾರ", icon: "⚖️" },
  { path: "/will", en: "Will", kn: "ಇಚ್ಛಾಪತ್ರ", icon: "✒️" },
  { path: "/others", en: "Other Documents", kn: "ಇತರ ದಾಖಲೆಗಳು", icon: "📂" },
];

const ServiceLayout = () => {
  const { language } = useLanguage();
  const location = useLocation();

  const currentService = servicesList.find(s => s.path === location.pathname);
  const title = currentService ? (language === "eng" ? currentService.en : currentService.kn) : "";

  return (
    <>
      <Navbar />
      <div className="layout-container">
        
        {/* Sidebar */}
        <aside className="sidebar">
          <h3 className="sidebar-title">
            {language === "eng" ? "All Services" : "ಎಲ್ಲಾ ಸೇವೆಗಳು"}
          </h3>
          <nav className="sidebar-nav">
            {servicesList.map((service, idx) => (
              <NavLink 
                key={idx} 
                to={service.path}
                className={({ isActive }) => `sidebar-link ${isActive ? 'active-sidebar-link' : ''}`}
              >
                <span className="sidebar-icon">{service.icon}</span>
                <span className="sidebar-text">{language === "eng" ? service.en : service.kn}</span>
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="main-content">
          <div className="breadcrumbs">
            <NavLink to="/">{language === "eng" ? "Home" : "ಮುಖಪುಟ"}</NavLink>
            <span className="breadcrumb-separator"> / </span>
            <span className="breadcrumb-current">{title}</span>
          </div>
          
          {/* Outlet renders the specific deed component (Sale, Gift, etc.) */}
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ServiceLayout;
