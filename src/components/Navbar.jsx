import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-icons">
        <a href="https://github.com/michael-fesselmeyer" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:michael.fesselmeyer@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/michael-fesselmeyer/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <div className="navbar-links">Links</div>
    </div>
  );
}

export default Navbar;
