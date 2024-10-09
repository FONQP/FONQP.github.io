import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TRNG from './components/subcomp/projects/TRNG';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/trng" element={<TRNG />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
