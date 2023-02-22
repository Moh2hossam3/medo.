import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id:1,
    Image: IMG1,
    title: 'Crypto Currency Dashboard & financial Visualization',
    github:'https://githup.com',
    demo :'https://dribbble.com/Alien_pixels',
  },
  {
    id:2,
    Image: IMG2,
    title: 'Crypto Currency Dashboard & financial Visualization',
    github:'https://githup.com',
    demo :'https://dribbble.com/shots/14557665-Orion-UI-kit-Charts-templates-infographics-in-figma',
  },
  {
    id:3,
    Image: IMG3,
    title: 'Crypto Currency Dashboard & financial Visualization',
    github:'https://githup.com',
    demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  },
  {
    id:4,
    Image: IMG4,
    title: 'Crypto Currency Dashboard & financial Visualization',
    github:'https://githup.com',
    demo :'https://dribbble.com/Alien_pixels',
  },
  {
    id:5,
    Image: IMG5,
    title: 'Charts templates & infographics in figma',
    github:'https://githup.com',
    demo :'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-figma',
  },
  {
    id:6,
    Image: IMG6,
    title: 'Charts templates & infographics in figma',
    github:'https://githup.com',
    demo :'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-figma',
  }
] 



const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My React work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This portfolio item title</h3>
           <div className="portfolio__item-cta">
            <a href="https://githup.com" className='btn' target={'_blank'}>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target={'_blank'}>live Demo</a>
           </div> 
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This portfolio item title</h3>
           <div className="portfolio__item-cta">
            <a href="https://githup.com" className='btn' target={'_blank'}>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target={'_blank'}>live Demo</a>
           </div> 
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This portfolio item title</h3>
           <div className="portfolio__item-cta">
            <a href="https://githup.com" className='btn' target={'_blank'}>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target={'_blank'}>live Demo</a>
           </div> 
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This portfolio item title</h3>
           <div className="portfolio__item-cta">
            <a href="https://githup.com" className='btn' target={'_blank'}>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target={'_blank'}>live Demo</a>
           </div> 
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This portfolio item title</h3>
           <div className="portfolio__item-cta">
            <a href="https://githup.com" className='btn' target={'_blank'}>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target={'_blank'}>live Demo</a>
           </div> 
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This portfolio item title</h3>
           <div className="portfolio__item-cta">
            <a href="https://githup.com" className='btn' target={'_blank'}>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target={'_blank'}>live Demo</a>
           </div> 
        </article>
      </div>
    </section>
  )
}

export default portfolio
