import React from "react";
import "../../style/Teaching.css";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import profileImage from "../../images/me.jpg";

const Recommended = () => {
  return (
    <div className="recommended-container">
      <div className="left-section">
        {/* Carousel of recommended students */}
        {/* Add your carousel component here */}
      </div>

      <div className="right-section">
        <div className="profile-section">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <div className="services-text">
            <p>Text explaining about your services</p>
          </div>
        </div>

        <div className="icon-table">
          <div className="icon-cell">
            <FaGithub />
            <p>Why GitHub is important</p>
          </div>
          <div className="icon-cell">
            <FaLinkedin />
            <p>Why LinkedIn is important</p>
          </div>
          <div className="icon-cell">
            <FaFilePdf />
            <p>Why CV is important</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
