import React, { useState } from 'react';
import './ProjectCard.css';
import ProjectDetails from './ProjectDetails';

const ProjectCard = (props) => {
  const [BtnActive, setBtnActive] = useState(false);

  // Function to handle mouse enter and leave on the Main-box (parent container)
  const handleMouseEnter = () => {
    setBtnActive(true);
  };

  const handleMouseLeave = () => {
    setBtnActive(false);
  };

  return (
    <div 
      className="Main-box" 
      onMouseEnter={handleMouseEnter} // Handle hover over the entire box
      onMouseLeave={handleMouseLeave} // Handle hover leave from the entire box
    >
      {/* Conditional rendering: If BtnActive is true, show ProjectDetails, otherwise show Card */}
      {BtnActive ? (
        <ProjectDetails 
          
          name={props.name} 
          description={props.description} 
          technologies={props.technologies}
          liveLink={props.liveLink}
          githubLink={props.githubLink}
          thumbnail={props.thumbnail} 
        />
      ) : (
        <div className="Card">
          <img src={props.thumbnail} alt={props.name} className="project-image" />
          <div className="project-name-box">
            <h1>{props.name}</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
