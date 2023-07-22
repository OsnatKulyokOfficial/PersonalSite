import React, { useState } from "react";
import "../../style/Tech.css"; // Import the CSS file for styling
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import the icons
import Education from "./Education"; // Import the Education component
import Teaching from "./Teaching";
import Projects from "./Projects"; // Import the Projects component

function TechNavigation() {
  const [activeTab, setActiveTab] = useState("education");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="navigation-container">
        <div className="tabs">
          <div
            className={`tab ${activeTab === "education" ? "active" : ""}`}
            onClick={() => handleTabChange("education")}
          >
            Education
          </div>

          <div
            className={`tab ${
              activeTab === "private-teaching" ? "active" : ""
            }`}
            onClick={() => handleTabChange("private-teaching")}
          >
            Private Teaching
          </div>

          <div
            className={`tab ${activeTab === "projects" ? "active" : ""}`}
            onClick={() => handleTabChange("projects")}
          >
            Projects
          </div>
        </div>

        <div className="icons-container">
          <a
            href="https://www.linkedin.com/in/osnat-kulyok/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://github.com/OsnatKulyokOfficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
        </div>
      </div>

      <div className="content">
        {activeTab === "education" && <EducationComponent />}
        {activeTab === "private-teaching" && <PrivateTeachingComponent />}
        {activeTab === "projects" && <ProjectsComponent />}
      </div>
    </>
  );
}

function EducationComponent() {
  return (
    <div className="education-component">
      {/* Display your education background and achievements */}
      {/* <h2>Education Background</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      <Education />
    </div>
  );
}

function PrivateTeachingComponent() {
  return (
    <div className="private-teaching-component">
      {/* Talk about your private teaching experience, students, and achievements */}
      <Teaching />
    </div>
  );
}

function ProjectsComponent() {
  return (
    <div className="projects-component">
      {/* Display information about your projects */}
      <h2>Projects</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Projects />
    </div>
  );
}

export default TechNavigation;
