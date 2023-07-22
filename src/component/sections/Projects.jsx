import React from "react";
import "../../style/Projects.css";

const Projects = () => {
  const projectDemos = [
    {
      title: "Project 1",
      demoUrl: "https://subtle-begonia-924915.netlify.app",
    },
    {
      title: "Project 2",
      demoUrl: "https://main--comforting-pegasus-ac80a0.netlify.app/",
    },
    // Add more project demos as needed
  ];

  return (
    <div className="project-demos">
      <h2>Project Demos</h2>
      {projectDemos.map((project, index) => (
        <div key={index} className="project-demo">
          <h3>{project.title}</h3>
          <iframe
            title={project.title}
            src={project.demoUrl}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default Projects;
