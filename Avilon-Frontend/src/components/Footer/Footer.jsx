import React, { useState } from "react";
import validator from "validator";


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    mobileNo: "",
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

    if (validator.isEmpty(formData.mobileNo)) {
      newErrors.mobileNo = "Enter valid mobile number.";
    } else if (
      !validator.isNumeric(formData.mobileNo) ||
      formData.mobileNo.length !== 10
    ) {
      newErrors.mobileNo = "Enter valid 10 digit mobile no.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobileNo") {
      if (/^\d*$/.test(value)) {
        // allow only digits
        setFormData({ ...formData, [name]: value });
        if (value.length === 10) {
          setErrors({ ...errors, mobileNo: "" });
        } else {
          setErrors({ ...errors, mobileNo: "Enter valid 10 digit mobile no." });
        }
      }
    } else {
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: "" });
    }
  };
// -----------------------------------------------------
const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSent(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        mobileNo: "",
      });

      setTimeout(() => setSent(false), 3000);
    } else {
      console.log("Failed to send message");
    }
  } catch (error) {
    console.log("Error:", error);
  }
};
// ----------------------------------------------------------
  return (
    <section id="contact" className="contact section">
      <div
        className="container section-title text-center mb-5"
        data-aos="fade-up"
      >
        <h2 className="section-heading">Contact</h2>
        <div className="section-underline mx-auto"></div>
        <p className="text-muted mt-3">
          We’re here to help — get in touch with us anytime for support or
          questions.
        </p>
      </div>

      <div className="container" data-aos="fade" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i className="bi bi-geo-alt flex-shrink-0 me-3 fs-4"></i>
              <div>
                <h3>Address</h3>
                <p>Hadapsar, Pune</p>
              </div>
            </div>

            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="bi bi-telephone flex-shrink-0 me-3 fs-4"></i>
              <div>
                <h3>Call Us</h3>
                <p>+91 9069131515</p>
              </div>
            </div>

            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="bi bi-envelope flex-shrink-0 me-3 fs-4"></i>
              <div>
                <h3>Email Us</h3>
                <p>trivexa@example.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <form
              className="p-email-form"
              onSubmit={handleSubmit}
              noValidate
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                {/* Mobile No */}

                <div className="col-md-12">
                  <input
                    type="text"
                    name="mobileNo"
                    className={`form-control ${
                      errors.mobileNo ? "is-invalid" : ""
                    }`}
                    placeholder="Your Mobile No"
                    value={formData.mobileNo}
                    onChange={handleChange}
                    maxLength={10}
                  />
                  {errors.mobileNo && (
                    <div className="invalid-feedback">{errors.mobileNo}</div>
                  )}
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    name="subject"
                    className={`form-control ${
                      errors.subject ? "is-invalid" : ""
                    }`}
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && (
                    <div className="invalid-feedback">{errors.subject}</div>
                  )}
                </div>

                <div className="col-md-12">
                  <textarea
                    name="message"
                    rows="6"
                    className={`form-control ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                  )}
                </div>

                <div className="col-md-12 text-center">
                  {sent && (
                    <div className="sent-message">
                      Your message sent Successfully. Thank you!
                    </div>
                  )}
                  <button type="submit" className="btn btn-primary mt-3">
                    Send Message
                  </button>
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
