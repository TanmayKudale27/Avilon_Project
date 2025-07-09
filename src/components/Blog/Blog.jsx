import React from "react";

const Blog = () => {
  const sectionStyle = {
    padding: "60px 20px",
    backgroundColor: "#f8f9fa",
  };

  const headingStyle = {
    fontWeight: "700",
    color: "#0d6efd",
  };

  const cardStyle = {
    padding: "20px",
    textAlign: "center",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    height: "100%",
  };

  const cardHighlightedStyle = {
    ...cardStyle,
    border: "2px solid #0d6efd",
    boxShadow: "0 0 15px rgba(0, 123, 255, 0.2)",
  };

  const iconBoxStyle = {
    fontSize: "32px",
    color: "#0d6efd",
    marginBottom: "15px",
  };

  const priceStyle = {
    fontWeight: "700",
    color: "#0dcaf0",
    fontSize: "24px",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: "20px 0",
    lineHeight: "1.7",
  };

  const checkIconStyle = {
    color: "green",
    marginRight: "8px",
  };

  const crossIconStyle = {
    color: "#6c757d",
    marginRight: "8px",
    textDecoration: "line-through",
  };

  const buttonStyle = {
    padding: "10px 20px",
    color: "#0d6efd",
    border: "1px solid #0d6efd",
    backgroundColor: "transparent",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <section id="pricing" style={sectionStyle}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 style={headingStyle}>Our Pricing Plans</h2>
        <p style={{ color: "#6c757d" }}>
          Choose the plan that suits your needs. Upgrade anytime.
        </p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px" }}>
        {/* Free Plan */}
        <div style={{ flex: "1 1 300px", maxWidth: "350px" }}>
          <div style={cardStyle}>
            <h4 style={{ fontWeight: "bold" }}>Free Plan</h4>
            <div style={iconBoxStyle}><i className="fas fa-box"></i></div>
            <h3 style={priceStyle}>
              $0 <small style={{ color: "#6c757d", fontSize: "14px" }}>/ month</small>
            </h3>
            <ul style={listStyle}>
              <li><i className="fas fa-check" style={checkIconStyle}></i>Quam adipiscing vitae proin</li>
              <li><i className="fas fa-check" style={checkIconStyle}></i>Nec feugiat nisl pretium</li>
              <li><i className="fas fa-check" style={checkIconStyle}></i>Nulla at volutpat diam uteera</li>
              <li style={{ color: "#adb5bd" }}><i className="fas fa-times" style={crossIconStyle}></i>Pharetra massa massa ultricies</li>
              <li style={{ color: "#adb5bd" }}><i className="fas fa-times" style={crossIconStyle}></i>Massa ultricies mi quis hendrerit</li>
            </ul>
            <button style={buttonStyle}>Buy Now</button>
          </div>
        </div>

        {/* Business Plan */}
        <div style={{ flex: "1 1 300px", maxWidth: "350px" }}>
          <div style={cardHighlightedStyle}>
            <h4 style={{ fontWeight: "bold" }}>Business Plan</h4>
            <div style={iconBoxStyle}><i className="fas fa-rocket"></i></div>
            <h3 style={priceStyle}>
              $29 <small style={{ color: "#6c757d", fontSize: "14px" }}>/ month</small>
            </h3>
            <ul style={listStyle}>
              <li><i className="fas fa-check" style={checkIconStyle}></i>Quam adipiscing vitae proin</li>
              <li><i className="fas fa-check" style={checkIconStyle}></i>Nec feugiat nisl pretium</li>
              <li><i className="fas fa-check" style={checkIconStyle}></i>Nulla at volutpat diam uteera</li>
              <li><i className="fas fa-check" style={checkIconStyle}></i>Pharetra massa massa ultricies</li>
              <li><i className="fas fa-check" style={checkIconStyle}></i>Massa ultricies mi quis hendrerit</li>
            </ul>
            <button style={buttonStyle}>Buy Now</button>
          </div>
        </div>

        {/* Developer Plan */}
        <div style={{ flex: "1 1 300px", maxWidth: "350px" }}>
          <div style={cardStyle}>
            <h4 style={{ fontWeight: "bold" }}>Developer Plan</h4>
            <div style={iconBoxStyle}><i className="fas fa-paper-plane"></i></div>
            <h3 style={priceStyle}>
              $49 <small style={{ color: "#6c757d", fontSize: "14px" }}>/ month</small>
            </h3>
            <ul style={listStyle}>
              <li><i className="fas fa-check" style={checkIconStyle}></i>Quam adipiscing vitae proin</li>
              <li><i className="fas fa-check" style={checkIconStyle}></i>Nec feugiat nisl pretium</li>
              <li><i className="fas fa-check" style={checkIconStyle}></i>Nulla at volutpat diam uteera</li>
              <li><i className="fas fa-check" style={checkIconStyle}></i>Pharetra massa massa ultricies</li>
              <li><i className="fas fa-check" style={checkIconStyle}></i>Massa ultricies mi quis hendrerit</li>
            </ul>
            <button style={buttonStyle}>Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
