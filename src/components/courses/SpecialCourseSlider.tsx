'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Navigation } from "swiper/modules";
import { courses } from '@/data';
import CourseCart from './CourseCart';

function SpecialCourseSlider() {
  const special = courses.filter(courses => courses.special === true)
  return (
    <div className='special-slider'>
        <Swiper
        slidesPerView={4}
        spaceBetween={10}
        className="mySwiper"
        navigation={true}
        modules={[ Navigation]}
      >
        {special.map(course =>(
            <SwiperSlide key={course.id}>
                <CourseCart course={course}/>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SpecialCourseSlider