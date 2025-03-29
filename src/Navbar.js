import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Link} from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {

  
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { 
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

    
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-logo">
        <a href="/">FootballStore</a>
      </div>
      <ul className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/Store">Store</Link>
        <Link to="/AboutUs">AboutUs</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart" className="navbar-cart">Cart</Link>
      </ul>

      {/* { <BrowserRouter>
        <ul className="navbar-links">
            <li><Link to ='/'>Home</Link></li>
            <li><Link to ='/AboutUS'>AboutUS</Link></li>
            <li><Link to ='/Contact'>Contact</Link></li>
          </ul>
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/AboutUS' element={<AboutUS/>} />
                <Route path='/Contact' element={<Contact/>} />
              </Routes>
         </BrowserRouter> } */}
    </nav>
  );
};

export default Navbar;
