import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] -z-10"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
