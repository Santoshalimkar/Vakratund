import React from 'react'

import Journey from "../../public/Cardimages/Journey.JPG"; 
import Image from 'next/image';

const AboutJourney = () => {
  return (
    <div>

<div style={{opacity:1, transform:'none'}}>

    <div className='md:pb-10 lg:pb-10 pb-2 lg:pt-6'>
        <div className='h-full w-full max-w-7xl mx-auto relative px-6 md:px-8 lg:px-10 xl:px-0 grid md:grid-cols-2 gap-6 lg:gap-12 xl:gap-20'>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col xl:gap-2'>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-[500] flex flex-row gap-2 text-black'>Discover Our Journey

                    </h2>

                </div>
                <p className='text-xs lg:text-sm xl:text-base text-text-color leading-7 -tracking-tighter text-justify'>{`

In 2024, Vishal Ambekar founded Vakratund Tours and Adventure, driven by his deep passion for exploration and adventure. As an avid traveler and outdoor enthusiast, Vishal wanted to create more than just a travel service—he envisioned a community where fellow adventurers could come together to experience the thrill of discovery. Vakratund Tours and Adventure was born out of this vision, offering not only meticulously crafted travel experiences but also a platform for travelers to share their stories, connect with like-minded individuals, and embark on unforgettable journeys together. Join Vishal on this exciting adventure, and become part of a vibrant community that celebrates the spirit of exploration and adventure.`}</p>
                <ul className='flex flex-col gap-6 list-disc'>
                    <li className='flex flex-col gap-2'><span className='text-lg lg:text-xl '>●   How we named our organization.</span>
                    <span className='md:pl-7 lg:pl-7 text-xs lg:text-sm xl:text-base text-text-color leading-7 -tracking-tighter text-justify'>{`

Finding the perfect name for our travel company was a challenge. After sifting through numerous ideas, inspiration finally struck during a casual conversation. Someone mentioned, “Vakratund Tours – Ghoom ghoom ke maze le liye” ('Enjoyed traveling all around'). This phrase captured the joy and excitement we associate with exploration. That’s when 'Vakratund Tours and Adventure' came to life—a name that embodies our passion for creating memorable and joyful travel experiences for every adventurer.`}
                        </span>
                        </li>
                        </ul>
                <ul className='flex flex-col gap-6 list-disc'>
                    <li className='flex flex-col gap-2'><span className='text-lg lg:text-xl '>●  Community Engagement</span>
                    <span className='md:pl-7 lg:pl-7 text-xs lg:text-sm xl:text-base text-text-color leading-7 -tracking-tighter text-justify'>   {`For us, Vakratund Tours Travels is not just about booking flights or arranging accommodations. It's about fostering connections, inspiring others to explore, and celebrating the beauty of travel in all its forms. We invite you to join us on this journey – because together, we're not just travellers; we're a community.`}
                        </span>
                        </li>
                        </ul>
            </div>
            <div className='h-80 lg:h-[450px] w-full relative hidden md:block lg:block'>
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