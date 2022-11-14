import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Netflix Clone (movie app).jpg'
import IMG2 from '../../assets/Twitter Clone.jpg'
import IMG3 from '../../assets/Lure - HackMerced VII.jpg'

const projects = [
  {
    id: 1,
    image: IMG1,
    title: 'Flix - CodePath',
    github: 'https://github.com/FlyinPandaa/CodePathUnit1',
    demo: 'https://imgur.com/a/sCE278U'
  },
  {
    id: 1,
    image: IMG2,
    title: 'BluishBirds - CodePath',
    github: 'https://github.com/FlyinPandaa/CodePath_Unit_3_4',
    demo: 'https://imgur.com/a/gIsjto9'
  },
  {
    id: 1,
    image: IMG3,
    title: 'Lure - HackmercedVII',
    github: 'https://github.com/HackmercedVII-Temp/zer0DayRepo',
    demo: 'https://www.youtube.com/watch?v=8CSkBCdxgiM&t=36s'
  },

]

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          projects.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank" rel="noopener noreferrer">Github</a>
                  <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>

    </section>
  )
}

export default portfolio