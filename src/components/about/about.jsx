import React from 'react'
import './about.css'
import Me from '../../assets/panda_clip_2.jpg'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {VscLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id="about"> 
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon"/>
              <h5>Experience</h5>
              <small>1 year experience</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Student</h5>
              <small>COG SCI student</small>
            </article>

            <article className="about__card">
              <VscLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>Check out my Portfolio</small>
            </article>
          </div>
          
          <p>
            Hello, my name is Michael, and I was born in Oakland, CA. Later on my parents moved to Sacramento, CA and I was raised in Sacramento. 
            I'm a Cognitive Science student studying at UC Merced, and will be graduating in the year 2024. 
          </p>
          <p>
            Currently starting out my freelancing career as a front-end developer that specializes in developing e-Commerce sites. I'm actively 
            looking for opportunities to work with new clients to further develop my skills.
          </p>
          <p>
            This summer I told myself I'm going to learn as much as possible about web development, and to practice my data structure and algorithm skills. I managed to reach my goal that 
            I set in June to complete a 65.5 hour course on Udemy called "The Complete 2022 Web Development Bootcamp" within a month. I went on to complete another course within a week called 
            "Master the coding interview: Data structures + Algorithms". As of today, I realize how much I need to learn, and a long journey ahead to become a full-fledged front-end 
            developer.
          </p>


          <a href="#contact" className="btn btn-primary">Contact Me</a>
        </div>

      </div>
    </section>
  )
}

export default about