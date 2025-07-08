import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Header = () => {
  return (
    <header id="header" className="fixed-top bg-white shadow-sm"> 
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between py-3">
        
        <a href="index.html" className="d-flex align-items-center text-decoration-none">
          <h1 className="m-0 text-primary">Avilon</h1>
        </a>

        <nav className="navbar navbar-expand-lg">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="#hero" className="nav-link active">Home</a>
              </li>
              <li className="nav-item">
                <a href="#AboutSection" className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link">Services</a>
              </li>
              <li className="nav-item">
                <a href="#portfolio" className="nav-link">Portfolio</a>
              </li>
              <li className="nav-item">
                <a href="#team" className="nav-link">Team</a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Dropdown 1</a></li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">Deep Dropdown</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Deep Dropdown 1</a></li>
                      <li><a className="dropdown-item" href="#">Deep Dropdown 2</a></li>
                      <li><a className="dropdown-item" href="#">Deep Dropdown 3</a></li>
                      <li><a className="dropdown-item" href="#">Deep Dropdown 4</a></li>
                      <li><a className="dropdown-item" href="#">Deep Dropdown 5</a></li>
                    </ul>
                  </li>
                  <li><a className="dropdown-item" href="#">Dropdown 2</a></li>
                  <li><a className="dropdown-item" href="#">Dropdown 3</a></li>
                  <li><a className="dropdown-item" href="#">Dropdown 4</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a href="#contact" className="nav-link">Contact</a>
              </li>
            </ul>
          </div>
        </nav>

      </div>
    </header>
  );
};

export default Header;
