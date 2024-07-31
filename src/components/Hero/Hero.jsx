import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container" id="hero">
      <div className="hero-content">
        <h2>I Am Syehan Safaril UI/UX Designer & Developer</h2>
        <p>I am web designer and UI/UX designer from Indonesia</p>
        <div className="social">
          <ul className="social__list">
            <li className="social__item">
              <a
                href="https://www.facebook.com/plagiatnya.syehan.9"
                target="_blank"
                className="social__link"
              >
                <i className="ri-facebook-fill"></i>
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.linkedin.com/in/syehan-safaril-mujib/"
                target="_blank"
                className="social__link"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://instagram.com/syehan._.27"
                target="_blank"
                className="social__link"
              >
                <i className="ri-instagram-fill"></i>
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://github.com/Hansjr27"
                target="_blank"
                className="social__link"
              >
                <i className="ri-github-fill"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hero-img">
        <div>
          <div className="icons-bahasa-column">
            <div className="tech-icon">
              <img src="/assets/img/javascript-logo.svg" alt="" width={50} />
            </div>
          </div>
          <img className="image-hero" src="/assets/img/Hans-home.png" alt="" />
        </div>
        <div className="icons-bahasa-row">
          <div>
            <div className="tech-icon">
              <img src="/assets/img/react.svg" alt="" width={50} />
            </div>
          </div>
          <div>
            <div className="tech-icon">
              <img src="/assets/img/next-js.svg" alt="" width={50} />
            </div>
          </div>
          <div>
            <div className="tech-icon">
              <img src="/assets/img/pngwing.com.png " alt="" width={50} />
            </div>
          </div>
          <div>
            <div className="tech-icon">
              <img src="/assets/img/Tailwind_CSS_Logo.svg" alt="" width={60} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;