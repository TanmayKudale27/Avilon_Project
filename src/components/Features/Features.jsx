import React from "react";
import "./features.css"; 
import "bootstrap-icons/font/bootstrap-icons.css"; 

const FeaturesSection = () => {
  return (
    <section id="features-2" className="features section features-2">
   
      <div className="container section-title" data-aos="fade-up">
        <h2>Features</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container">
        <div className="row">
   
          <div className="features-image" data-aos="fade-up">
            <img
              src="src/assets/features.png"
              className="img-fluid"
              alt="Features"
            />
          </div>

          
          <div className="col-lg-7">
            <div className="features-item" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-archive"></i>
              <div>
                <h4>Est labore ad</h4>
                <p>
                  Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                  laboris nisi ut aliquip
                </p>
              </div>
            </div>

            <div className="features-item" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-basket"></i>
              <div>
                <h4>Harum esse qui</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt
                </p>
              </div>
            </div>

            <div className="features-item" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-broadcast"></i>
              <div>
                <h4>Aut occaecati</h4>
                <p>
                  Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                  maiores omnis facere
                </p>
              </div>
            </div>

            <div className="features-item" data-aos="fade-up" data-aos-delay="500">
              <i className="bi bi-camera-reels"></i>
              <div>
                <h4>Beatae veritatis</h4>
                <p>
                  Expedita veritatis consequuntur nihil tempore laudantium
                  vitae denat pacta
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
