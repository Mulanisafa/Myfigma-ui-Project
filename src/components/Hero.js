import React from 'react';
import Button from './Button';
import './Hero.css';

// Hero Illustration
import Illustration from '../assets/Frame 29.svg';

// Import all logos
import Logo1 from '../assets/Company logo.svg';
import Logo2 from '../assets/Company logo (2).svg';
import Logo3 from '../assets/Company logo (3).svg';
import Logo4 from '../assets/Company logo (4).svg';
import Logo5 from '../assets/Company logo (6).svg';
import Logo6 from '../assets/Company logo (7).svg';

const logos = [
  { src: Logo1, alt: "Company Logo 1" },
  { src: Logo2, alt: "Company Logo 2" },
  { src: Logo3, alt: "Company Logo 3" },
  { src: Logo4, alt: "Company Logo 4" },
  { src: Logo5, alt: "Company Logo 5" },
  { src: Logo6, alt: "Company Logo 6" },
  
];

function Hero({
  illustrationSrc = Illustration,
  illustrationAlt = "Megaphone Illustration symbolizing digital marketing outreach",
  title = "Navigating the digital landscape for success",
  tagline = "Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.",
  ctaText = "Book a consultation",
  ctaAction = () => console.log('Get Started clicked'),
}) {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>{title}</h1>
          <p>{tagline}</p>
          <Button text={ctaText} onClick={ctaAction} />
        </div>

        <div className="hero-image">
          <img 
            src={illustrationSrc} 
            alt={illustrationAlt} 
            className="hero-illustration"
            loading="lazy"
          />
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="client-logos-bar">
    
        <div className="client-logos-container">
          {logos.map((logo, index) => (
            <img 
              key={index} 
              src={logo.src} 
              alt={logo.alt} 
              className="client-logos" 
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Hero;
