import React from 'react';
import './Slideshow.css';
import logo from './images/puma.png';
import icon from './images/nike.png';
import img from './images/adidas.png';
import Logo from './images/image-removebg-preview (2).png'

const Slideshow = () => {
  const logos = [logo, icon, img, Logo, logo, icon, img,Logo];

  return (
    <div className="slideshow-container">
      {/* Heading */}
      <h2 className="slideshow-heading">Featured Brands</h2>

      {/* Slideshow */}
      <div className="slideshow">
        <div className="slideshow-track">
          {logos.map((logo, index) => (
            <div className="slideshow-item" key={index}>
              <img src={logo} alt={`Logo ${index + 1}`} className="slideshow-image" />
            </div>
          ))}

          {/* Duplicate images for smooth scrolling */}
          {logos.map((icon, index) => (
            <div className="slideshow-item" key={`duplicate-${index}`}>
              <img src={icon} alt={`Logo Duplicate ${index + 1}`} className="slideshow-image" />
            </div>
          ))}

          
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
