import React from 'react'

import Journey from "../../public/Cardimages/Journey.JPG"; 
import Image from 'next/image';

const AboutJourney = () => {
  return (
    <div>

<div style={{opacity:1, transform:'none'}}>

    <div className='md:pb-10 lg:pt-6'>
        <div className='h-full w-full max-w-7xl mx-auto relative px-6 md:px-8 lg:px-10 xl:px-0 grid md:grid-cols-2 gap-6 lg:gap-12 xl:gap-20'>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col xl:gap-2'>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-[500] flex flex-row gap-2 text-black'>Discover Our Journey

                    </h2>

                </div>
                <p className='text-xs lg:text-sm xl:text-base text-text-color'>Sanyam Sharma and Sourabh Rathore founded Desh Videsh in 2024. Sanyam, an influencer, and Sourabh, a former software developer, united by their love for travel and content creation, decided to share their experiences with others. Recognizing the value of genuine experiences abroad, they launched Desh Videsh Travels, aiming to offer more than just travel services. They envisioned it as a community where travelers could connect, share stories, and embark on adventures together. Join them on this journey beyond just being tourists; become part of a vibrant travel community.</p>
                <ul className='flex flex-col gap-6 list-disc'>
                    <li className='flex flex-col gap-2'><span className='text-lg lg:text-xl '>●   How we named our organization.</span>
                    <span className='pl-7 text-xs lg:text-sm xl:text-base text-text-color '>Driven by this vision, we decided to start our own travel company. But finding the right name proved to be a challenge. Then, one day during a casual conversation, a phrase struck us: “Desh Videsh ghoom ghoom ke thak gaye” ('Tired of traveling all over the place'). It was in that moment that the idea for 'Desh Videsh Travels' was born – a name that concluded our passion for exploring both near and far.
                        </span>
                        </li>
                        </ul>
                <ul className='flex flex-col gap-6 list-disc'>
                    <li className='flex flex-col gap-2'><span className='text-lg lg:text-xl '>●  Community Engagement</span>
                    <span className='pl-7 text-xs lg:text-sm xl:text-base text-text-color '>For us, Desh Videsh Travels is not just about booking flights or arranging accommodations. It's about fostering connections, inspiring others to explore, and celebrating the beauty of travel in all its forms. We invite you to join us on this journey – because together, we're not just travellers; we're a community.
                        </span>
                        </li>
                        </ul>
            </div>
            <div className='h-80 lg:h-[450px] w-full relative'>
                <div className='h-full w-full md:w-4/5 lg:w-3/4 xl:w-2/3 absolute top-0 left-1/2 md:-translate-x-1/3 xl:-translate-x-[38%] bg-white border-4 border-[#36a39e] rounded-lg hidden md:block'>
                <div className='absolute md:top-10 md:left-1/2 md:-translate-x-1/2 h-full w-full md:w-4/5 lg:w-3/4 xl:w-2/3'>
                <Image className='object-cover rounded-lg cursor-pointer' sizes="100vw" style={{ position:'absolute',height:'100%',inset:"0px" , color:"transparent"}} src={Journey}/>
                </div></div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default AboutJourney