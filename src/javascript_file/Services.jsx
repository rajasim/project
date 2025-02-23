import React from "react";
import "../css_files/Rubbercard.css";
import { useNavigate } from "react-router-dom";
const Services = () => {
     const nav=useNavigate()
  return (
    <div className="contentent" id="contentent">

    <div className="box">
      <h2 className="offer">ISO 9001 Certification</h2>
      <img src="/images/9001.png" alt="Gift Card" className="image" />
      <p className="text">Durable & Reliable Rubber Seals Precision Engineered </p>
      <button className="cta-button">Order Now→</button>
    </div>

    <div className="box">
      <h2 className="offer"> ISO 14001 Certification</h2>
      <figure>
      <img src="/images/1400.png" alt="Gift Card" className="image" />
      </figure>
      <p className="text">Precision-Crafted Custom Rubber Mouldings Engineered for Excellence</p>
      <button className="cta-button">Order Now→</button>
    </div>

    <div className="box">
      <h2 className="offer">ISO 45001 Certification</h2>
      <figure>
      <img src="/images/45001.png" alt="Gift Card" className="image" />
      </figure>
      <p className="text">Reliable & Durable Anti-Vibration Mounts – Reducing Noise</p>
      <button className="cta-button">Order Now→</button>
    </div>

    <div className="box">
      <h2 className="offer">ISO 22000 Certification </h2>
      <figure>
      <img src="/images/2200.jpg" alt="Gift Card" className="image" />
      </figure>
      <p className="text">Flexible & Durable Rubber Hoses Tubing Engineered Peak Performance</p>
      <button className="cta-button">Order Now→</button>
    </div>

    <div className="box">
      <h2 className="offer">ISO 27001 Certification </h2>
      <figure>
      <img src="/images/2700.png" alt="Gift Card" className="image" />
      </figure>
      <p className="text">Polymer Components Precision Engineered for Versatility</p>
      <button className="cta-button">Order Now→</button>
    </div>

    <div className="box">
      <h2 className="offer"> ISO 13485 Certification  </h2>
      <figure>
      <img src="/images/1348.png" alt="Gift Card" className="image" />
      </figure>
      <p className="text">Reliable Leak-Proof O-Rings Sealing Solutions Precision for Every Application</p>
      <button className="cta-button">Order Now→</button>
    </div>

    <div className="box">
      <h2 className="offer">Training & Workshops</h2>
      <figure>
      <img src="/images/workshop.jpg" alt="Gift Card" className="image" />
      </figure>
      <p className="text">High-Quality Rubber Sheets & Rolls – Durable, Flexible Built to Perform</p>
      <button className="cta-button">Order Now→</button>
    </div>

    <div className="box">
      <h2 className="offer">Internal Audit Services</h2>
      <figure>
      <img src="/images/internal.png" alt="Gift Card" className="image" />
      </figure>
      <p className="text">Lightweight  Foam Rubber Products Perfect for Cushioning Insulation</p>
      <button className="cta-button">Order Now→</button>
    </div>

    <div className="box">
      <h2 className="offer">Consultancy  Improvement</h2>
      <figure>
      <img src="/images/improvement.png" alt="Gift Card" className="image" />
      </figure>
      <p className="text">Versatile & Heat-Resistant Silicone Rubber Products</p>
      <button className="cta-button">Order Now→</button>
    </div>

    <div className="box">
      <h2 className="offer"> Compliance Audits</h2>
      <figure>
      <img src="/images/Audits.png" alt="Gift Card" className="image" />
      </figure>
      <p className="text">Durable & Reliable High-Performance Elastomers</p>
      <button className="cta-button">Order Now→</button>
    </div>

    <div className="box">
      <h2 className="offer">Business Process </h2>
      <figure>
      <img src="/images/bussnes.jpg" alt="Gift Card" className="image" />
      </figure>
      <p className="text">Advanced & Customised Specialty Compounds</p>
      <button className="cta-button">Order Now→</button>
    </div>
    <button id="gobacktohome" onClick={()=>{nav("/")}}>Go back</button>
    </div>
    
   
  );
};

export default Services;


