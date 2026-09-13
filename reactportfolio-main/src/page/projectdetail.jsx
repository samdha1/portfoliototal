import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const API_BASE = 'http://localhost:5000/api';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`${API_BASE}/projects/${projectId}`)
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404) {
            throw new Error("Project not found");
          }
          throw new Error("Failed to fetch project details");
        }
        return res.json();
      })
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [projectId]);

  if (loading) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading project details...</div>;
  }

  if (error) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h3 style={{ color: 'red' }}>{error}</h3>
        <Link to="/projects">← Back to Projects</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/projects">← Back to Projects</Link>
      <h1 style={{ marginTop: '1rem' }}>{project.title}</h1>
      <p style={{ margin: '1.5rem 0', lineHeight: '1.6' }}>{project.description}</p>
      <div>
        <strong>Tech Stack: </strong>
        {project.techStack?.join(', ')}
      </div>
      {project.link && (
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ display: 'inline-block', marginTop: '1rem' }}
        >
          View Project
        </a>
      )}
    </div>
  );
}