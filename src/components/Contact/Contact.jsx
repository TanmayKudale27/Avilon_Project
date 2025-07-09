import React, { useState } from "react";
import { MdBorderColor } from "react-icons/md";
import validator from "validator";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number:"",
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

    if (validator.isEmpty(formData.number)) {
      newErrors.number = "Enter a valid phone number";
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
      number:"",
      subject: "",
      message: "",
    });

    setTimeout(() => setSent(false), 3000);
  };

  const sectionStyle = {
    padding: "60px 20px",
    backgroundColor: "#f8f9fa",
  };

  const titleStyle = {
    textAlign: "center",
    marginBottom: "40px",
  };

  const headingStyle = {
    fontSize: "32px",
    fontWeight: "700",
  };

  const underlineStyle = {
    width: "60px",
    height: "4px",
    backgroundColor: "#007bff",
    margin: "10px auto",
    borderRadius: "2px",
  };

  const textMutedStyle = {
    color: "#6c757d",
    marginTop: "15px",
  };

  const infoItemStyle = {
    display: "flex",
    marginBottom: "25px",
  };

  const iconStyle = {
    fontSize: "24px",
    marginRight: "15px",
    flexShrink: 0,
  };

  const formStyle = {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "6px",
    boxShadow: "0 0 10px rgba(0,0,0,0.05)",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 15px",
    borderRadius: "4px",
    border: "1px solid #ced4da",
    marginBottom: "10px",
  };

  const invalidInputStyle = {
    ...inputStyle,
    border: "1px solid red",
  };

  const textareaStyle = {
    ...inputStyle,
    resize: "vertical",
  };

  const feedbackStyle = {
    color: "red",
    fontSize: "0.9rem",
    marginBottom: "10px",
  };

  const sentMessageStyle = {
    color: "green",
    fontWeight: "bold",
    marginTop: "10px",
  };

  const buttonStyle = {
    padding: "10px 25px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px",
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div style={titleStyle}>
        <h2 style={headingStyle}>Contact</h2>
        <div style={underlineStyle}></div>
        <h5 style={textMutedStyle}>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </h5>
      </div>
      <div className="container">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
          {/* Contact Info */}
          <div style={{ flex: "1 1 30%" }}>
            <div style={infoItemStyle}>
              <i className="bi bi-geo-alt" style={iconStyle}></i>
              <div>
                <h3>Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>

            <div style={infoItemStyle}>
              <i className="bi bi-telephone" style={iconStyle}></i>
              <div>
                <h3>Call Us</h3>
                <p>+91 9359525931</p>
              </div>
            </div>

            <div style={infoItemStyle}>
              <i className="bi bi-envelope" style={iconStyle}></i>
              <div>
                <h3>Email Us</h3>
                <p>travexa@example.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ flex: "1 1 65%" }}>
            <form onSubmit={handleSubmit} style={formStyle} validate>
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                <div style={{ flex: "1 1 48%" }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    style={errors.name ? invalidInputStyle : inputStyle}
                  />
                  {errors.name && <div style={feedbackStyle}>{errors.name}</div>}
                </div>

                <div style={{ flex: "1 1 48%" }}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={errors.email ? invalidInputStyle : inputStyle}
                  />
                  {errors.email && <div style={feedbackStyle}>{errors.email}</div>}
                </div>

                <div style={{ flex: "1 1 100%" }}>
                  <input
                    type="text"
                    name="number"
                    placeholder="Number"
                    value={formData.number}
                    onChange={handleChange}
                    style={errors.number ? invalidInputStyle : inputStyle}
                  />
                  {errors.number && <div style={feedbackStyle}>{errors.number}</div>}
                </div>

                <div style={{ flex: "1 1 100%" }}>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    style={errors.subject ? invalidInputStyle : inputStyle}
                  />
                  {errors.subject && <div style={feedbackStyle}>{errors.subject}</div>}
                </div>

                <div style={{ flex: "1 1 100%" }}>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    style={errors.message ? { ...textareaStyle, border: '1px solid red' } : textareaStyle}
                  />
                  {errors.message && <div style={feedbackStyle}>{errors.message}</div>}
                </div>

                <div style={{ flex: "1 1 100%", textAlign: "center" }}>
                  {sent && <div style={sentMessageStyle}>Your message has been sent. Thank you!</div>}
                  <button type="submit" style={buttonStyle}>Send Message</button>
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
