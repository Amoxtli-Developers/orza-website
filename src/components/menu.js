import React, { useState } from 'react';
import "../components/menu.css"; 

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para abrir el menu
  const openMenu = () => setIsOpen(true);

  // Función para cerrar el menu
  const closeMenu = () => setIsOpen(false);

  return (
    <div className={`menu-container ${isOpen ? 'open' : ''}`}>
      <div className="menu-header">
        <h1>OZRA</h1>
        <div className="menu-button-container">
          <button 
            className="menu-button" 
            onMouseEnter={openMenu} 
            onMouseLeave={closeMenu}
          >
            Home
          </button>
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


