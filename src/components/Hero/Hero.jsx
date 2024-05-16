import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-content">
                 <h2>I Am Syehan Safaril UI/UX Designer & Developer</h2>
                    {/*<div class="wrapper">
                    <div class="text">I'm</div>
                        <ul class="dynamic-text">
                            <li><span>Developer</span></li>
                            <li><span>FotoGrafi</span></li>
                            <li><span>UI/UX</span></li>
                            <li><span>VideoGrafi</span></li>
                        </ul>
                    </div> */}
            <p>I am web designer and UI/UX designer from Indonesia</p>
            <div className="social">
                        <ul className="social__list">
                            <li className="social__item">
                                <a href="https://www.facebook.com/plagiatnya.syehan.9" target="_blank"
                                    className="social__link">
                                    <i className="ri-facebook-fill"></i>
                                </a>
                            </li>
                            <li className="social__item">
                                <a href="https://www.linkedin.com/in/syehan-safaril-mujib/" target="_blank" className="social__link">
                                    <i className="ri-linkedin-fill"></i>
                                </a>
                            </li>
                            <li className="social__item">
                                <a href="https://instagram.com/syehan._.27" target="_blank"
                                    className="social__link">
                                    <i className="ri-instagram-fill"></i>
                                </a>
                            </li>
                            <li className="social__item">
                                <a href="https://github.com/Hansjr27" target="_blank" className="social__link">
                                    <i className="ri-github-fill"></i>
                                </a>
                            </li>
                        </ul>
                </div>
        </div>
        <div className="hero-img">
            <div>
            {/* icon 1 column */}
                <div className="icons-bahasa-column">
                    <div className="tech-icon">
                        <img src="./src/assets/img/react.svg" alt="" width={50}/>
                    </div>
                </div>
                <img className='image-hero' src="./src/assets/img/Hans-home.png" alt="" />
            </div>
            <div className="icons-bahasa-row">
            {/* icon 1 row */}
            <div>
                <div className="tech-icon">
                <img src="./src/assets/img/html-logo.svg" alt="" width={50}/>
                </div>
            </div>
            {/* icon 2 row */}
            <div>
                <div className="tech-icon">
                <img src="./src/assets/img/css-logo.svg" alt="" width={50}/>
                </div>
            </div>
            {/* icon 3 row */}
            <div>
                <div className="tech-icon">
                <img src="./src/assets/img/javascript-logo.svg" alt="" width={50}/>
                </div>
            </div>
            {/* icon 4 row */}
            <div>
                <div className="tech-icon">
                <img src="./src/assets/img/bootstrap-5-1.svg" alt="" width={60}/>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Hero