import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const carouselEl = document.querySelector('#hero-carousel');
    if (window.bootstrap && carouselEl) {
      new window.bootstrap.Carousel(carouselEl, {
        interval: 5000,
        ride: 'carousel',
        pause: false,
        wrap: true,
      });
    }
  }, []);

  const sectionStyle = {
    backgroundColor: '#111',
    color: '#fff',
    padding: '60px 0',
    position: 'relative',
    overflow: 'hidden',
  };

  const carouselContainerStyle = {
    textAlign: 'center',
    maxWidth: '900px',
    margin: '0 auto',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    animation: 'fadeInDown 1s',
  };

  const spanStyle = {
    color: '#ffc107',
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    margin: '20px 0',
    animation: 'fadeInUp 1s',
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 25px',
    backgroundColor: '#ffc107',
    color: '#000',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: '600',
    animation: 'fadeInUp 1s',
  };

  const controlStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
  };

  const svgStyle = {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '60px',
  };

  return (
    <section id="hero" style={sectionStyle}>
      <div
        id="hero-carousel"
        className="container carousel carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div style={carouselContainerStyle}>
            <h2 style={headingStyle}>
              Welcome to <span style={spanStyle}>Our Avilon</span>
            </h2>
            <p style={paragraphStyle}>
              Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam.
              Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus
              deleniti vel. Minus et tempore modi architecto.
            </p>
            <a href="#about" style={buttonStyle}>
              Read More
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div style={carouselContainerStyle}>
            <h2 style={headingStyle}>Lorem Ipsum Dolor</h2>
            <p style={paragraphStyle}>
              Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam.
              Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus
              deleniti vel. Minus et tempore modi architecto.
            </p>
            <a href="#about" style={buttonStyle}>
              Read More
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <div style={carouselContainerStyle}>
            <h2 style={headingStyle}>Sequi ea ut et est quaerat</h2>
            <p style={paragraphStyle}>
              Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam.
              Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus
              deleniti vel. Minus et tempore modi architecto.
            </p>
            <a href="#about" style={buttonStyle}>
              Read More
            </a>
          </div>
        </div>

        {/* Controls */}
        <a
          className="carousel-control-prev"
          href="#hero-carousel"
          role="button"
          data-bs-slide="prev"
          style={{ ...controlStyle, left: '15px' }}
        >
          
        </a>
        <a
          className="carousel-control-next"
          href="#hero-carousel"
          role="button"
          data-bs-slide="next"
          style={{ ...controlStyle, right: '15px' }}
        >
          
        </a>
      </div>

      {/* SVG Waves */}
      <svg
        className="hero-waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        style={svgStyle}
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          ></path>
        </defs>
        {[...Array(6)].map((_, i) => (
          <g key={i} className={`wave${i + 1}`}>
            <use xlinkHref="#wave-path" x="50" y={i * 6}></use>
          </g>
        ))}
      </svg>
    </section>
  );
};

export default Hero;



// import React from 'react';

// const Hero = () => {
//   return (
//     <section
//       id="hero"
//       style={{
//         backgroundColor: '#111',
//         padding: '60px 0',
//         position: 'relative',
//         overflow: 'hidden',
//         color: '#fff',
//       }}
//     >
//       <div
//         id="hero-carousel"
//         className="carousel carousel-fade"
//         data-bs-interval="5000"
//         data-bs-ride="carousel"
//         style={{ width: '100%', maxWidth: '1140px', margin: '0 auto' }}
//       >
//         {/* Slide 1 */}
//         <div className="carousel-item active">
//           <div style={{ textAlign: 'center' }}>
//             <h2 style={{ animation: 'fadeInDown 1s' }}>
//               Welcome to <span style={{ color: '#ffc107' }}>Our Avilon</span>
//             </h2>
//             <p style={{ animation: 'fadeInUp 1s', maxWidth: '800px', margin: '20px auto' }}>
//               Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam.
//               Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus
//               deleniti vel. Minus et tempore modi architecto.
//             </p>
//             <a
//               href="#about"
//               style={{
//                 display: 'inline-block',
//                 marginTop: '20px',
//                 padding: '10px 25px',
//                 backgroundColor: '#ffc107',
//                 color: '#000',
//                 borderRadius: '4px',
//                 textDecoration: 'none',
//                 fontWeight: '600',
//               }}
//             >
//               Read More
//             </a>
//           </div>
//         </div>

//         {/* Slide 2 */}
//         <div className="carousel-item">
//           <div style={{ textAlign: 'center' }}>
//             <h2 style={{ animation: 'fadeInDown 1s' }}>Lorem Ipsum Dolor</h2>
//             <p style={{ animation: 'fadeInUp 1s', maxWidth: '800px', margin: '20px auto' }}>
//               Ut velit est quam dolor ad a aliquid qui aliquid...
//             </p>
//             <a
//               href="#about"
//               style={{
//                 display: 'inline-block',
//                 marginTop: '20px',
//                 padding: '10px 25px',
//                 backgroundColor: '#ffc107',
//                 color: '#000',
//                 borderRadius: '4px',
//                 textDecoration: 'none',
//                 fontWeight: '600',
//               }}
//             >
//               Read More
//             </a>
//           </div>
//         </div>

