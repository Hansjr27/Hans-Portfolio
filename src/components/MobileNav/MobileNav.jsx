import React from 'react'
import './MobileNav.css'

const MobileNav = ({ isOpen, toggleMenu}) => {
  return (
    <>
    <div 
    className={`mobile-menu ${isOpen ? "active" : ""}`}
    onClick={toggleMenu}
    >
        <div className="mobile-menu-container">
        <img src="./src/assets/img/Nav-logo.png" alt="" />
        <ul>
        <li>
            <a href="" className="menu-item">Home</a>
        </li>
        <li>
            <a href="" className="menu-item">skills</a>
        </li>
        <li>
            <a href="" className="menu-item">Learning Experience</a>
        </li>
        <li>
            <a href="" className="menu-item">Portfolio</a>
        </li>
        <li>
            <a href="" className="menu-item">Contact</a>
        </li>

        <button className="contact-btn" onClick={() => {}}>Hire Me</button>
        </ul>
        </div>
    </div>
    </>
  )
}

export default MobileNav