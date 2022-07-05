import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/panda_clip_6.jpg'
import AVTR2 from '../../assets/panda_clip_7.jpg'
import AVTR3 from '../../assets/panda_clip_8.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

const data = [
  {
    avatar: AVTR1,
    name: 'Panda 1',
    review: 'lorem ipsum dolor sit amet'
  },
  {
    avatar: AVTR2,
    name: 'Panda 2',
    review: 'lorem ipsum dolor sit amet'
  },
  {
    avatar: AVTR3,
    name: 'Panda 3',
    review: 'lorem ipsum dolor sit amet'
  }
]

const testimonials = () => {
  return (
    <section id="testimonials"> 
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    />

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[ Pagination ]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}      
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                    <img src={avatar} alt={avatar}/>
                </div>
                <h5 className="client__name">{name}</h5>
                  <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials