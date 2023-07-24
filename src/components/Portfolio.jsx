import React from 'react';
import Donowave from '../assets/images/donowave.png'
import Dogfriends from '../assets/images/dogfriends.png'
import Travelauth from '../assets/images/travelauth.png'
import Historytrivia from '../assets/images/historytrivia.png'

function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>

      <div className="project">
        <h3>Project 1</h3>
        <img src={Donowave} alt="DonoWave Fundraising App" />
        <p>Short description for Project 1</p>
        <a href="https://donowave.netlify.app/">View Project 1</a>
        <a href="https://github.com/lschmidtfellner/Donowave-Frontend">GitHub Repo</a> {/* Add GitHub link for Project 1 */}
      </div>

      <div className="project">
        <h3>Project 2</h3>
        <img src={Dogfriends} alt="Dog Friends' Social Media" />
        <p>Short description for Project 2</p>
        <a href="https://frontend-app-dog-friends-git-merged-code-backup-elijahw.vercel.app/">View Project 2</a>
        <a href="https://github.com/1ElijahW/Frontend-App-DogFriends">GitHub Repo</a>
      </div>

      <div className="project">
        <h3>Project 3</h3>
        <img src={Travelauth} alt="JSON Web Token Authentication" />
        <p>Short description for Project 3</p>
        <a href="https://unique-figolla-fb8e99.netlify.app/">View Project 3</a>
        <a href="https://github.com/michael-fesselmeyer/travel-destination-frontend">GitHub Repo</a>
      </div>

      <div className="project">
        <h3>Project 4</h3>
        <img src={Historytrivia} alt="History Trivia" />
        <p>Short description for Project 4</p>
        <a href="https://thriving-sfogliatella-d0b989.netlify.app/">View Project 4</a>
        <a href="https://github.com/michael-fesselmeyer/game">GitHub Repo</a>
      </div>
    </div>
  );
}

export default Portfolio;
