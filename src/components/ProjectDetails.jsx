import React from 'react';
import './ProjectDetails.css';

const ProjectDetails = ({ name, description, technologies, liveLink, githubLink, thumbnail }) => {
  
  function handleBack() {
    setBtnActive(false);
  }

  return (
    <div className='project-detail-box'>
     
      <div className="project-detail-header">
        <img src={thumbnail} alt={name} className="project-detail-image" />
        <h1>{name}</h1>
      </div>

      <div className="project-detail-description">
        <p>{description}</p>
      </div>

      <div className="project-detail-technologies">
        <strong>Technologies:</strong>
        <p>{technologies.join(', ')}</p>
      </div>

      <div className="project-detail-links">
        <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Project</a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
    </div>
  );
};

export default ProjectDetails;
