import React from "react";
import "./About.css";
import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiDjango, SiGithub } from "react-icons/si";

export default function About() {
  return (
    <div className="about-page">
      <div className="skills-section">
        <h2>Skills</h2>
        <div>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
            title="HTML"
          >
            <FaHtml5 className="html-icon" />
          </a>
        </div>
        <div>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
            title="CSS"
          >
            <FaCss3 className="css-icon" />
          </a>
        </div>
        <div>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
            title="JavaScript"
          >
            <FaJsSquare className="js-icon" />
          </a>
        </div>
        <div>
          <a
            href="https://reactjs.org/docs/getting-started.html"
            target="_blank"
            rel="noopener noreferrer"
            title="React"
          >
            <FaReact className="react-icon" />
          </a>
        </div>
        <div>
          <a
            href="https://expressjs.com/en/5x/api.html"
            target="_blank"
            rel="noopener noreferrer"
            title="Express"
          >
            <SiExpress className="express-icon" />
          </a>
        </div>
        <div>
          <a
            href="https://nodejs.org/en/docs/"
            target="_blank"
            rel="noopener noreferrer"
            title="Node.js"
          >
            <FaNodeJs className="node-icon" />
          </a>
        </div>
        <div>
          <a
            href="https://docs.mongodb.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="MongoDB"
          >
            <DiMongodb className="mongodb-icon" />
          </a>
        </div>
        <div>
          <a
            href="https://www.postgresql.org/docs/"
            target="_blank"
            rel="noopener noreferrer"
            title="SQL"
          >
            <FaDatabase className="sql-icon" />
          </a>
        </div>
        <div>
          <a
            href="https://docs.djangoproject.com/en/stable/"
            target="_blank"
            rel="noopener noreferrer"
            title="Django"
          >
            <SiDjango className="django-icon" />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/features"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <SiGithub className="github-about-icon" />
          </a>
        </div>
        <div>
          <a
            href="https://www.python.org/doc/"
            target="_blank"
            rel="noopener noreferrer"
            title="Python"
          >
            <FaPython className="python-icon" />
          </a>
        </div>
      </div>
      <div className="about-section">
        <h2>About</h2>
        <p>
          I am a fullstack software engineer specializing in the MERN stack and
          also work with Django backend and React frontend. Currently, I am on a
          journey to become a skilled coder, leveraging my background in the
          service industry and commitment to community service as a volunteer
          firefighter.
        </p>
        <p>
          In General Assembly's bootcamp, I have been learning JavaScript,
          React, CSS, Node, and Python for web development. I find joy in
          tackling complex problems and aim to create innovative and
          user-friendly web applications. I am excited about contributing to
          cutting-edge technologies.
        </p>
        <p>
          With over 10 years of service industry experience, I excel in
          providing exceptional customer experiences in fast-paced environments.
          My work is defined by effective communication, adaptability, and
          high-quality results.
        </p>
        <p>
          As a volunteer firefighter, I've learned valuable skills such as
          teamwork, quick thinking, and composure in high-pressure situations.
          These skills enhance my coding practice, fostering collaboration and
          problem-solving.
        </p>
        <p>
          Committed to continuous growth, I seek opportunities to expand
          knowledge and stay up-to-date with industry advancements. I thrive in
          dynamic environments that encourage creativity, collaboration, and
          professional development.
        </p>
        <p>
          If you are seeking a dedicated and versatile coder with a passion for
          innovation, let's connect. I believe my skills, service industry
          background, and commitment to the community can contribute to your
          organization's success. Reach me on{" "}
          <a href="https://www.linkedin.com/in/michael-fesselmeyer/">
            LinkedIn
          </a>{" "}
          or via email at{" "}
          <a href="mailto:michael.fesselmeyer@gmail.com">
            michael.fesselmeyer@gmail.com
          </a>
          . Let's discuss potential collaborations in coding.
        </p>
        <p>
          Github:{" "}
          <a href="https://github.com/michael-fesselmeyer?tab=repositories">
            https://github.com/michael-fesselmeyer?tab=repositories
          </a>
        </p>

        
        {/* End of Skills section */}
      </div>
    </div>
  );
}
