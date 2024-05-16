import React from 'react'
import './ExperienceCard.css'

const ExperienceCard = ({ details }) => {
  return (
    <div className="learning-experience-card">
        <h6>{details.title}</h6>

        <div className="learning-duration">{details.date}</div>

        <div>
            {details.deskripsi.map((item) => (
                <span key={item}>{item}</span>
            ))}
        </div>
    </div>
  );
};

export default ExperienceCard