//         {/* Slide 3 */}
//         <div className="carousel-item">
//           <div style={{ textAlign: 'center' }}>
//             <h2 style={{ animation: 'fadeInDown 1s' }}>Sequi ea ut et est quaerat</h2>
//             <p style={{ animation: 'fadeInUp 1s', maxWidth: '800px', margin: '20px auto' }}>
//               Ut velit est quam dolor ad a aliquid qui aliquid...
//             </p>
//             <a
//               href="#about"
//               style={{
//                 display: 'inline-block',
//                 marginTop: '20px',
//                 padding: '10px 25px',
//                 backgroundColor: '#ffc107',
//                 color: '#000',
//                 borderRadius: '4px',
//                 textDecoration: 'none',
//                 fontWeight: '600',
//               }}
//             >
//               Read More
//             </a>
//           </div>
//         </div>

//         {/* Controls */}
//         <a
//           className="carousel-control-prev"
//           href="#hero-carousel"
//           role="button"
//           data-bs-slide="prev"
//           style={{ position: 'absolute', top: '50%', left: '15px', transform: 'translateY(-50%)' }}
//         >
//           <span className="carousel-control-prev-icon bi" aria-hidden="true"></span>
//         </a>
//         <a
//           className="carousel-control-next"
//           href="#hero-carousel"
//           role="button"
//           data-bs-slide="next"
//           style={{ position: 'absolute', top: '50%', right: '15px', transform: 'translateY(-50%)' }}
//         >
//           <span className="carousel-control-next-icon bi" aria-hidden="true"></span>
//         </a>
//       </div>

//       {/* Hero SVG Waves */}
//       <svg
//         className="hero-waves"
//         xmlns="http://www.w3.org/2000/svg"
//         xmlnsXlink="http://www.w3.org/1999/xlink"
//         viewBox="0 24 150 28"
//         preserveAspectRatio="none"
//         style={{ position: 'absolute', bottom: '0', width: '100%', height: '60px' }}
//       >
//         <defs>
//           <path
//             id="wave-path"
//             d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
//           ></path>
//         </defs>
//         {[...Array(6)].map((_, i) => (
//           <g key={i} className={`wave${i + 1}`}>
//             <use xlinkHref="#wave-path" x="50" y={i * 5} fill="rgba(255,255,255,0.1)" />
//           </g>
//         ))}
//       </svg>
//     </section>
//   );
// };

// export default Hero;




// import React from 'react';
// import './hero.css';

// const Hero = () => {
//   return (
//     <section id="hero" className="hero section dark-background">
//       <div
//         id="hero-carousel"
//         data-bs-interval="5000"
//         className="container carousel carousel-fade"
//         data-bs-ride="carousel"
//       >
//         <div className="carousel-item active">
//           <div className="carousel-container">
//             <h2 className="animate__animated animate__fadeInDown">
//               Welcome to <span>Our Avilon</span>
//             </h2>
//             <p className="animate__animated animate__fadeInUp">
//               Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam.
//               Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus
//               deleniti vel. Minus et tempore modi architecto.
//             </p>
//             <a
//               href="#about"
//               className="btn-get-started animate__animated animate__fadeInUp scrollto"
//             > 
//               Read More
//             </a>
//           </div>
//         </div>

//         <div className="carousel-item">
//           <div className="carousel-container">
//             <h2 className="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
//             <p className="animate__animated animate__fadeInUp">
//               Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam.
//               Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus
//               deleniti vel. Minus et tempore modi architecto.
//             </p>
//             <a
//               href="#about"
//               className="btn-get-started animate__animated animate__fadeInUp scrollto"
//             >
//               Read More
//             </a>
//           </div>
//         </div>

//         <div className="carousel-item">
//           <div className="carousel-container">
//             <h2 className="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
//             <p className="animate__animated animate__fadeInUp">
//               Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam.
//               Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus
//               deleniti vel. Minus et tempore modi architecto.
//             </p>
//             <a
//               href="#about"
//               className="btn-get-started animate__animated animate__fadeInUp scrollto"
//             >
//               Read More
//             </a>
//           </div>
//         </div>

//         <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon bi " aria-hidden="true"></span>
//         </a>
//         <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
//           <span className="carousel-control-next-icon bi  " aria-hidden="true"></span>
//         </a>
//       </div>

//       <svg
//         className="hero-waves"
//         xmlns="http://www.w3.org/2000/svg"
//         xmlnsXlink="http://www.w3.org/1999/xlink"
//         viewBox="0 24 150 28"
//         preserveAspectRatio="none"
//       >
//         <defs>
//           <path
//             id="wave-path"
//             d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
//           ></path>
//         </defs>
//         <g className="wave1">
//           <use xlinkHref="#wave-path" x="50" y="3"></use>
//         </g>
//         <g className="wave2">
//           <use xlinkHref="#wave-path" x="50" y="0"></use>
//         </g>
//         <g className="wave3">
//           <use xlinkHref="#wave-path" x="50" y="9"></use>
//         </g>
//         <g className="wave4">
//           <use xlinkHref="#wave-path" x="50" y="12"></use>
//         </g>
//         <g className="wave5">
//           <use xlinkHref="#wave-path" x="50" y="16"></use>
//         </g>
//         <g className="wave6">
//           <use xlinkHref="#wave-path" x="50" y="20"></use>
//         </g>
//       </svg>
//     </section>
//   );
// };

// export default Hero;
