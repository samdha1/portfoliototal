import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ theme, toggleTheme }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Resize listener with cleanup function to avoid memory leaks
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="nav" aria-label="Main Navigation">
      <div className="nav-container">
        <button 
          className="mobile-toggle" 
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-expanded={isMobileOpen}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <div className={`nav-links ${isMobileOpen ? 'open' : ''}`}>
          <NavLink to="/home" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>About</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Education & Exp</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Contact</NavLink>
          
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;