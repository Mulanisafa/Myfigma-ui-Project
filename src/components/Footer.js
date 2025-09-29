import React from 'react';
import './Footer.css';

// Import your icons
import Icon2 from '../assets/Icon (2).svg';
import FacebookIcon from '../assets/Social icon.svg';
import TwitterIcon from '../assets/Social icon (1).svg';
import InstagramIcon from '../assets/Social icon (2).svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={Icon2} alt="icon2" className="footer-icon" />
          Positivus
        </div>

        <nav className="footer-nav">
          <ul className="footer-links">
            <li><a href="/#about-us">About us</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#use-cases">Use Cases</a></li>
            <li><a href="/#pricing">Pricing</a></li>
            <li><a href="/#blog">Blog</a></li>
          </ul>

          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={TwitterIcon} alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={InstagramIcon} alt="Instagram" />
            </a>
          </div>
        </nav>
      </div>

      {/* Contact Section with Right Block */}
      <div className="footer-contact-wrapper">
        <div className="footer-contact">
          <button className="contact-btn">Contact Us</button>
          <div className="footer-info">
            <p>Email To: <a href="mailto:info@positivus.com">info@positivus.com</a></p>
            <p>Phone: 555-567-9801</p>
            <p>Address: 1234 Main St</p>
            <p>Moonstone City, Stardust State 12345</p>
          </div>
        </div>

        {/* Right side small buttons block */}
        <div className="footer-right-buttons">
          <button className="small-btn">Mail</button>
          <button className="small-btn">Subscribe to News</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Positivus. All Rights Reserved.</p>
        <p><a href="/#privacy-policy">Privacy Policy</a></p>
      </div>
    </footer>
  );
}

export default Footer;
