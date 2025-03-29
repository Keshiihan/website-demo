import React from "react";
import './App.css';
import Navbar from './Navbar';
import Header from './Hearder';
import HeroSection from './HeroSection'; 
import Slideshow from './Slideshow';
import Testimonials from './Testimonials ';
import AboutUs from './AboutUs';
import WhyChooseUs from './WhyChooseUs';
import DiscountCard  from './DiscountCard';
import Footer  from './footer';
import Home from './Components/Home';
import AboutUS from './Components/AboutUS';
import Contact from './Components/Contact';
import Store from './Components/Store';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUS" element={<AboutUS/>} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Store" element={<Store />} />

          </Routes>
          </BrowserRouter>      
        
    </div>


    <div>
      <Header />
    </div>

    <div>
      <DiscountCard />
    </div>

    <div>
   
    <HeroSection/>

    </div>


    <div>
      <WhyChooseUs/>
    </div>
    

    <div>
      <Testimonials />
    </div>


    <div>
      
    
    
      
    
      <AboutUs/>
    </div>
  

    <div>
      <Slideshow/>
    </div>

    
    <div>
    <Footer/>
   </div>

       
    </div>
  );
}

export default App;
