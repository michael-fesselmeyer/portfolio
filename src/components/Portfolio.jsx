import React from "react";
import Donowave from "../assets/images/donowave.png";
import Dogfriends from "../assets/images/dogfriends.png";
import Travelauth from "../assets/images/travelauth.png";
import Historytrivia from "../assets/images/historytrivia.png";
import { FaGithub } from "react-icons/fa";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div>
      <div className="project-container">
        <div className="project">
          <a href="https://donowave.netlify.app/" className="project-link">
            <img
              src={Donowave}
              alt="DonoWave Fundraising App"
              className="project-image"
            />
            <div className="project-description">
              <h3>DonoWave App</h3>
              <p>
                Secure React app with Django, PostgreSQL, Metamask, and custom
                crowdfunding.
              </p>
              <a
                href="https://github.com/lschmidtfellner/Donowave-Frontend"
                className="github-link-button"
              >
                <FaGithub className="github-icon" /> GitHub Repo
              </a>
            </div>
          </a>
        </div>

        <div className="project">
          <a
            href="https://frontend-app-dog-friends-git-merged-code-backup-elijahw.vercel.app/"
            className="project-link"
          >
            <img
              src={Dogfriends}
              alt="Dog Friends' Social Media"
              className="project-image"
            />
            <div className="project-description">
              <h3>DogFriends App</h3>
              <p>Social Media App Designed for Dogs and Dog-lovers</p>
              <a
                href="https://github.com/1ElijahW/Frontend-App-DogFriends"
                className="github-link-button"
              >
                <FaGithub className="github-icon" /> GitHub Repo
              </a>
            </div>
          </a>
        </div>

        <div className="project">
          <a
            href="https://unique-figolla-fb8e99.netlify.app/"
            className="project-link"
          >
            <img
              src={Travelauth}
              alt="JSON Web Token Authentication"
              className="project-image"
            />
            <div className="project-description">
              <h3>JWT Authentication Demo</h3>
              <p>
                Demonstration of JSON web tokens for authentication purposes
              </p>
              <a
                href="https://github.com/michael-fesselmeyer/travel-destination-frontend"
                className="github-link-button"
              >
                <FaGithub className="github-icon" /> GitHub Repo
              </a>
            </div>
          </a>
        </div>

        <div className="project">
          <a
            href="https://thriving-sfogliatella-d0b989.netlify.app/"
            className="project-link"
          >
            <img
              src={Historytrivia}
              alt="History Trivia"
              className="project-image"
            />
            <div className="project-description">
              <h3>History Trivia</h3>
              <p>Historical trivia game with high score list</p>
              <a
                href="https://github.com/michael-fesselmeyer/game"
                className="github-link-button"
              >
                <FaGithub className="github-icon" /> GitHub Repo
              </a>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
