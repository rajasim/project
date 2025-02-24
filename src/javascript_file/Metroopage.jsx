import React, { useRef } from "react";
import "../css_files/Metropage.css";

const Metroopage = () => {
  const linkref=useRef()
  
  return (
    <div className="metro-container">
      
      <nav className="navbar">
        <div className="logo"><img src="/images/logo.jpeg" style={{width:"140px"}}></img></div>
       <aside> 
        <ul className="nav-links" ref={linkref}>
          <li>About Us</li>
          <li>Solutions</li>
          <li>Join Us</li>
          <li>Get in Touch</li>
          <li>Careers</li>
        </ul>
        </aside>
        <i class="fa-solid fa-bars-staggered" style={{fontSize:"2.5rem", cursor:"pointer", display:"none" }} onClick={()=>{
          if(linkref.current.style.display==="flex"){
            linkref.current.style.display="none"
          }
          else{linkref.current.style.display="flex"}
        }}></i>
      </nav>
      <header className="hero-section">
      <figure>
        <img src="/images/tion.png"/>
        <div className="hero-content">
          <h1>Going Further Together</h1>
          <p>
            Welcome to Global's Center of Excellence, where passion meets
            innovation to provide high-quality solutions for business
            propulsion. Join us in co-creating a #FUTUREREADY path for Global's
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
