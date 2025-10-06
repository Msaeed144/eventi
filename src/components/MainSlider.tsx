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
    <div className=" landing-poster-slider w-[500px] xl:w-[73%] lg:w-[73.5%] mr-8">
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
        {images.map(image => (
          <SwiperSlide key={image.id}>
            <Image src={image.image} width={1350} height={800} alt={image.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MainSlider;
