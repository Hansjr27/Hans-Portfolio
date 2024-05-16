import React, { useRef } from 'react';
import './LearningExperience.css';
import { LEARNING_EXPERIENCE } from '../../utils/data';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LearningExperience = () => {
  const sliderRef = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <div className="arrows-left" onClick={() => sliderRef.current.slickPrev()}><i className="ri-arrow-left-s-line"></i></div>,
    nextArrow: <div className="arrows-right" onClick={() => sliderRef.current.slickNext()}><i className="ri-arrow-right-s-line"></i></div>,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="experience-container">
      <h5>Learning Experience</h5>

      <div className="experience-content">
        <Slider ref={sliderRef} {...settings}>
          {LEARNING_EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default LearningExperience;
