import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './QVista.png'; // Adjust the path as needed

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img
          src={logo}
          alt="QVista Logo"
          style={{ height: '28px', width: '28px', objectFit: 'contain' }}
        />
        QVista
      </div>

      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={handleLinkClick}
        >
          User 
        </NavLink>
        <NavLink
          to="/queue"
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={handleLinkClick}
        >
          Queue Display
        </NavLink>
        <NavLink
          to="/admin"
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={handleLinkClick}
        >
          Admin Login
        </NavLink>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
