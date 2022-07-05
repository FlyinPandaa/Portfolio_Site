import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Basic</h3>
          </div>
          
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>lorem ipsum dolor sit amet, consectet</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>lorem ipsum dolor sit amet, consectet</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>lorem ipsum dolor sit amet, consectet</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>lorem ipsum dolor sit amet, consectet</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>lorem ipsum dolor sit amet, consectet</p>
            </li>
          </ul>
        </article>
        {/* End of Basic */}
        <article className="service">
          <div className="service__head">
            <h3>Premium</h3>
          </div>
          
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>lorem ipsum dolor sit amet, consectet</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>lorem ipsum dolor sit amet, consectet</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>lorem ipsum dolor sit amet, consectet</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>lorem ipsum dolor sit amet, consectet</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>lorem ipsum dolor sit amet, consectet</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>lorem ipsum dolor sit amet, consectet</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>lorem ipsum dolor sit amet, consectet</p>
            </li>
          </ul>
        </article>
        {/* End of Standard*/}
        <article className="service">
          <div className="service__head">
            <h3>Standard</h3>
          </div>
          
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>lorem ipsum dolor sit amet, consectet</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>lorem ipsum dolor sit amet, consectet</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>lorem ipsum dolor sit amet, consectet</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>lorem ipsum dolor sit amet, consectet</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>lorem ipsum dolor sit amet, consectet</p>
            </li>
          </ul>
        </article>
        {/* End of Premium */}
      </div>

    
    
    </section>

  )
}

export default services