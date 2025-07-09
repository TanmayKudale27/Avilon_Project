import React from 'react';
import Hero from '../components/Hero/Hero';
import Clients from '../components/Team/Clients';
import Features from '../components/Features/Features';
import Call from '../components/Call/CallToAction';
import Pricing from '../components/Blog/Blog';
import Faq from '../components/Team/Faq';
import Gallery from '../components/Gallery/Gallery';
import Contact from '../components/Contact/Contact'
import About from '../components/About/About'

const Home = () => {
  return (
    <>
      <br/>
      <Hero />
      <About />
      <Clients />
      <Features />
      <Call />
      <Pricing />
      <Faq />
      <Gallery />
      <Contact />
    </>
  );
};


export default Home;