import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaEnvelope, FaLinkedin, FaFileDownload } from 'react-icons/fa';
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
        <a href="https://docs.google.com/document/d/1kN63pkJlczyeRlNiB_-dk0_OKvhv2BB9YDiIZKF5eig/edit" target="_blank" rel="noreferrer">
          <FaFileDownload />
        </a>
      </div>
      <div className="navbar-links">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/portfolio">Portfolio</Link>
      </div>
    </div>
  );
}

export default Navbar;
