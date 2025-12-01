import React from 'react'
import './Testimonial.css'
import AVTR1 from '../../assets/avt1.png'
import AVTR2 from '../../assets/avt2.png'
import AVTR3 from '../../assets/avt4.png'

// core version + navigation, pagination modules:
import { A11y, Pagination, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    image: AVTR1,
    name: 'Mrs River',
    review: '',

  },
  {
    id: 2,
    image: AVTR2,
    name: 'Mr Akshay Sachdeva, Bangalore',
    review: '',

  },
  {
    id: 3,
    image: AVTR3,
    name: 'Nisha K., Pune',
    review: '',

  }
]
const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review From Client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ id, image, name, review }) => {
            return (
              <SwiperSlide key={id} className='testimonial'>
                <div className="client__avatar">
                  <img src={image} alt='avtr1' />

                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonial
