import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="App-header">
        <Navbar />
      </div>
      <div className="App-body">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
