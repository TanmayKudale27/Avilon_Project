import React from "react";
import { FaCheckCircle, FaPlayCircle } from "react-icons/fa";

const About = () => {
  const sectionStyle = {
    padding: "60px 20px",
    backgroundColor: "#fff",
  };

  const containerStyle = {
    maxWidth: "1140px",
    margin: "0 auto",
  };

  const rowStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    alignItems: "center",
  };

  const imgWrapperStyle = {
    flex: "1 1 45%",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  };

  const contentStyle = {
    flex: "1 1 50%",
  };

  const titleStyle = {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "20px",
  };

  const storyWrapperStyle = {
    backgroundColor: "#f8f9fa",
    padding: "25px",
    borderRadius: "8px",
  };

  const storyHeadingStyle = {
    marginBottom: "10px",
    fontSize: "20px",
    color: "#6c757d",
  };

  const storyTitleStyle = {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "15px",
  };

  const paragraphStyle = {
    fontSize: "15px",
    color: "#444",
    marginBottom: "15px",
    lineHeight: "1.7",
  };

  const listStyle = {
    listStyle: "none",
    paddingLeft: 0,
    marginBottom: "20px",
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    color: "#333",
  };

  const iconStyle = {
    color: "#28a745",
    marginRight: "10px",
    fontSize: "18px",
  };

  const watchVideoStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "15px",
  };

  const playIconStyle = {
    fontSize: "30px",
    color: "#0d6efd",
  };

  const linkStyle = {
    color: "#0d6efd",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "16px",
  };

  return (
    <section id="about" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={rowStyle}>
          <div style={imgWrapperStyle}>
            <img
              src="src/assets/about.jpg"
              alt="About"
              style={imageStyle}
            />
          </div>
          <div style={contentStyle}>
            <h2 style={titleStyle}>Consequatur eius et magnam</h2>
            <div style={storyWrapperStyle}>
              <h4 style={storyHeadingStyle}>Est 1988</h4>
              <h3 style={storyTitleStyle}>Our Story</h3>
              <p style={paragraphStyle}>
                Inventore aliquam beatae at et id alias. Ipsa dolores amet
                consequuntur minima quia maxime autem. Quidem id sed ratione.
                Tenetur provident autem in reiciendis rerum at dolor. Aliquam
                consectetur laudantium temporibus dicta minus dolor.
              </p>
              <ul style={listStyle}>
                <li style={listItemStyle}>
                  <FaCheckCircle style={iconStyle} />
                  <span>Ullamco laboris nisi ut aliquip ex ea commo</span>
                </li>
                <li style={listItemStyle}>
                  <FaCheckCircle style={iconStyle} />
                  <span>Duis aute irure dolor in reprehenderit in</span>
                </li>
                <li style={listItemStyle}>
                  <FaCheckCircle style={iconStyle} />
                  <span>Ullamco laboris nisi ut aliquip ex ea</span>
                </li>
              </ul>
              <p style={paragraphStyle}>
                Vitae autem velit excepturi fugit. Animi ad non. Eligendi et non
                nesciunt suscipit repellendus porro in quo eveniet. Molestias in
                maxime doloremque.
              </p>
              <div style={watchVideoStyle}>
                <FaPlayCircle style={playIconStyle} />
                <a
                  href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
