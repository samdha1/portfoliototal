import React, { useState, useEffect } from 'react';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return (
      <div className="loading-state">
        <div className="spinner"></div>
        <p>Loading Profile...</p>
      </div>
    );
  }

  return (
    <section className="section">
      <h2>About</h2>
      <p className="about-text">
        I am a Computer Science undergraduate at NIT Warangal with a strong interest in software
        development and problem solving. I have a solid foundation in Data Structures and Algorithms using C++
        and enjoy building scalable applications using technologies like Java, Spring Boot, ReactJS, and databases.
        I have worked on full-stack projects involving authentication, APIs, AI integration, and database design.
      </p>
    </section>
  );
};

export default Home;