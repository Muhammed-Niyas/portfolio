import React from "react";
import "./Projects.css";

const Projects = () => {
  const githubUrl = "https://github.com/Niyasperumannil"; // 🔗 replace with your GitHub link

  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-description">
          <div className="divider"></div>
          <p>
            A collection of my favorite projects I’ve designed and developed recently. 
            Feeling great while sharing them here.
          </p>
        </div>
      </div>

      <div className="github-link-container">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
        >
          <i className="fab fa-github"></i> View My GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
