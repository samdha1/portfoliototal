import React from 'react';

const About = () => {
  return (
    <div className="section">
      <h2>Education</h2>
      <div className="grid grid-2">
        <div className="card">
          <h3>National Institute of Technology, Warangal</h3>
          <p className="sub-text">2024 - Present</p>
          <p>Bachelor of Technology — Computer Science and Engineering</p>
          <p><strong>CGPA:</strong> 9.07 / 10</p>
        </div>
        <div className="card">
          <h3>Narayana Junior College, Nallakunta, Hyderabad</h3>
          <p className="sub-text">2022 - 2024</p>
          <p>12th Boards — Science Stream (MPC)</p>
          <p><strong>Percentage:</strong> 96.3%</p>
        </div>
      </div>

      <h2 style={{ marginTop: '2rem' }}>Experience</h2>
      <div className="card">
        <h3>Executive Member</h3>
        <p className="sub-text">Software Development Club, NIT Warangal • 2024 - Present</p>
        <p>Organizing workshops, coding competitions, and collaborative projects.</p>
      </div>

      <h2 style={{ marginTop: '2rem' }}>Skills</h2>
      <div className="grid grid-2">
        <div className="card">
          <h3>Languages</h3>
          <p>C++, Java, JavaScript, HTML, CSS</p>
        </div>
        <div className="card">
          <h3>Frameworks</h3>
          <p>React.js, Spring Boot</p>
        </div>
        <div className="card">
          <h3>Tools & IDEs</h3>
          <p>Git, GitHub, VS Code</p>
        </div>
        <div className="card">
          <h3>Core Subjects</h3>
          <p>DSA, DAA, OOP, OS, DBMS</p>
        </div>
      </div>
    </div>
  );
};

export default About;