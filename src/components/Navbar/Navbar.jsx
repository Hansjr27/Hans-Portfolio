import React, { useState } from 'react';
import MobileNav from '../MobileNav/MobileNav';
import './Navbar.css';
import { Link } from "react-scroll";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
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

        <button className="menu-btn" onClick={toggleMenu}>
          <span><i id="nav-toggle" className="ri-menu-4-line">{openMenu ? "" : ""}</i></span>
        </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar