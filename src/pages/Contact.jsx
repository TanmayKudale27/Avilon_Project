import React, { useState } from "react";
import validator from "validator";
import "./contact.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (validator.isEmpty(formData.name)) {
      newErrors.name = "Name is required.";
    }

    if (!validator.isEmail(formData.email)) {
      newErrors.email = "Enter a valid email.";
    }

    if (validator.isEmpty(formData.subject)) {
      newErrors.subject = "Subject is required.";
    }

    if (validator.isEmpty(formData.message)) {
      newErrors.message = "Message cannot be empty.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Submitted:", formData);
    setSent(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title text-center mb-5" data-aos="fade-up">
        <h2 className="section-heading">Contact</h2>
        <div className="section-underline mx-auto"></div>
        <p className="text-muted mt-3">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-geo-alt flex-shrink-0 me-3 fs-4"></i>
              <div>
                <h3>Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-telephone flex-shrink-0 me-3 fs-4"></i>
              <div>
                <h3>Call Us</h3>
                <p>+91 9359525931</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-envelope flex-shrink-0 me-3 fs-4"></i>
              <div>
                <h3>Email Us</h3>
                <p>travexa@example.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <form className="p-email-form" onSubmit={handleSubmit} noValidate data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    name="subject"
                    className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                </div>

                <div className="col-md-12">
                  <textarea
                    name="message"
                    rows="6"
                    className={`form-control ${errors.message ? "is-invalid" : ""}`}
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>

                <div className="col-md-12 text-center">
                  {sent && <div className="sent-message">Your message has been sent. Thank you!</div>}
                  <button type="submit" className="btn btn-primary mt-3">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
