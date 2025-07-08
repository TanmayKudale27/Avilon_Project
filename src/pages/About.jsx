import React from "react";
import { FaCheckCircle, FaPlayCircle } from "react-icons/fa";
import "./about.css"; 

const AboutSection = () => (
  <section id="about" className="about-section">
    <div className="about-container">
      <div className="about-row">
        <div className="about-img">
          <img src="src/assets/about.jpg" alt="About" />
        </div>
        <div className="about-content">
          <h2 className="inner-title">Consequatur eius et magnam</h2>
          <div className="our-story">
            <h4>Est 1988</h4>
            <h3>Our Story</h3>
            <p>
              Inventore aliquam beatae at et id alias. Ipsa dolores amet consequuntur minima quia maxime autem. Quidem id sed ratione. Tenetur provident autem in reiciendis rerum at dolor. Aliquam consectetur laudantium temporibus dicta minus dolor.
            </p>
            <ul>
              <li>
                <FaCheckCircle className="icon" />
                <span>Ullamco laboris nisi ut aliquip ex ea commo</span>
              </li>
              <li>
                <FaCheckCircle className="icon" />
                <span>Duis aute irure dolor in reprehenderit in</span>
              </li>
              <li>
                <FaCheckCircle className="icon" />
                <span>Ullamco laboris nisi ut aliquip ex ea</span>
              </li>
            </ul>
            <p>
              Vitae autem velit excepturi fugit. Animi ad non. Eligendi et non nesciunt suscipit repellendus porro in quo eveniet. Molestias in maxime doloremque.
            </p>
            <div className="watch-video">
              <FaPlayCircle className="icon play" />
              <a
                href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                target="_blank"
                rel="noopener noreferrer"
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

export default AboutSection;
