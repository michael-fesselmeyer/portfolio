import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar App">
      {/* Add "App" class here */}
      <div className="navbar-icons">
        <a
          href="https://github.com/michael-fesselmeyer"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="github-icon-navbar" />{" "}
          {/* Add a specific class for GitHub icon */}
        </a>
        <a href="mailto:michael.fesselmeyer@gmail.com">
          <FaEnvelope className="envelope-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/michael-fesselmeyer/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="linkedin-icon" />
        </a>
        <a
          href="https://docs.google.com/document/d/1kN63pkJlczyeRlNiB_-dk0_OKvhv2BB9YDiIZKF5eig/edit"
          target="_blank"
          rel="noreferrer"
        >
          <FaFileDownload className="filedownload-icon" />
        </a>
      </div>
      <div className="navbar-links">
        <Link to="/" data-hover-text="Home">Home</Link>
        <Link to="/about" data-hover-text="About">About</Link>
        <Link to="/contact" data-hover-text="Contact">Contact</Link>
        <Link to="/portfolio" data-hover-text="Portfolio">Portfolio</Link>
      </div>
    </div>
  );
}

export default Navbar;
