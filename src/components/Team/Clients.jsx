import React from 'react';

const clientLogos = [
  'src/assets/client-1.png',
  'src/assets/client-2.png',
  'src/assets/client-3.png',
  'src/assets/client-4.png',
  'src/assets/client-5.png',
  'src/assets/client-6.png',
];

const sectionStyle = {
  padding: '60px 0',
  backgroundColor: '#f9f9f9',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 15px',
};

const rowStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '20px',
};

const logoColStyle = {
  flex: '0 0 30%',
  maxWidth: '150px',
  textAlign: 'center',
};

const imgStyle = {
  maxWidth: '100%',
  height: 'auto',
  filter: 'grayscale(100%)',
  transition: '0.3s ease-in-out',
};

const Clients = () => {
  return (
    <section id="clients" style={sectionStyle}>
      <div style={containerStyle} data-aos="fade-up">
        <div style={rowStyle}>
          {clientLogos.map((logo, index) => (
            <div key={index} style={logoColStyle}>
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                style={imgStyle}
                onMouseOver={(e) => (e.currentTarget.style.filter = 'none')}
                onMouseOut={(e) => (e.currentTarget.style.filter = 'grayscale(100%)')}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
