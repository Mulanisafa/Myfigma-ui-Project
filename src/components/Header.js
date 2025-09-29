import React from "react";
import "./Header.css";
import { ReactComponent as LogoIcon } from "../assets/Icon.svg";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <LogoIcon className="logo-icon" />
        <h1 className="logo-text">Positivus</h1>
      </div>

      <nav>
        <ul className="nav-links">
          <li><a href="#about">About us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#usecases">Use Cases</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#blog">Blog</a></li>
          <li>
            <button 
              className="quote-btn"
              onClick={() => console.log('Request a quote clicked')}
            >
              Request a quote
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
