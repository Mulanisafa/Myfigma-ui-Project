import React from 'react';
import Button from './Button';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Navigating the digital landscape for success</h1>
        <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
        <Button text="Book a consultation" onClick={() => console.log('Book consultation clicked')} />
      </div>
      <div className="hero-image">
        {/* Placeholder for the megaphone illustration */}

      </div>
    </section>
  );
}

export default Hero;