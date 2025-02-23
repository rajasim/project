import React, { useEffect, useRef } from "react";
import "../css_files/About.css"


function About() {
  const aboutusref = useRef();
  useEffect(() => {
    const observe = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const div = entry.target;
          console.log(div);
          div.style.transform = "skew(0deg)";
          div.style.transition = "transform 2s ease";

          observer.disconnect();
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(observe, options);

    if (aboutusref.current) {
      observer.observe(aboutusref.current);
    }

    return () => {
      if (aboutusref.current) {
        observer.unobserve(aboutusref.current);
      }
    };
  }, []);
  return (
    <section style={{width:"100%",overflow:"hidden"}}>
    <div className="about-us" ref={aboutusref} id="about-us">
      <figure>
        <img src="/images/About.jpg" />
      </figure>
      <aside>
        <blockquote style={{ width: "70%", margin: "0 auto" }}>
          <h2>About Us</h2>
          <h1>Committed to Excellence in IT Services</h1>
        </blockquote>
        <blockquote>
          <h2>
          we're a diversified group of companies with a rich history of innovation, quality, and excellence. Our business segments are carefully curated to cater to diverse industries, from engineering and manufacturing to food processing and textiles.
          </h2>
        </blockquote>
        <blockquote style={{ flexDirection: "row" }}>
         
        </blockquote>
      </aside>
    </div>
    </section>
  );
}

export default About;
