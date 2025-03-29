import React from 'react';
import './DiscountCard.css';
import imageSrc from './images/Nike Mercurial Vapor 14.png'
import  imageSrc1 from './images/f50 boots.png'

const PromoCard = ({ title, description, discount, imageSrc, bgColor }) => (
  <div className={`promo-card ${bgColor}`}>
    <div className="promo-content">
      <div className="promo-info">
        <p className="discount">Upto {discount}% Off</p>
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
        <button className="show-now-btn">
          SHOW NOW
        </button>
      </div>
      <div className="promo-image">
        <img 
          src={imageSrc} 
          alt={title} 
        />
      </div>
    </div>
  </div>
);

const DiscountCard = () => {
  const promoItems = [
    {
      title: "Nike Mercurial Vapor 14",
      description: "Lightweight boots for speed and agility, perfect for fast players.",
      discount: 25,
      bgColor: "pink-bg",
      imageSrc: imageSrc
    },
    {
      title: "Adidas F50",
      description: "Lightweight boots designed for explosive speed and sharp turns.",
      discount: 25,
      bgColor: "blue-bg",
      imageSrc: imageSrc1
    }
  ];

  return (
    <div className="promo-section">
      {promoItems.map((item, index) => (
        <PromoCard key={index} {...item} />
      ))}
    </div>
  );
};

export default DiscountCard;