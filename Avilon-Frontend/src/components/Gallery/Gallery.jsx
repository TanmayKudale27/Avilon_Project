import React from "react";

import "glightbox/dist/css/glightbox.min.css";

const galleryImages = [
  "gallery-1.jpg",
  "gallery-2.jpg",
  "gallery-3.jpg",
  "gallery-4.jpg",
  "gallery-5.jpg",
  "gallery-6.jpg",
  "gallery-7.jpg",
  "gallery-8.jpg",
];

const GallerySection = () => {
  return (
    <section id="gallery" className="gallery section">
      <div className="container section-title text-center mb-5" data-aos="fade-up">
        <h2>Gallery</h2>
        <div className="section-underline mx-auto"></div>
        <p className="text-muted mt-3" >
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-0">
          {galleryImages.map((img, index) => (
            <div className="col-lg-3 col-md-4" key={index}>
              <div className="gallery-item">
                <a
                  href={`src/assets/gallery/${img}`}
                  className="glightbox"
                  data-gallery="images-gallery"
                >
                  <img
                    src={`src/assets/gallery/${img}`}
                    alt={`gallery ${index + 1}`}
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
