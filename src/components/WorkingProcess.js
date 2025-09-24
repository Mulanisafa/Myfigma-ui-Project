import React from 'react';
import './WorkingProcess.css';

function WorkingProcess() {
  return (
    <section className="working-process-section">
      <div className="section-header">
        <h2>Our Working Process</h2>
        <p>Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>
      <div className="process-list">
        <div className="process-step">
          <div className="process-step-header">
            <span>01</span>
            <h3>Consultation</h3>
          </div>
          <p className="process-step-description">During the initial consultation, we'll discuss your business goals and objectives, target audience, and current marketing efforts...</p>
        </div>
        <div className="process-step">
          <div className="process-step-header">
            <span>02</span>
            <h3>Research and Strategy Development</h3>
          </div>
        </div>
        {/* Add more steps as needed */}
      </div>
    </section>
  );
}

export default WorkingProcess;