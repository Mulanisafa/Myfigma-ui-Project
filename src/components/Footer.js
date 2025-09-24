import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">Positivus</div>
        <nav className="footer-nav">
          <ul>
            <li><a href="/#about-us">About us</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#use-cases">Use Cases</a></li>
            <li><a href="/#pricing">Pricing</a></li>
            <li><a href="/#blog">Blog</a></li>
          </ul>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Positivus. All Rights Reserved.</p>
        <p><a href="/#privacy-policy">Privacy Policy</a></p>
      </div>
    </footer>
  );
}

export default Footer;