import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/panda_clip_1.jpg'
import HeaderSocial from './headerSocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Michael Fang</h1>
        <h5 className="text-light"> Full Stack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className='me'>
          <img src={Me} alt="Me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header