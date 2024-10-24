import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import LearningExperience from './components/LearningExperience/LearningExperience'
import Portfolio from './components/Portfolio/Portfolio'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'
import 'remixicon/fonts/remixicon.css'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">
        <Hero />
        <Skills />
        <LearningExperience />
        <Portfolio />
        <ContactMe />
      </div>

      <Footer />
    </>
  )
}

export default App
