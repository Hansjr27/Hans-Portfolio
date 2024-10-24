import React from 'react';
import './PortfolioCard.css';

const PortfolioCard = ({ title, imgUrl, deskripsi, viewUrl, codeUrl, aosAnimation }) => {
  return (
    <div className="portfolio__project" data-aos={aosAnimation}>
      <div className="portfolio__overlay"></div>
      <img src={imgUrl} alt={title} className="portfolio__img" />
      <h3 className="portfolio__title">{title}</h3>
      <div className="portfolio__info">
        <div className="portfolio__info-wrapper">
          <p className="portfolio__description">{deskripsi}</p>
        </div>
      </div>

      {/* View link */}
      <a href={viewUrl} target="_blank" rel="noopener noreferrer" className="portfolio__link link1">
        <i className="ri-external-link-line"></i>
      </a>

      {/* GitHub link (only if available) */}
      {codeUrl && (
        <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="portfolio__link link2">
          <i className="ri-github-fill"></i>
        </a>
      )}
    </div>
  );
};

export default PortfolioCard;
