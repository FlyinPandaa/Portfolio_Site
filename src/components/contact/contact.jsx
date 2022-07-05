import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {AiOutlineCheck} from 'react-icons/ai'
import { useRef, useState} from 'react';
import emailjs from 'emailjs-com';
// import Popup from '../popup/popup'

const contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0env8k4', 'template_rr6aall', form.current, 'VWI-MrqUjM2JnG4KL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
      e.target.reset();
  };

  return (
    <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <HiOutlineMail className="contact__option-icon"/>
          <h4>Email</h4>
          <h5>flyingpandaz10@gmail.com</h5>
          <a href="mailto:flyingpandaz10@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
        </article>
        <article className="contact__option">
          <FaFacebookSquare className="contact__option-icon"/>
          <h4>Facebook</h4>
          <h5>FlyingPanda</h5>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Send a message</a>
        </article>
        <article className="contact__option">
          <FaTwitterSquare className="contact__option-icon"/>
          <h4>Twitter</h4>
          <h5>michael-fangz7</h5>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Send a message</a>
        </article>
      </div>
      {/* END OF CONTACT OPTIONS */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" required/>
        <input type="email" name="email" placeholder="Your Email" required/>
        <input type="text" name="subject" placeholder="Subject" required/>
        <textarea name="message" rows="7" placeholder="Your Message" required/>
        <button type="submit" class="btn btn-primary">Send Message</button>
      </form>
    </div> 

    <a href="#" className='scroll__up'>Scroll Up</a>
    
    </section>    
    
  )
}

export default contact