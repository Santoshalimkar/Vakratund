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
          <img src="https://res.cloudinary.com/ddysmgao7/image/upload/v1724246251/VakratundTours/Gallery%20Images/imodl3kqremyu2ewrotr.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/ddysmgao7/image/upload/v1724246480/VakratundTours/Gallery%20Images/bwdr63hfwkxnotidnpud.jpg" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="https://res.cloudinary.com/ddysmgao7/image/upload/v1724246505/VakratundTours/Gallery%20Images/il3nba9t9yehwtozifwb.jpg" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="https://res.cloudinary.com/ddysmgao7/image/upload/v1724246534/VakratundTours/Gallery%20Images/uty56fxpl844uoyl9tyb.jpg" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://res.cloudinary.com/ddysmgao7/image/upload/v1724246561/VakratundTours/Gallery%20Images/krmuphoxiaoqxj6aq8bh.jpg" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="https://res.cloudinary.com/ddysmgao7/image/upload/v1724246748/VakratundTours/Gallery%20Images/utxhwot6hqutz1vupcx2.jpg" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="https://res.cloudinary.com/ddysmgao7/image/upload/v1724246800/VakratundTours/Gallery%20Images/qdmgf5pyoscxkma2521e.jpg" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="https://res.cloudinary.com/ddysmgao7/image/upload/v1724246776/VakratundTours/Gallery%20Images/idy7sy9utbyl7qr2fcze.jpg" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="https://res.cloudinary.com/ddysmgao7/image/upload/v1724246748/VakratundTours/Gallery%20Images/utxhwot6hqutz1vupcx2.jpg" />
        </SwiperSlide>
        
       
       
      </Swiper>
    </div>
  );
}
