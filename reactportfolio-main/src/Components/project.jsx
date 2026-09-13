import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Skill from './skill';

const Project = ({ id, title, description, techStack, link }) => {
  // Independent state scoped per project card instance
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="card project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      
      <p className="tech-stack-container">
        <strong>Tech Stack: </strong>
        {techStack.map((tech, index) => (
          /* Level 2 Prop Drilling: project passes individual tech down to Skill */
          <Skill key={index} tech={tech} />
        ))}
      </p>

      <div className="card-actions">
        <button 
          className="btn-secondary" 
          onClick={() => setShowDetails(prev => !prev)}
        >
          {showDetails ? 'Hide Quick View' : 'Quick Details'}
        </button>

        <Link to={`/projects/${id}`} className="btn-primary">
          View Details →
        </Link>
      </div>

      {showDetails && (
        <div className="quick-view">
          <p><strong>GitHub Link:</strong> <a href={link} target="_blank" rel="noreferrer">{link}</a></p>
          <p><strong>Total Frameworks/Tools:</strong> {techStack.length}</p>
        </div>
      )}
    </div>
  );
};

export default Project;