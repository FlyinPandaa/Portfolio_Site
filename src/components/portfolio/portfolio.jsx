import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/panda_clip_3.jpg'
import IMG2 from '../../assets/panda_clip_4.jpg'
import IMG3 from '../../assets/panda_clip_5.jpg'

const projects = [
  {
    id: 1,
    image: IMG1,
    title: 'Project 1',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 1,
    image: IMG2,
    title: 'Project 2',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 1,
    image: IMG3,
    title: 'Project 3',
    github: 'https://github.com',
    demo: 'https://dribble.com'
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