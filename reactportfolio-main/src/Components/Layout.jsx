import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './nav';

const Layout = ({ theme, toggleTheme }) => {
  return (
    <div className="app-layout">
      <header className="hero-banner">
        <div className="hero-content">
          <div className="profile-img-container">
            <img src="/pf.jpeg" alt="Sameer Ravindra Dhawas" className="profile-img" />
          </div>
          <h1>Sameer Ravindra Dhawas</h1>
          <p className="hero-subtitle">
            3rd Year B.Tech Student | Web Developer | Competitive Programmer
          </p>
        </div>
      </header>

      <Nav theme={theme} toggleTheme={toggleTheme} />

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
