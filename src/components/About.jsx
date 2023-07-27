import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-section">
      <h2>About</h2>
      <p>
        I am a fullstack software engineer specializing in the MERN stack and also work with Django
        backend and React frontend. Currently, I am on a journey to become a skilled coder, leveraging
        my background in the service industry and commitment to community service as a volunteer firefighter.
      </p>
      <p>
        In General Assembly's bootcamp, I have been learning JavaScript, React, CSS, Node, and Python for web development.
        I find joy in tackling complex problems and aim to create innovative and user-friendly web applications.
        I am excited about contributing to cutting-edge technologies.
      </p>
      <p>
        With over 10 years of service industry experience, I excel in providing exceptional customer experiences
        in fast-paced environments. My work is defined by effective communication, adaptability, and high-quality results.
      </p>
      <p>
        As a volunteer firefighter, I've learned valuable skills such as teamwork, quick thinking, and composure
        in high-pressure situations. These skills enhance my coding practice, fostering collaboration and problem-solving.
      </p>
      <p>
        Committed to continuous growth, I seek opportunities to expand knowledge and stay up-to-date with industry advancements.
        I thrive in dynamic environments that encourage creativity, collaboration, and professional development.
      </p>
      <p>
        If you are seeking a dedicated and versatile coder with a passion for innovation, let's connect.
        I believe my skills, service industry background, and commitment to the community can contribute to your organization's success.
        Reach me on <a href="https://www.linkedin.com/in/michael-fesselmeyer/">LinkedIn</a> or via email at <a href="mailto:michael.fesselmeyer@gmail.com">michael.fesselmeyer@gmail.com</a>.
        Let's discuss potential collaborations in coding.
      </p>
      <p>
        Github: <a href="https://github.com/michael-fesselmeyer?tab=repositories">https://github.com/michael-fesselmeyer?tab=repositories</a>
      </p>

      {/* Insert the Skills information below */}
      <div className="skills-section">
        <h2>Skills</h2>

        <div>
          <h3>HTML</h3>
          <p>Proficient in writing semantic and accessible HTML code.</p>
        </div>

        <div>
          <h3>CSS</h3>
          <p>Skilled in styling websites using CSS, including CSS3 features.</p>
        </div>

        <div>
          <h3>Javascript</h3>
          <p>Experienced in building interactive and dynamic web applications with JavaScript.</p>
        </div>

        <div>
          <h3>React</h3>
          <p>Proficient in building modern web applications using React.js library.</p>
        </div>

        <div>
          <h3>Express</h3>
          <p>Knowledgeable in creating web servers using Express framework.</p>
        </div>

        <div>
          <h3>Node</h3>
          <p>Experienced in server-side development using Node.js.</p>
        </div>

        <div>
          <h3>MongoDB</h3>
          <p>Familiar with NoSQL databases, particularly MongoDB.</p>
        </div>

        <div>
          <h3>SQL</h3>
          <p>Skilled in working with relational databases and writing SQL queries.</p>
        </div>

        <div>
          <h3>Django</h3>
          <p>Proficient in building web applications using Django framework.</p>
        </div>

        <div>
          <h3>Github</h3>
          <p>Experienced in version control and collaborative development using GitHub.</p>
        </div>

        <div>
          <h3>Python</h3>
          <p>Proficient in Python programming language.</p>
        </div>
      </div>
      {/* End of Skills section */}
    </div>
  );
}
