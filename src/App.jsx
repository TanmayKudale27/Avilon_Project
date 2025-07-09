import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './components/About/About';
import Services from './components/Team/Services';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <br/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
