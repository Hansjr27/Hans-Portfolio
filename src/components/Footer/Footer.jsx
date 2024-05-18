import React from 'react'
import './Footer.css'
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="d-grid footer__wrapper container">
            <div className="footer__content">
                <h4 className="footer__name">Syehan Safaril Mujib</h4>
                <ul className="footer__list">
                    <li className="footer__item">
                        <Link className="footer__link" to="hero" spy={true} smooth={true} offset={5} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li className="footer__item">
                        <Link className="footer__link" to="skills" spy={true} smooth={true} offset={5} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li className="footer__item">
                        <Link className="footer__link" to="learning" spy={true} smooth={true} offset={5} duration={500}>
                            LearningExperience
                        </Link>
                    </li>
                    <li className="footer__item">
                        <Link className="footer__link" to="portfolio" spy={true} smooth={true} offset={5} duration={500}>
                            Portfolio
                        </Link>
                    </li>
                    <li className="footer__item">
                        <Link className="footer__link" to="contact" spy={true} smooth={true} offset={5} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
                <ul className="social__list">
                    <li className="social__item">
                        <a href="https://www.facebook.com/plagiatnya.syehan.9" target="_blank"
                            className="social__link">
                            <i className="ri-facebook-fill"></i>
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="https://www.linkedin.com/in/syehan-safaril-mujib/" target="_blank" className="social__link">
                            <i className="ri-linkedin-line"></i>
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="https://instagram.com/syehan._.27?igshid=MzRlODBiNWFlZA==" target="_blank"
                            className="social__link">
                            <i className="ri-instagram-line"></i>
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="https://github.com/Hansjr27" target="_blank" className="social__link">
                            <i className="ri-github-line"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="footer__copyright container">
            <p>© Copyright 2023 Syehan Code. All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer