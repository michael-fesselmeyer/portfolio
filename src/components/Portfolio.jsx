import React from "react";
import Donowave from "../assets/images/donowave.png";
import Dogfriends from "../assets/images/dogfriends.png";
import Travelauth from "../assets/images/travelauth.png";
import Historytrivia from "../assets/images/historytrivia.png";
import { FaGithub } from 'react-icons/fa';
import "./Portfolio.css";

function Portfolio() {
  return (
    <div>
      <div className="project-container">
        <div className="project">
          <h3>DonoWave Crypto-Crowdfunding App</h3>
          <div className="project-image">
            <img src={Donowave} alt="DonoWave Fundraising App" />
          </div>
          <p className="project-description">
          Secure React app with Django, PostgreSQL, Metamask, and custom cryptocurrency crowdfunding.
          </p>
          <div className="technologies-list">
            <h4>Technologies Used:</h4>
            <ul>
              <li>React.js</li>
              <li>Django</li>
              <li>PostgreSQL</li>
              <li>Metamask</li>
              <li>Web3</li>
              <li>Tailwind</li>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
            </ul>
          </div>

          <a href="https://donowave.netlify.app/" className="live-link-button">Live link to Project</a>
          <a href="https://github.com/lschmidtfellner/Donowave-Frontend" className="github-link-button">
            <FaGithub className="github-icon" /> GitHub Repo
          </a>
        </div>

        <div className="project">
          <h3>DogFriends Social Media App</h3>
          <div className="project-image">
            <img src={Dogfriends} alt="Dog Friends' Social Media" />
          </div>
          <p className="project-description">Social Media App Designed for Dogs and Dog-lovers</p>

          <div className="technologies-list">
            <h4>Technologies Used:</h4>
            <ul>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
            </ul>
          </div>

          <a href="https://frontend-app-dog-friends-git-merged-code-backup-elijahw.vercel.app/" className="live-link-button">
            Live link to Project
          </a>
          <a href="https://github.com/1ElijahW/Frontend-App-DogFriends" className="github-link-button">
            <FaGithub className="github-icon" /> GitHub Repo
          </a>
        </div>

        <div className="project">
          <h3>JSON Web Token Authentication Demonstration</h3>
          <div className="project-image">
            <img src={Travelauth} alt="JSON Web Token Authentication" />
          </div>
          <p className="project-description">Demonstration of JSON web tokens for authentication purposes</p>

          <div className="technologies-list">
            <h4>Technologies Used:</h4>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>JSON Web Tokens (JWT)</li>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
            </ul>
          </div>

          <a href="https://unique-figolla-fb8e99.netlify.app/" className="live-link-button">
            Live link to Project
          </a>
          <a href="https://github.com/michael-fesselmeyer/travel-destination-frontend" className="github-link-button">
            <FaGithub className="github-icon" /> GitHub Repo
          </a>
        </div>

        <div className="project">
          <h3>History Trivia</h3>
          <div className="project-image">
            <img src={Historytrivia} alt="History Trivia" />
          </div>
          <p className="project-description">Historical trivia game with high score list</p>

          <div className="technologies-list">
            <h4>Technologies Used:</h4>
            <ul>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>
          </div>

          <a href="https://thriving-sfogliatella-d0b989.netlify.app/" className="live-link-button">
            Live link to Project
          </a>
          <a href="https://github.com/michael-fesselmeyer/game" className="github-link-button">
            <FaGithub className="github-icon" /> GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
