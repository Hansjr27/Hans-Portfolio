import React from 'react'
import './Portfolio.css'
import { PORTFOLIO } from '../../utils/data'
import PortfolioCard from './PortfolioCard/PortfolioCard'

const Portfolio = () => {
  return (
    <section className="portfolio-container" id="portfolio">
      <h5>My Portfolio</h5>
      <div className="porfolio-content">
        <div className="portfolio">
        {PORTFOLIO.map((item) => (
          <PortfolioCard
            key={item.title}
            imgUrl={item.img}
            title={item.title}
            deskripsi={item.deskripsi}
            viewUrl={item.view}
            codeUrl={item.github}
          />
        ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio