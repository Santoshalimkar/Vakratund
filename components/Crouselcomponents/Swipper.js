"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Swipper() {
  return (
    <div className='relative back py-12 hidden md:block lg:block'>
    <div className='flex justify-center items-center flex-col gap-4 py-4'>
    <p className='text-3xl font-semibold'>JOURNEY IN FRAMES</p>
    <p>Pictures Perfect Moments</p>
    </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://res.cloudinary.com/ddysmgao7/image/upload/v1723359456/VakratundTours/g0mcg1q69o9lhd4nvvco.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/ddysmgao7/image/upload/v1723359865/VakratundTours/qf2wnny3axkqawyxpep4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/ddysmgao7/image/upload/v1723358520/VakratundTours/cpb8yy1fqkuyu51j8xx2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/ddysmgao7/image/upload/v1723359166/VakratundTours/dd4runep3rougfwbuofu.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/ddysmgao7/image/upload/v1723359386/VakratundTours/jxabbejdbukgxjsn0xhh.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/ddysmgao7/image/upload/v1723359603/VakratundTours/me4twl0hx99wjpqfszvl.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/ddysmgao7/image/upload/v1723359803/VakratundTours/astmbrwculbi7l2ydxun.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/ddysmgao7/image/upload/v1723359803/VakratundTours/astmbrwculbi7l2ydxun.jpg" />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}
