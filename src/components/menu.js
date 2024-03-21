import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={`menu-container ${isOpen ? 'open' : ''}`}>
      <div className={`menu-header ${isOpen ? 'open' : ''}`}>
        <h1>OZRA</h1>
        <div className="menu-button-container" onClick={toggleMenu}>
          {isOpen ? (
            <>
              <span>Close</span>
              <button className="menu-button"></button>
            </>
          ) : (
            <>
              <span>Home</span>
              <button className="menu-button"></button>
            </>
          )}
        </div>
      </div>
      {isOpen && (
        <>
          <div className="menu-content">
            <ul className="menu-list">
            <li className="menu-item">Home</li>
              <li className="menu-item">Vision</li>
              <li className="menu-item">Team</li>
              <li className="menu-item">Journey</li>
            </ul>
          </div>
          <div className="menu-footer">
            <span>Privacy & Terms</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Menu;

