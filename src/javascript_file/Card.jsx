import React from "react";
import "../css_files/Card.css";
import { useNavigate } from "react-router-dom";
const Card = () => {
  const nav= useNavigate();
  return (
    <div className="home-container">
      <h2 className="goal-text">
        Our goal is to deliver competitive advantage by standardizing processes, being process compliant,
        delivering sustainable cost-effective solutions and empowering our colleagues to do their best each day.
      </h2>
      <div className="content"> 
        
        <div className="card" onClick={()=>{nav('/rubbercard')}}>
          <div className="image-section cardone"></div>
          <div className="text-section">
            <h3>Engineering Rubber and Polymer Products</h3>
            <p>Precision Engineered Products for Strength, Durability & Performance..</p>
          </div>
        </div>
        <div className="card" onClick={()=>{
          nav('/deired')}}>
        
          <div className="image-section cardtwo"></div>
          <div className="text-section">
            <h3>Dried & Processed Food/Root products</h3>
            <p>Premium Dried & Processed Foods for a Healthier Tomorrow</p>
          </div>
        </div>
        <div className="card" onClick={()=>{
          nav('/woven')
        }}>
          <div className="image-section cardthree"></div>
          <div className="text-section">
            <h3>Woven and Knitted Fabric Products</h3>
            <p>Precision-Crafted Fabrics for Comfort, Style, and Durability.</p>
          </div>
        </div>
        <div className="card" onClick={()=>{
          nav('/services')
        }}>
          <div className="image-section cardfour"></div>
          <div className="text-section">
            <h3>4. ISO Certifications and Business Excellence</h3>
            <p>Setting Global Standards, Achieving Business Excellence.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;