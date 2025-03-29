import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import kit from './images/kit.jpg';
import boots from './images/50.png';
import ball from './images/ball.jpg';
import nike from './images/nike.jpg';
import gloves from './images/gloves.jpg';
import Shin from './images/Shin Guards.png';
import Ladder from './images/ladder.png';
import Socks from './images/Socks.png';

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  const [likedProducts, setLikedProducts] = useState({});
  const [cartProducts, setCartProducts] = useState({});
  const [popupMessage, setPopupMessage] = useState('');

  const products = [
    { id: 1, name: 'Adidas Pro Match Ball', price: '$89.99', image: ball },
    { id: 3, name: 'Goalkeeper Gloves', price: '$79.99', image: gloves },
    { id: 4, name: 'F50 Boots', price: '$129.99', image: boots },
    { id: 5, name: 'Football Training Kit', price: '$69.99', image: kit },
    { id: 6, name: 'Shin Guards', price: '$21.99', image: Shin },
    { id: 7, name: 'Agility Ladder', price: '$14.99', image: Ladder },
    { id: 2, name: 'Nike Flight Ball', price: '$99.99', image: nike },
    { id: 8, name: 'Socks', price: '$18.99', image: Socks },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll('.hero-card');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  const toggleLike = (id, name) => {
    const isLiked = likedProducts[id];

    // Update the liked products state
    setLikedProducts((prev) => ({
      ...prev,
      [id]: !isLiked,
    }));

    // Show appropriate popup message
    if (isLiked) {
      setPopupMessage(`${name} has been removed from your favorites.`);
    } else {
      setPopupMessage(`${name} has been added to your favorites!`);
    }

    // Automatically hide the popup after 2 seconds
    setTimeout(() => {
      setPopupMessage('');
    }, 2000);
  };

  const toggleCart = (id, name) => {
    const isInCart = cartProducts[id];

    // Update the cart products state
    setCartProducts((prev) => ({
      ...prev,
      [id]: !isInCart,
    }));

    // Show appropriate popup message for cart
    if (isInCart) {
      setPopupMessage(`${name} has been removed from your cart.`);
    } else {
      setPopupMessage(`${name} has been added to your cart!`);
    }

    // Automatically hide the popup after 2 seconds
    setTimeout(() => {
      setPopupMessage('');
    }, 2000);
  };

  return (
    <div className="hero-section">
      <h2 className="hero-heading">Explore Our Football Products</h2>

      {popupMessage && (
        <div className="popup-message">
          {popupMessage}
        </div>
      )}

      <div className="product-grid">
        {products.map((product) => (
          <div className={`hero-card ${visible ? 'animate' : ''}`} key={product.id}>
            <div className="image-container">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="icon-container">
                <span
                  className={`icon heart ${likedProducts[product.id] ? 'liked' : ''}`}
                  onClick={() => toggleLike(product.id, product.name)}
                >
                  ❤
                </span>
                <span
                  className={`icon cart ${cartProducts[product.id] ? 'in-cart' : ''}`}
                  onClick={() => toggleCart(product.id, product.name)}
                >
                  🛒
                </span>
              </div>
            </div>
            <div className="product-details">
              <h3 className="product-title">{product.name}</h3>
              <p className="product-price">{product.price}</p>
            </div>
            <div className="product-button">
              <button><span>Shop Now</span></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
