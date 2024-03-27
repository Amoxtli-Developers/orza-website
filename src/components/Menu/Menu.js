import React, { useState, useEffect } from "react";
import "./Menu.css";
import logoSrcBlack from "../../assets/images/logo/orza-logo.png";
import logoSrcWhite from "../../assets/images/logo/orza-logo-white.png";
import { Box } from "@mui/material";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonText, setButtonText] = useState("Menu");

  const toggleMenu = () => {
    const menuContainer = document.querySelector('.menu-container');
    const btn = document.querySelector('.menu-button');
    const rect = btn.getBoundingClientRect();
    const btnCenterX = rect.left + (rect.width / 2) - window.scrollX;
    const btnCenterY = rect.top + (rect.height / 2) - window.scrollY;

    menuContainer.style.setProperty('--btn-center-x', `${btnCenterX}px`);
    menuContainer.style.setProperty('--btn-center-y', `${btnCenterY}px`);

    if (!isOpen) {
      setIsOpen(true);
      animateTextChange("Close");
    } else {
      menuContainer.classList.add('closing');
      setTimeout(() => {
        menuContainer.classList.remove('closing', 'open');
        setIsOpen(false);
        animateTextChange("Menu");
      }, 500); // Asegúrate de que esto coincida con la duración de tu animación
    }
  }

  useEffect(() => {
    const menuContainer = document.querySelector('.menu-container');
    if (isOpen) {
      document.body.classList.add("no-scroll");
      menuContainer.classList.add('open');
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  const animateTextChange = (newText) => {
    const letters = newText.split('');
    setButtonText("");
    letters.forEach((letter, index) => {
      setTimeout(() => {
        setButtonText((prev) => prev + letter);
      }, index * 100);
    });
  };
  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        const yOffset = -100;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
  
        setIsOpen(false);
      
        animateTextChange("Menu");
      }
    }, 100);
  };

  return (
    <div className={`menu-container ${isOpen ? "open" : ""}`}>
      <div className={`menu-header ${isOpen ? "open" : ""}`}>
        <Box
          component="img"
          src={isOpen ? logoSrcWhite : logoSrcBlack}
          alt="OZ___RA Logo"
          sx={{
            width: { xs: 150, sm: "auto" },
            height: { xs: "auto", sm: 100 },
            maxWidth: "100%",
            marginLeft: 3,
          }}
        />
        <div className="menu-button-container" onClick={toggleMenu}>
  <span>
    {buttonText.split('').map((letter, index) => (
      <span key={index} className="text-animation">{letter}</span>
    ))}
  </span>
  <button className="menu-button"></button>
</div>
      </div>
      {isOpen && (
        <div className="menu-content">
          <ul className="menu-list">
            <li className="menu-item" onClick={() => scrollToSection("home")}>Home</li>
            <li className="menu-item" onClick={() => scrollToSection("service")}>Service</li>
            <li className="menu-item" onClick={() => scrollToSection("vision")}>Vision</li>
            <li className="menu-item" onClick={() => scrollToSection("journey")}>Journey</li>
          </ul>
        </div>
      )}
      {isOpen && (
        <div className="menu-footer">
          <span>Privacy & Terms</span>
        </div>
      )}
    </div>
  );
};

export default Menu;

