import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avt1.png'

import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data =[
    {
        avatar: AVTR1,
        name: 'Duy',
        review:'Lorem ipsum, dolor sit amet consectetur adipisicing elitRatione soluta vitae ullam voluptates ad beatae, ipsa obcaecati cupiditate officiis dolorum totam perspiciatis cumque corrupti distinctio fuga sint itaque sequi expedita',
    },
    {
        avatar: AVTR1,
        name: 'Khang',
        review:'Lorem ipsum, dolor sit amet consectetur adipisicing elitRatione soluta vitae ullam voluptates ad beatae, ipsa obcaecati cupiditate officiis dolorum totam perspiciatis cumque corrupti distinctio fuga sint itaque sequi expedita',
    },
    {
        avatar: AVTR1,
        name: 'Thanh',
        review:'Lorem ipsum, dolor sit amet consectetur adipisicing elitRatione soluta vitae ullam voluptates ad beatae, ipsa obcaecati cupiditate officiis dolorum totam perspiciatis cumque corrupti distinctio fuga sint itaque sequi expedita',
    }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Review From clients</h5>
        <h2>Testtimonal</h2>
        <Swiper className="container testimonials__container"
            modules={[ Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
          {
            data.map(({ avatar, name, review},index)=>{
              return(
                <SwiperSlide key={index} className='testimonials'>
                <div className="client__avatar">
                    <img src={avatar} />
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

export default Testimonials

