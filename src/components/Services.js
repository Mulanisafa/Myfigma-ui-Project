import React from 'react';
import './Services.css';

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
            <h3>Search engine optimization</h3>
            <p>Learn more</p>
          </div>
          {/* Illustration placeholder */}
       
        </div>
        <div className="service-card green-bg">
          <div className="card-content">
            <h3>Pay-per-click advertising</h3>
            <p>Learn more</p>
          </div>
          {/* Illustration placeholder */}
        
        </div>
      </div>
    </section>
  );
}

export default Services;