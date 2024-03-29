import React from 'react'
import './experience.css'
import {BsFillBookmarkCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id="experience">

    <h5>What Skills I have</h5>
    <h2>My Experience</h2>

     <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <div className="experience__skill">
              <BsFillBookmarkCheckFill className="experience__details-icon" />
              <h4>HTML</h4>
              {/* <small className="text-light">Experienced</small> */}
            </div>
          </article>
          <article className="experience__details">
          <div className="experience__skill">
              <BsFillBookmarkCheckFill className="experience__details-icon" />
              <h4>CSS</h4>
              {/* <small className="text-light">Intermediate</small> */}
            </div>
          </article>
          <article className="experience__details">
            <div className="experience__skill">
              <BsFillBookmarkCheckFill className="experience__details-icon" />
              <h4>JavaScript</h4>
              {/* <small className="text-light">Intermediate</small> */}
            </div>
          </article>
          <article className="experience__details">
            <div className="experience__skill">
              <BsFillBookmarkCheckFill className="experience__details-icon" />
              <h4>Bootstrap</h4>
              {/* <small className="text-light">Intermediate</small> */}
            </div>
          </article>
          <article className="experience__details">
            <div className="experience__skill">
              <BsFillBookmarkCheckFill className="experience__details-icon" />
              <h4>React</h4>
              {/* <small className="text-light">Intermediate</small> */}
            </div>
          </article>
        </div>
      </div>

      <div className="experience__backend">
      <h3>Backend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsFillBookmarkCheckFill className="experience__details-icon" />
            <div className="experience__skill">
              <h4>MongoDB</h4>
              {/* <small className="text-light">Basic</small> */}
            </div>
          </article>
          <article className="experience__details">
            <BsFillBookmarkCheckFill className="experience__details-icon"/>
            <div className="experience__skill">
              <h4>NodeJS</h4>
              {/* <small className="text-light">Intermediate</small> */}
            </div>
          </article>
        </div>
      </div>
     </div>
    
    </section>
  )
}

export default experience