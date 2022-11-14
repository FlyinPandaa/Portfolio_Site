import React from 'react'
import Resume from '../../assets/Michael Fang - Resume (11_22).pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href= {Resume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Contact me</a>
    </div>
  )
}

export default CTA