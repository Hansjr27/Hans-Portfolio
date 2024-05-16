import React, { useState } from 'react';
import MobileNav from '../MobileNav/MobileNav';
import './Navbar.css';

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
        <img src="./src/assets/img/Nav-logo.png" alt="" />
        <ul>
          <li>
            <a href="/" className="menu-item">Home</a>
          </li>
          <li>
            <a href="" className="menu-item">skills</a>
          </li>
          <li>
            <a href="/" className="menu-item">Learning Experience</a>
          </li>
          <li>
            <a href="/" className="menu-item">Portfolio</a>
          </li>
          <li>
            <a href="/" className="menu-item">Contact</a>
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