import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Michael Fang</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com"><FaFacebookSquare/></a>
        <a href="https://www.linkedin.com"><BsLinkedin/></a>
        <a href="https://www.twitter.com"><FaTwitterSquare/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Michael Fang. All rights reserved.</small>
        <br></br>
        <small><a href='https://www.freepik.com/vectors/panda'>Panda vector created by pch.vector - www.freepik.com</a></small>
      </div>

    </footer>
  )
}

export default footer