import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Service from './components/Service';

function App() {
  return (
    <div className="overflow-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900"> 
        <div className="fixed inset-0 z-[-2] w-full min-h-screen bg-neutral-950 
          bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          
          <Navbar />
          <Hero />
          <About />
          <Service />
          <Projects />
          <Contact />
          <Footer />
    </div>
  );
}

export default App;
