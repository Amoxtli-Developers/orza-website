import React, { useState, useEffect } from "react";
import "./Menu.css";
import logoSrcBlack from "../../assets/images/logo/orza-logo.png"; // Logo normal
import logoSrcWhite from "../../assets/images/logo/orza-logo-white.png"; // Logo blanco al abrir el menú
import { Box } from "@mui/material";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Cambia el estado del menú
  };

  useEffect(() => {
    // Agrega o quita la clase 'no-scroll' del body según el estado del menú
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Limpieza al desmontar el componente
    return () => document.body.classList.remove("no-scroll");
  }, [isOpen]);

  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        const yOffset = -100; // Ajuste vertical necesario
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        setIsOpen(false); // Cierra el menú después de desplazarse
      }
    }, 100);
  };

  return (
    <div className={`menu-container ${isOpen ? "open" : ""}`}>
      <div className={`menu-header ${isOpen ? "open" : ""}`}>
        <Box
          component="img"
          src={isOpen ? logoSrcWhite : logoSrcBlack} // Cambia la imagen del logo según si el menú está abierto
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
              <span style={{ fontSize: "16px" }}>Menu</span>
              <button className="menu-button"></button>
            </>
          )}
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

