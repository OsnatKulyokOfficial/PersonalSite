import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "../../style/EducationFooter.css";

const EducationFooter = () => {
  return (
    <footer className="footer-container">
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
    </footer>
  );
};

export default EducationFooter;
