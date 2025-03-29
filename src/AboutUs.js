import React, { useEffect, useRef, useState } from "react";
import "./AboutUs.css";
import img from "./images/Lionel Messi - FootyRenders1.png";



const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = imageRef.current; // Store ref in a variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="about-section">
      <div className="about-content">
        <div className={`about-image-container ${isVisible ? "visible" : ""}`} ref={imageRef}>
          <img src={img} alt="Football Haven" className="about-image" />
        </div>
        <div className="about-text-container">
          <h2 className="about-heading">About Us</h2>
          <p className="about-text">
            At Football Haven, we are passionate about delivering the best football gear for players of all levels. Our mission is to empower athletes with top-quality products that enhance their game. Whether you're looking for premium footballs, durable boots, or training essentials, we've got you covered.
          </p>
          <p className="about-text">
            Established in 2025, our team is dedicated to providing an exceptional shopping experience. We believe in quality, innovation, and the spirit of the game.
          </p>
          <button className="read-more-button" onClick={() => window.open("/about-more", "_blank")}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
