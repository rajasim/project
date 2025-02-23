import React from "react";
import "../css_files/Rubber.css";
import { useNavigate } from "react-router-dom";

const ServiceSection = () => {
  
  return (
    <section className="service-section">
      <div className="service-container">
        {/* Image Section */}
        <div className="service-image">
          <img src="/images/About.jpg" alt="Service" />
        </div>

        {/* Text Content */}
        <div className="service-text">
          <h2>Service Name</h2>
          <p>
            This is the space to describe the service. Focus the description on how customers or
            clients can benefit from using this service: explain how it solves a problem, or makes
            life easier or more enjoyable.
          </p>
          <p>
            Be sure to include all the relevant details users will want to know, like pricing,
            duration, and location. If they need to prepare or bring anything with them, let them
            know here. Give users an idea of what to expect from the service and tell them how to
            book it.
          </p>
          <a href="#" className="read-more">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
