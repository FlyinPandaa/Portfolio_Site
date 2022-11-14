import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'


const headerSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/michael-fang-715a35149/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/FlyinPandaa" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
        <a href="https://twitter.com/MichaelsFangz7" target="_blank" rel="noopener noreferrer"><BsTwitter/></a>
    </div>
  )
}

export default headerSocials