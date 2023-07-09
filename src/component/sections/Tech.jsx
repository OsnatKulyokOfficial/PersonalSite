import React, { useState } from "react";
import "../../style/Tech.css"; // Import the CSS file for styling
import Education from "./Education"; // Import the Education component

function TechNavigation() {
  const [activeTab, setActiveTab] = useState("education");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="navigation-container">
        {/* <div className="logo">
          <img src={techLogo} alt="Logo" />
        </div> */}
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
        </div>
      </div>
      <div className="content">
        {activeTab === "education" && <EducationComponent />}
        {activeTab === "private-teaching" && <PrivateTeachingComponent />}
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
      <h2>Private Teaching</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      {/* Add more content as needed */}
    </div>
  );
}

export default TechNavigation;
