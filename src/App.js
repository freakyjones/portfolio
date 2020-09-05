import React from 'react';

import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Intro from './components/intro';
import Skills from './components/skills';
import Project from './components/projects';
import Experience from './components/Experience';
import Testimonials from './components/testimonials';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Intro/>
      <Skills/>
      <Project/>
      <Experience/>
      <Testimonials/>
      <Footer/>
      
    </div>
  );
}

export default App;
