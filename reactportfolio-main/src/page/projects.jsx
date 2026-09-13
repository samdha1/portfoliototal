import React, { useState, useEffect } from 'react';
import ProjectCard from '../Components/project';

const API_BASE = 'http://localhost:5000/api';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`${API_BASE}/projects`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load projects (Status: ${res.status})`);
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          setProjects([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Unable to connect to backend server or fetch project data.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading projects...</div>;
  }

  if (error) {
    return <div style={{ padding: '2rem', color: 'red', textAlign: 'center' }}>{error}</div>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>My Projects</h2>
      {projects.length === 0 ? (
        <p>No projects available.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {projects.map((proj) => (
            <ProjectCard key={proj.id || proj._id} project={proj} {...proj} />
          ))}
        </div>
      )}
    </div>
  );
}