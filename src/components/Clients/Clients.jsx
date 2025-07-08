import React from 'react';
import './Clients.css'; 

const clientLogos = [
  './src/assets/client-1.png',
  'src/assets/client-2.png',
  'src/assets/client-3.png',
  'src/assets/client-4.png',
  'src/assets/client-5.png',
  'src/assets/client-6.png',
];

const Clients = () => {
  return (
    <section id="clients" className="clients section light-background">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          {clientLogos.map((logo, index) => (
            <div key={index} className="col-xl-2 col-md-3 col-6 client-logo">
              <img src={logo} className="img-fluid" alt={`Client ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
