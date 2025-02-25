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
          <li> <a href="#aboutus">About Us</a></li>
          <li> <a href="#homecontainer">Servics</a></li>
          <li><a href="#foter">Join Us</a></li>
          <li><a href="#foter">Get in Touch</a></li>
          <li><a href="#homecontainer">Carrier</a></li>
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
          
        </div>
      </figure>
        
      </header>
    </div>
  );
};

export default Metroopage;
