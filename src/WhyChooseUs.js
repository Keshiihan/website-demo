import React, { useRef, useEffect, useState } from "react";
import "./WhyChooseUs.css";
import holder from "./images/neymar.png";

const WhyChooseUs = () => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.8 }
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
    <div className="why-choose-us">
      <div className="left-section">
        <h2>Why Choose Us</h2>
        <p>Here are some reasons why customers love us.</p>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">🚚</div>
            <h3>Fast & Free Shipping</h3>
            <p>Get your products delivered quickly and for free.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🛒</div>
            <h3>Easy to Shop</h3>
            <p>Our platform is user-friendly and simple to navigate.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📞</div>
            <h3>24/7 Support</h3>
            <p>We’re here for you anytime you need us.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔄</div>
            <h3>Hassle-Free Returns</h3>
            <p>Returning a product is simple and easy.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔒</div>
            <h3>100% Secure Payment</h3>
            <p>Enjoy 100% secure payment options for a safe and hassle-free shopping experience!</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🏷️</div>
            <h3>Daily Offers</h3>
            <p>Exclusive daily offers to kickstart your football shopping experience!</p>
          </div>
        </div>
      </div>
      <div className={`right-section ${isVisible ? "fade-in" : ""}`} ref={imageRef}>
        <img src={holder} alt="Why Choose Us" className="feature-image" />
      </div>
    </div>
  );
};

export default WhyChooseUs;
