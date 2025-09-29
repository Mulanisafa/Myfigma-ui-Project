import React from 'react';
import './Services.css';
import IllustrationSEO from '../assets/Illustration.svg';
import IllustrationPPC from '../assets/Illustration (1).svg';
import ArrowIcon from '../assets/Icon (1).svg'; // Import your small icon

function Services() {
  return (
    <section className="services-section">
      <div className="section-header">
        <h2>Services</h2>
        <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online.</p>
      </div>

      <div className="services-grid">
        <div className="service-card light-bg">
          <div className="card-content">
            <h3>Search Engine Optimization</h3>
            <p className="learn-more">
              <img src={ArrowIcon} alt="Arrow Icon" className="learn-icon" /> Learn more
            </p>
          </div>
          <img src={IllustrationSEO} alt="SEO Illustration" />
        </div>

        <div className="service-card green-bg">
          <div className="card-content">
            <h3>Pay-Per-Click Advertising</h3>
            <p className="learn-more">
              <img src={ArrowIcon} alt="Arrow Icon" className="learn-icon" /> Learn more
            </p>
          </div>
          <img src={IllustrationPPC} alt="PPC Illustration" />
        </div>
      </div>
    </section>
  );
}

export default Services;
