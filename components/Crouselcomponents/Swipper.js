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
    <div className='relative back py-12  md:block lg:block'>
    <div className='flex justify-center items-center flex-col gap-4 py-4'>
    <p className='text-3xl font-semibold'>JOURNEY IN FRAMES</p>
    <p>Pictures Perfect Moments</p>
    </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={''}
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
          <img src="https://res.cloudinary.com/dr5cl0sud/image/upload/v1728732839/pbye4jgkmzw1au0o1gj9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dr5cl0sud/image/upload/v1728732908/mcm9dl33txabjtqe2cc2.jpg" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dr5cl0sud/image/upload/v1728732929/opzhadnbust1nzmr50sd.jpg" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dr5cl0sud/image/upload/v1728733000/pvvhjsscfpqybdbufjdb.jpg" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://res.cloudinary.com/dr5cl0sud/image/upload/v1728733025/d7gddrpom0eogsqynttv.jpg" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dr5cl0sud/image/upload/v1728733068/qkqge6sqhc9bs2auto88.jpg" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dr5cl0sud/image/upload/v1728733104/q6z1nhxh2wz5gqygw1we.jpg" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dr5cl0sud/image/upload/v1728733136/eb9tqc2wxw5fjgfenzl5.jpg" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dr5cl0sud/image/upload/v1728733299/lxecintxbuzxr0gxjw2i.jpg" />
        </SwiperSlide>
        
       
       
      </Swiper>
    </div>
  );
}
