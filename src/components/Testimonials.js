import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="section-header">
        <h2>Testimonials</h2>
      </div>

      {/* Outer frame around the slider */}
      <div className="testimonial-frame">
        <div className="testimonial-slider-outer">
          <div className="testimonial-slider-inner">
            {/* Testimonial card 1 */}
            <div className="testimonial-card">
              <p>
                "We have been working with Positivus for the past year and have seen a significant increase in our online presence and sales."
              </p>
              <h4>John Smith</h4>
              <span>Managing Director at XYZ Corp</span>
            </div>

            {/* Testimonial card 2 */}
            <div className="testimonial-card">
              <p>
                "The team at Positivus is incredibly professional and responsive. They helped us develop a comprehensive digital strategy that has paid off."
              </p>
              <h4>Jane Doe</h4>
              <span>Marketing Manager at ABC Inc</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
