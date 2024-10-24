import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Portfolio.css';
import { PORTFOLIO, UIUX } from '../../utils/data';
import PortfolioCard from './PortfolioCard/PortfolioCard';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('web');
  const [portfolioItems, setPortfolioItems] = useState(PORTFOLIO);

  useEffect(() => {
    if (selectedCategory === 'web') {
      setPortfolioItems(PORTFOLIO);
    } else if (selectedCategory === 'uiux') {
      setPortfolioItems(UIUX);
    }
    AOS.refresh();
  }, [selectedCategory]);

  return (
    <section className="portfolio-container" id="portfolio">
      <h5>My Portfolio</h5>
      
      <div className="portfolio-buttons">
        <button
          className={`btn ${selectedCategory === 'web' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('web')}
        >
          Web Developer
        </button>
        <button
          className={`btn ${selectedCategory === 'uiux' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('uiux')}
        >
          UI/UX
        </button>
      </div>

      {/* Portfolio Content */}
      <div className="portfolio-content">
        <div className="portfolio">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={index}
              imgUrl={item.img}
              title={item.title}
              deskripsi={item.deskripsi}
              viewUrl={item.view}
              codeUrl={item.github}
              aosAnimation="fade-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
