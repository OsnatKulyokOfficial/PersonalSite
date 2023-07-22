/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "../../style/Education.css";
import universityLogo1 from "../../images/google.png";
import universityLogo2 from "../../images/barIlan.png";
import universityLogo3 from "../../images/microsoft.png";
import SchoolImage1 from "../../images/certificate.jpg";
import SchoolImage3 from "../../images/MCT.jpeg";

const Education = () => {
  return (
    <div>
      <div className="education-container">
        <h2>Education Background</h2>
        <table className="education-table">
          <tbody>
            <tr>
              <td className="logo-td">
                <img
                  src={universityLogo1}
                  alt="University Logo"
                  className="university-logo"
                />
              </td>
              <td className="narrow-td">
                <p>
                  FULLSTACK WEB DEVELOPMENT IS AN INNOVATIVE PROGRAM THAT
                  PROVIDES ACADEMIC & PRACTICAL TRAINING IN FOLLOWING FIELDS:
                  Computer Science Fundamentals, Data Structures & Algorithms,
                  NodeJS, React, JavaScript, Python.
                </p>
              </td>
              <td className="certificate-td">
                <a href="{certificate1}" download className="certificate-link">
                  <img
                    src={SchoolImage1}
                    alt="Certificate"
                    className="certificate-icon"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-download"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                  </svg>
                </a>
              </td>
            </tr>
            <tr>
              <td className="logo-td">
                <img
                  src={universityLogo2}
                  alt="University Logo"
                  className="university-logo"
                />
              </td>
              <td className="narrow-td">
                <p>PREPARATORY SCHOOL FOR EXACT SCIENCES & ENGINEERING</p>
              </td>
              <td className="certificate-td">
                <a href="{certificate2}" download className="certificate-link">
                  <img
                    src={universityLogo3}
                    alt="Certificate"
                    className="certificate-icon"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-download"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                  </svg>
                </a>
              </td>
            </tr>
            <tr>
              <td className="logo-td">
                <img
                  src={universityLogo3}
                  alt="University Logo"
                  className="university-logo"
                />
              </td>
              <td className="narrow-td">
                <p>ELECTRONICS & ELECTRICAL THEORY</p>
              </td>
              <td className="certificate-td">
                <a href="{certificate3}" download className="certificate-link">
                  <img
                    src={SchoolImage3}
                    alt="Certificate"
                    className="certificate-icon"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-download"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                  </svg>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="right-navbar">
          <ul>
            <li>JavaScript, TypeScript</li>
            <li>ReactJS</li>
            <li>Responsive Design</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li>

            <li className="space"></li>

            <li>Python</li>
            <li>Node.js</li>
            <li>ExpressJS</li>
            <li>AxiosJS</li>
            <li>Proxy</li>
            <li>Cors</li>
            <li>PHP</li>

            <li className="space"></li>

            <li>SQL, MySQL</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>

            <li className="space"></li>

            <li>Postman</li>
            <li>Docker</li>
            <li>RabbitMQ</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
