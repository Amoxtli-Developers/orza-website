import React, { useState } from "react";
import "./Menu.css";
import logoSrc from "../../assets/images/logo/orza-logo.png"; // Make sure the path is correct
import { Box } from "@mui/material";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={`menu-container ${isOpen ? "open" : ""}`}>
      <div className={`menu-header ${isOpen ? "open" : ""}`}>
        <Box
          component="img"
          src={logoSrc}
          alt="OZ___RA Logo"
          sx={{
            width: { xs: 150, sm: "auto" },
            height: { xs: "auto", sm: 100 },
            maxWidth: "100%",
            marginLeft: 3,
          }}
        />
        <div className="menu-button-container" onClick={toggleMenu}>
          {isOpen ? (
            <>
              <span>Close</span>
              <button className="menu-button"></button>
            </>
          ) : (
            <>
              <span style={{fontSize: "16px"}}>Home</span>
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
