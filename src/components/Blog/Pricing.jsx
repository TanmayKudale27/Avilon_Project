import React from "react";
import "./Pricing.css"; // Optional: custom tweaks

const PricingSection = () => {
  return (
    <section id="pricing" className="py-5 bg-light">
      <div className="container text-center mb-5" data-aos="fade-up">
        <h2 className="fw-bold text-primary">Our Pricing Plans</h2>
        <p className="text-muted">
          Choose the plan that suits your needs. Upgrade anytime.
        </p>
      </div>

      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <div className="row justify-content-center g-4">

          {/* Free Plan */}
          <div className="col-lg-4">
            <div className="card h-100 text-center p-4 shadow-sm">
              <h4 className="fw-bold">Free Plan</h4>
              <div className="icon-box mx-auto mb-3 text-primary">
                <i className="fas fa-box fa-2x"></i>
              </div>
              <h3 className="text-info fw-bold">
                $0 <small className="text-muted fs-6">/ month</small>
              </h3>
              <ul className="list-unstyled mt-4 mb-4">
                <li><i className="fas fa-check text-success me-2"></i>Quam adipiscing vitae proin</li>
                <li><i className="fas fa-check text-success me-2"></i>Nec feugiat nisl pretium</li>
                <li><i className="fas fa-check text-success me-2"></i>Nulla at volutpat diam uteera</li>
                <li className="text-muted text-decoration-line-through">
                  <i className="fas fa-times me-2"></i>Pharetra massa massa ultricies
                </li>
                <li className="text-muted text-decoration-line-through">
                  <i className="fas fa-times me-2"></i>Massa ultricies mi quis hendrerit
                </li>
              </ul>
              <button className="btn btn-outline-primary">Buy Now</button>
            </div>
          </div>

          {/* Business Plan */}
          <div className="col-lg-4">
            <div className="card h-100 text-center p-4 border border-primary shadow">
              <h4 className="fw-bold">Business Plan</h4>
              <div className="icon-box mx-auto mb-3 text-primary">
                <i className="fas fa-rocket fa-2x"></i>
              </div>
              <h3 className="text-info fw-bold">
                $29 <small className="text-muted fs-6">/ month</small>
              </h3>
              <ul className="list-unstyled mt-4 mb-4">
                <li><i className="fas fa-check text-success me-2"></i>Quam adipiscing vitae proin</li>
                <li><i className="fas fa-check text-success me-2"></i>Nec feugiat nisl pretium</li>
                <li><i className="fas fa-check text-success me-2"></i>Nulla at volutpat diam uteera</li>
                <li><i className="fas fa-check text-success me-2"></i>Pharetra massa massa ultricies</li>
                <li><i className="fas fa-check text-success me-2"></i>Massa ultricies mi quis hendrerit</li>
              </ul>
              <button className="btn btn-outline-primary">Buy Now</button>
            </div>
          </div>

          {/* Developer Plan */}
          <div className="col-lg-4">
            <div className="card h-100 text-center p-4 shadow-sm">
              <h4 className="fw-bold">Developer Plan</h4>
              <div className="icon-box mx-auto mb-3 text-primary">
                <i className="fas fa-paper-plane fa-2x"></i>
              </div>
              <h3 className="text-info fw-bold">
                $49 <small className="text-muted fs-6">/ month</small>
              </h3>
              <ul className="list-unstyled mt-4 mb-4">
                <li><i className="fas fa-check text-success me-2"></i>Quam adipiscing vitae proin</li>
                <li><i className="fas fa-check text-success me-2"></i>Nec feugiat nisl pretium</li>
                <li><i className="fas fa-check text-success me-2"></i>Nulla at volutpat diam uteera</li>
                <li><i className="fas fa-check text-success me-2"></i>Pharetra massa massa ultricies</li>
                <li><i className="fas fa-check text-success me-2"></i>Massa ultricies mi quis hendrerit</li>
              </ul>
              <button className="btn btn-outline-primary">Buy Now</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;
