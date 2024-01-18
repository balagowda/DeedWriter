import React from "react";
import "../Styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h2 className="eng">N Purushothama</h2>
        <p className="sub-header-1 eng">Deed writer at sub-registrar office <span style={{color:"rgb(235, 192, 23)"}}>Heggadadevanakote</span></p><br />
        <p className="sub-header-2 eng">Registration ,Record verification, Non-govt Agreements</p>
      </div>
      <section className="home-services">
        <div className="service-container">
        <div className="service-container-box">
          <Link to={'/sale'} className="link">
            <div className="service-box eng">Sale Agreement</div>
          </Link>
          <Link to={'/gift'} className="link">
            <div className="service-box eng">Gift Deed</div>
          </Link>
          <Link to={'/partition'} className="link">
            <div className="service-box eng">Partition Deed</div>
          </Link>
          <Link to={'/rent'} className="link">
            <div className="service-box eng">Rent Agreement</div>
          </Link>
          <Link to={'/release'} className="link">
            <div className="service-box eng">Release Deed</div>
          </Link>
          <Link to={'/will'} className="link">
            <div className="service-box eng">Will</div>
          </Link>
          <Link to={'/will'} className="link">
            <div className="service-box eng">Will</div>
          </Link>
          <Link to={'/will'} className="link">
            <div className="service-box eng">Will</div>
          </Link>
          <Link to={'/will'} className="link">
            <div className="service-box eng">Will</div>
          </Link>
          <Link to={'/will'} className="link">
            <div className="service-box eng">Will</div>
          </Link>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
