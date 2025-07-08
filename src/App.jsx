import React from 'react'
import Header from './components/Header/header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Clients from './components/Clients/Clients';
import Features from './components/Features/Features';
import Services from './components/Services/Services';
import CallToAction from './components/Call/CallToAction';
import Pricing from './components/Blog/Pricing';
import Faq from './components/Team/Faq';
import Team from './components/Team/Team';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Clients />
        <Features />
        <Services />
        <CallToAction />
        <Pricing />
        <Faq />
        <Team />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App