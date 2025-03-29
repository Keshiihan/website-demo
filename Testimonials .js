import React, { useEffect } from 'react';
import './Testimonials .css';
import user from './images/image-removebg-preview.png';
import man from './images/peaky.png';
import boy from './images/idk.png';
import girl from './images/image-removebg-preview (1).png';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      feedback: 'The quality of the products is excellent, and the service is outstanding!',
      image: user,
    },
    {
      id: 2,
      name: 'Jane Smith',
      feedback: 'I love the variety of football gear available here. Highly recommend it!',
      image: man,
    },
    {
      id: 3,
      name: 'Samuel Jackson',
      feedback: 'Finally, a one-stop shop for football enthusiasts! I bought a pair of boots, and they fit perfectly. The sizing guide was spot-on. I’ll be back for more!',
      image: boy,
    },
    {
      id: 4,
      name: 'Ruby',
      feedback: 'I’ve shopped at many football stores online, but this one stands out. Great product quality and customer service that actually cares!',
      image: girl,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the animation class when 50% of the card is in the viewport
          const card = entry.target;
          if (card.classList.contains('left')) {
            card.classList.add('animate', 'left-to-right');
          } else {
            card.classList.add('animate', 'right-to-left');
          }
        }
      });
    }, { threshold: 0.6 }); // Trigger animation when 50% of the card is visible

    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach((card, index) => {
      if (index % 2 === 0) {
        card.classList.add('left');
      } else {
        card.classList.add('right');
      }
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="testimonials-section">
      <h2 className="testimonials-heading">What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <h3 className="testimonial-name">- {testimonial.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
