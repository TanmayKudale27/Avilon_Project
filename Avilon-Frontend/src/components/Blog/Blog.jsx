import React, { useEffect, useState } from "react";

const Blog = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sectionStyle = {
    padding: "60px 20px",
    backgroundColor: "#f8f9fa",
  };

  const headingStyle = {
    fontWeight: "700",
    color: "#0d6efd",
  };

  const cardBaseStyle = {
    padding: "20px",
    textAlign: "center",
    borderRadius: "8px",
    backgroundColor: "#fff",
    height: "100%",
    opacity: 0,
    transform: "translateY(40px)",
    transition: "opacity 0.8s ease, transform 0.8s ease",
  };

  const animatedCardStyle = {
    opacity: 1,
    transform: "translateY(0)",
  };

  const cardHighlightedStyle = {
    ...cardBaseStyle,
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
    transition: "transform 0.3s ease, background-color 0.3s ease, color 0.3s ease",
  };

  const buttonHoverStyle = {
    transform: "scale(1.05)",
    backgroundColor: "#0d6efd",
    color: "#fff",
  };

  const [hoveredButton, setHoveredButton] = useState(null);

  // Card wrapper to apply animation delay
  const renderCard = (title, icon, price, features, unavailable = [], isHighlighted = false, index = 0) => (
    <div style={{ flex: "1 1 300px", maxWidth: "350px" }}>
      <div
        style={{
          ...(isHighlighted ? cardHighlightedStyle : cardBaseStyle),
          ...(mounted ? { ...animatedCardStyle, transitionDelay: `${0.2 * index}s` } : {}),
        }}
      >
        <h4 style={{ fontWeight: "bold" }}>{title}</h4>
        <div style={iconBoxStyle}><i className={`fas ${icon}`}></i></div>
        <h3 style={priceStyle}>
          {price} <small style={{ color: "#6c757d", fontSize: "14px" }}>/ month</small>
        </h3>
        <ul style={listStyle}>
          {features.map((item, i) => (
            <li key={i}><i className="fas fa-check" style={checkIconStyle}></i>{item}</li>
          ))}
          {unavailable.map((item, i) => (
            <li key={`x-${i}`} style={{ color: "#adb5bd" }}>
              <i className="fas fa-times" style={crossIconStyle}></i>{item}
            </li>
          ))}
        </ul>
        <button
          style={{
            ...buttonStyle,
            ...(hoveredButton === index ? buttonHoverStyle : {}),
          }}
          onMouseEnter={() => setHoveredButton(index)}
          onMouseLeave={() => setHoveredButton(null)}
        >
          Buy Now
        </button>
      </div>
    </div>
  );

  return (
    <section id="pricing" style={sectionStyle}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 style={headingStyle}>Our Pricing Plans</h2>
        <p style={{ color: "#6c757d" }}>
          Choose the plan that suits your needs. Upgrade anytime.
        </p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px" }}>
        {renderCard(
          "Free Plan",
          "fa-box",
          "$0",
          [
            "Quam adipiscing vitae proin",
            "Nec feugiat nisl pretium",
            "Nulla at volutpat diam uteera",
          ],
          [
            "Pharetra massa massa ultricies",
            "Massa ultricies mi quis hendrerit",
          ],
          false,
          0
        )}
        {renderCard(
          "Business Plan",
          "fa-rocket",
          "$29",
          [
            "Quam adipiscing vitae proin",
            "Nec feugiat nisl pretium",
            "Nulla at volutpat diam uteera",
            "Pharetra massa massa ultricies",
            "Massa ultricies mi quis hendrerit",
          ],
          [],
          true,
          1
        )}
        {renderCard(
          "Developer Plan",
          "fa-paper-plane",
          "$49",
          [
            "Quam adipiscing vitae proin",
            "Nec feugiat nisl pretium",
            "Nulla at volutpat diam uteera",
            "Pharetra massa massa ultricies",
            "Massa ultricies mi quis hendrerit",
          ],
          [],
          false,
          2
        )}
      </div>
    </section>
  );
};

export default Blog;
