import React from 'react'
import './testmonaiols.css'
import Avt1 from '../../assets/me-about.jpg2.jpg'
import Avt2 from '../../assets/me-about.jpg3.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: Avt1,
    name: 'Mohamed Hossam',
    review: 'i am mohamed hossam Ebaid 19 years old'
  },
  {
    avatar: Avt2,
    name: 'Mohmed Thabet',
    review: 'i am mohamed Thabet 19 years old'
  },
] 

const tesrmonaiols = () => {
  return (
    <section id='testmonaiols'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testmonials__container"
          // install Swiper modules
          modules={[ Pagination ]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) =>{
            return (
              <SwiperSlide key={index} className="testmonial">
                <div className="client__avatar">
                  <img src={avatar}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                 {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default tesrmonaiols