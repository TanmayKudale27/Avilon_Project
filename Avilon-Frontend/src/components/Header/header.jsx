import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 400);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 400);
      if (window.innerWidth > 400) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headerStyle = {
    position: "fixed",
    top: 0,
    width: "100%",
    background: "#fff",
    boxShadow: "0 2px 15px rgba(0,0,0,0.1)",
    zIndex: 997,
    padding: "15px 0",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#0d6efd",
  };

  const navStyle = {
    display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
    flexDirection: isMobile ? "column" : "row",
    position: isMobile ? "absolute" : "static",
    top: isMobile ? "100%" : "auto",
    right: isMobile ? "0" : "auto",
    width: isMobile ? "100%" : "auto",
    background: isMobile ? "#fff" : "transparent",
    padding: isMobile ? "10px 0" : "0",
    gap: isMobile ? "0" : "20px",
  };

  const linkStyle = {
    textDecoration: "none",
    padding: "10px",
    color: "#333",
    display: "block",
  };

  const mobileToggleStyle = {
    display: isMobile ? "flex" : "none",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "18px",
    gap: "8px",
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <Link to="/" style={logoStyle}>
          <h1 style={{ fontSize: "28px", margin: 0 }}>Avilon</h1>
        </Link>

        <nav style={navStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/services" style={linkStyle}>Services</Link>
          <Link to="/portfolio" style={linkStyle}>Portfolio</Link>
          <Link to="/team" style={linkStyle}>Team</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </nav>

        <div style={mobileToggleStyle} onClick={() => setMenuOpen(!menuOpen)}>
          <i className="bi bi-list"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
