import React from "react";

const Footer = () => {
  return (
    <footer className=" text-center py-4">
      <div className="container">
        <h3 className="fw-bold text-dark mb-2">Avilon</h3>
        <div className="section-underline mx-auto"></div>
        <p className="fst-italic text-dark mb-4 text-muted mt-3">
          <h6>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</h6>
        </p>

        <div className="d-flex justify-content-center mb-4">
         
          {[
            { icon: "bi-twitter", label: "Twitter" },
            { icon: "bi-facebook", label: "Facebook" },
            { icon: "bi-instagram", label: "Instagram" },
            { icon: "bi-skype", label: "Skype" },
            { icon: "bi-linkedin", label: "LinkedIn" },
          ].map(({ icon, label }) => (
            <a
              key={icon}
              href="#"
              className="d-flex align-items-center justify-content-center"
              style={{ width: "40px", height: "40px" }}
              aria-label={label}
            >
              <i className={`bi ${icon}`} />
            </a>
          ))}
        </div>

        <hr className="border-secondary" />

        <div className="text-dark">
          <small>
            Copyright <strong>Avilon</strong> All Rights Reserved
          </small>
         
          <small>
             Designed by{"  "}
            <a
              href="https://bootstrapmade.com/"
              className="text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >Travexa Systeams
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
