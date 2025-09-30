"use client";
import Image from 'next/image'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/pagination';
import { EffectCards , Navigation , Pagination } from "swiper/modules";

function MainSlider() {
  const images =[
    {image:"/images/pics/Banner.png" ,id:"1"},
    {image:"/images/pics/Banner.png" ,id:"2"},
    {image:"/images/pics/Banner.png" ,id:"3"},
    {image:"/images/pics/Banner.png" ,id:"4"},
  ]
  return (
    <div className="w-[68%] mr-8">
      <Swiper
        dir="ltr"
        effect={"cards"}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}        navigation={true}
        modules={[EffectCards ,Navigation , Pagination]}
        cardsEffect={{
          rotate: false,
        }}
        className="mySwiper"
      >
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        {images.map(image => (
          <SwiperSlide key={image.id}>
            <Image src={image.image} width={1000} height={1000} alt={image.id} />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        /* همه اسلایدها */
        .mySwiper .swiper-slide {
          transition: opacity 0.3s, visibility 0.3s;
        }

        /* اسلایدهایی که سمت چپ (قبلی) هستند، پنهان بشن */
        .mySwiper .swiper-slide-prev {
          opacity: 0 !important;
          visibility: hidden !important;
        }

        /* بقیه (اکتیو و بعدی‌ها) قابل نمایش باشن */
        .mySwiper .swiper-slide-active,
        .mySwiper .swiper-slide-next,
        .mySwiper .swiper-slide-next ~ .swiper-slide {
          opacity: 1;
          visibility: visible;
        }
      `}</style>
    </div>
  );
}

export default MainSlider;
