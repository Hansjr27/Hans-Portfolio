import React from 'react'
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
