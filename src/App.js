import React, { useContext } from 'react';

import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Intro from './components/intro';
import Skills from './components/skills';
import Project from './components/projects';
import Experience from './components/Experience';
import Testimonials from './components/testimonials';
import Footer from './components/footer';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';
import { Header_Provider } from './contexts/headercontext';

function App() {
 const [theme,set_theme]=useContext(ThemeContext)

  return (
    <Header_Provider>
    <div className="App" style={{backgroundColor:`${theme.background_color}`}}>
      <Header/>
      <Hero/>
      <Intro/>
      <Skills/>
      <Project/>
      <Experience/>
      <Testimonials/>
      <Footer/>
      
    </div>
    </Header_Provider>

  );
}

export default App;
