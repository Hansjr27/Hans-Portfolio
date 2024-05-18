import React from 'react'
import './MobileNav.css'
import { Link } from "react-scroll";

const MobileNav = ({ isOpen, toggleMenu}) => {
  return (
    <>
    <div 
    className={`mobile-menu ${isOpen ? "active" : ""}`}
    onClick={toggleMenu}
    >
        <div className="mobile-menu-container">
        <img src="/assets/img/Nav-logo.png" alt="" />
        <ul>
        <li>
            <Link className="menu-item" to="hero" spy={true} smooth={true} offset={5} duration={500}>
            Home
          </Link>
          </li>
          <li>
            <Link className="menu-item" to="skills" spy={true} smooth={true} offset={5} duration={500}>
            Skills
          </Link>
          </li>
          <li>
            <Link className="menu-item" to="learning" spy={true} smooth={true} offset={5} duration={500}>
            LearningExperience
          </Link>
          </li>
          <li>
          <Link className="menu-item" to="portfolio" spy={true} smooth={true} offset={5} duration={500}>
            Portfolio
          </Link>
          </li>
          <li>
            <Link className="menu-item" to="contact" spy={true} smooth={true} offset={5} duration={500}>
            Contact
          </Link>
          </li>

        <button className="contact-btn" onClick={() => {}}>Hire Me</button>
        </ul>
        </div>
    </div>
    </>
  )
}

export default MobileNav