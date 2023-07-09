/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import EducationFooter from "../sections/EducationFooter";
import "../../style/Education.css";
import SchoolImage1 from "../../images/certificate.jpg";
import SchoolImage2 from "../../images/finishSchool.jpg";
import SchoolImage3 from "../../images/schoolLogo.jpg";
import ProjectImage1 from "../../images/computeOs.jpg";
import ProjectImage2 from "../../images/computeOs.jpg";
import ProjectImage3 from "../../images/computeOs.jpg";
import ProjectImage4 from "../../images/computeOs.jpg";

const Education = () => {
  return (
    <div>
      <div className="education-container">
        <div className="education-section">
          <div className="school-info">
            <h2>Google & Reichman Tech School</h2>
            <p>
              Full Stack Web Development is an innovative program that provides
              academic and practical training in following fields: Computer
              science fundamentals, Data structures and algorithms, NodeJS,
              React, JavaScript, Python.
            </p>
          </div>
          <div className="school-images">
            <img src={SchoolImage1} alt="School Image 1" />
            <img src={SchoolImage2} alt="School Image 2" />
            <img src={SchoolImage3} alt="School Image 3" />
          </div>
        </div>
        <div className="project-section">
          <h2>My Projects</h2>
          <div className="project-windows">
            <div className="project-window">
              <img src={ProjectImage1} alt="Project 1" />
              <h3>Search Book App</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vitae metus lectus.
              </p>
            </div>
            <div className="project-window">
              <img src={ProjectImage2} alt="Project 2" />
              <h3>Tic-Tac-Toe Telegram Bot</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vitae metus lectus.
              </p>
            </div>
            <div className="project-window">
              <img src={ProjectImage3} alt="Project 3" />
              <h3>PayMent Form QAtests</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vitae metus lectus.
              </p>
            </div>
            <div className="project-window">
              <img src={ProjectImage4} alt="Project 4" />
              <h3>Project 4</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vitae metus lectus.
              </p>
            </div>
          </div>
        </div>

        <div className="right-navbar">
          <ul>
            <p>FRONTEND DEVELOPMENT:</p>
            <li>JavaScript, TypeScript</li>
            <li>ReactJS</li>
            <li>Responsive Design</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>scss</li>

            <p>BACKEND DEVELOPMENT:</p>
            <li>Python</li>
            <li>Node.js</li>
            <li>ExpressJS</li>
            <li>AxiosJS</li>
            <li>Proxy</li>
            <li>Cors</li>
            <li>PHP</li>

            <p>DATABASES:</p>
            <li>SQL, MySQL</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>

            <p>ADDITIONAL TOOLS & TECHNOLOGIES:</p>
            <li>Postman</li>
            <li>Docker</li>
            <li>RabbitMQ</li>
          </ul>
        </div>
      </div>
      <EducationFooter />
    </div>
  );
};

export default Education;
