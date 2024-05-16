import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="d-grid footer__wrapper container">
            <div className="footer__content">
                <h4 className="footer__name">Syehan Safaril Mujib</h4>
                <ul className="footer__list">
                    <li className="footer__item">
                        <a href="" className="footer__link">Home</a>
                    </li>
                    <li className="footer__item">
                        <a href="" className="footer__link">Skills</a>
                    </li>
                    <li className="footer__item">
                        <a href="" className="footer__link">Learning Experience</a>
                    </li>
                    <li className="footer__item">
                        <a href="" className="footer__link">Portfolio</a>
                    </li>
                    <li className="footer__item">
                        <a href="" className="footer__link">Contact</a>
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