import React from 'react';
import './Header.css';
import images from './images/Arsenal 🏟️.jpg'

const Header = () => {
  return (
    <header className="header">
      <div className="images">
      <img src= { images}alt=""/>
      </div>
      <div className="header-overlay">
        <h1 className="header-title">Welcome to FootballStore</h1>
        <p className="header-subtitle">Your one-stop shop for all football needs</p>
      </div>
      <div className="button">
        <button><span>Shop now</span></button>
       
      </div>

  
      
    </header>
  );
};

export default Header;
