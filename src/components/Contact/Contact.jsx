import React, { useState } from "react";
import validator from "validator";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
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
      newErrors.email = "Enter a valid email address.";
    }

    if (
      validator.isEmpty(formData.number) ||
      !validator.isMobilePhone(formData.number, "en-IN")
    ) {
      newErrors.number = "Enter a valid 10-digit phone number.";
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
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form submitted:", formData);
    setSent(true);
    setFormData({
      name: "",
      email: "",
      number: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setSent(false), 3000);
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

  const invalidStyle = {
    ...inputStyle,
    border: "1px solid red",
  };

  return (
    <section id="contact" style={{ padding: "60px 20px", background: "#f8f9fa" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "bold" }}>Contact</h2>
        <div style={{ width: "60px", height: "4px", background: "#007bff", margin: "10px auto", borderRadius: "2px" }}></div>
        <p style={{ color: "#6c757d" }}>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      <div className="container" style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
        {/* Contact Info */}
        <div style={{ flex: "1 1 30%" }}>
          <div style={{ marginBottom: "25px" }}>
            <i className="bi bi-geo-alt" style={{ fontSize: "24px", marginRight: "10px" }}></i>
            <strong>Address:</strong>
            <p>A108 Adam Street, New York, NY 535022</p>
          </div>
          <div style={{ marginBottom: "25px" }}>
            <i className="bi bi-telephone" style={{ fontSize: "24px", marginRight: "10px" }}></i>
            <strong>Call Us:</strong>
            <p>+91 9359525931</p>
          </div>
          <div>
            <i className="bi bi-envelope" style={{ fontSize: "24px", marginRight: "10px" }}></i>
            <strong>Email Us:</strong>
            <p>travexa@example.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{ flex: "1 1 65%" }}>
          <form onSubmit={handleSubmit} style={{ background: "#fff", padding: "20px", borderRadius: "6px", boxShadow: "0 0 10px rgba(0,0,0,0.05)" }}>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 48%" }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  style={errors.name ? invalidStyle : inputStyle}
                />
                {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
              </div>

              <div style={{ flex: "1 1 48%" }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  style={errors.email ? invalidStyle : inputStyle}
                />
                {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
              </div>

              <div style={{ flex: "1 1 100%" }}>
                <input
                  type="text"
                  name="number"
                  placeholder="Your Phone Number"
                  value={formData.number}
                  onChange={handleChange}
                  style={errors.number ? invalidStyle : inputStyle}
                />
                {errors.number && <div style={{ color: "red" }}>{errors.number}</div>}
              </div>

              <div style={{ flex: "1 1 100%" }}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={errors.subject ? invalidStyle : inputStyle}
                />
                {errors.subject && <div style={{ color: "red" }}>{errors.subject}</div>}
              </div>

              <div style={{ flex: "1 1 100%" }}>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  style={errors.message ? invalidStyle : inputStyle}
                ></textarea>
                {errors.message && <div style={{ color: "red" }}>{errors.message}</div>}
              </div>

              <div style={{ flex: "1 1 100%", textAlign: "center" }}>
                {sent && <div style={{color: "green", fontWeight: "bold", marginBottom: "10px" }}>Your message has been sent. Thank you!</div>}
                <button type="submit" style={{ padding: "10px 25px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "4px" }}>
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;