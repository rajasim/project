import React from "react";
import "../css_files/Metropage.css";

const Metroopage = () => {
  return (
    <div className="metro-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo"><img src="/images/logo.jpeg" style={{width:"140px"}}></img></div>
        
        <ul className="nav-links">
          <li>About Us</li>
          <li>Solutions</li>
          <li>Join Us</li>
          <li>Get in Touch</li>
          <li>Careers</li>
        </ul>
      </nav>
      <header className="hero-section">
      <figure>
        <img src="/images/tion.png"/>
        <div className="hero-content">
          <h1>Going Further Together</h1>
          <p>
            Welcome to METRO’s Center of Excellence, where passion meets
            innovation to provide high-quality solutions for business
            propulsion. Join us in co-creating a #FUTUREREADY path for METRO’s
            mission of excellence and for you.
          </p>
          <button className="cta-button">More about us →</button>
        </div>
      </figure>
        
      </header>
    </div>
  );
};

export default Metroopage;
