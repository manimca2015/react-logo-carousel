import React from 'react';
import './LogoCarousel.css';

const logos = [
  process.env.PUBLIC_URL + '/logos/logo1.jpg',
  process.env.PUBLIC_URL + '/logos/logo2.jpg',
  process.env.PUBLIC_URL + '/logos/logo3.jpg',
  process.env.PUBLIC_URL + '/logos/logo1.jpg',
  process.env.PUBLIC_URL + '/logos/logo2.jpg',
  process.env.PUBLIC_URL + '/logos/logo3.jpg',
  process.env.PUBLIC_URL + '/logos/logo1.jpg',
  process.env.PUBLIC_URL + '/logos/logo2.jpg',
  process.env.PUBLIC_URL + '/logos/logo3.jpg',
];

export default function LogoCarousel() {
  return (
    <div className="logo-carousel-container">
      <div className="row">
      <h2 className="text-center">Logo Carousel in React</h2>  
      </div>
      {/* Row 1: Left to Right */}
      <div className="carousel-row scroll-right">
        <div className="carousel-track">
          {logos.concat(logos).map((logo, index) => (
            <img src={logo} alt={`Logo ${index}`} key={`row1-${index}`} className="logo" />
          ))}
        </div>
      </div>

      {/* Row 2: Right to Left */}
      <div className="carousel-row scroll-left">
        <div className="carousel-track">
          {logos.concat(logos).map((logo, index) => (
            <img src={logo} alt={`Logo ${index}`} key={`row2-${index}`} className="logo" />
          ))}
        </div>
      </div>
    </div>
  );
}
