import React from 'react';
import './ProjectCard.css';

const ProjectCard = (props) => {
  return (
    <div className="Main-box">
      <div className="Card">
        <img src={props.thumbnail} alt={props.name} className="project-image" />
        <div className="project-content">
          <h1 className="project-title">{props.name}</h1>
          <p className="project-description">{props.description}</p>
          <div className="project-technologies">
            {props.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
          <div className="project-links">
            <a href={props.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
            <a href={props.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
