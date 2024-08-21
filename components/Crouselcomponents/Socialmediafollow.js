import React from 'react'
import Instagramlogo from "../../public/Cardimages/Instagramlogo_icon.png";
import Google_Logo from "../../public/Cardimages/Google_Logo.png";
import Image from "next/image";

const Socialmediafollow = () => {
  return (
    <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full text-white w-full flex flex-col justify-end  items-center bottom-12">
          <div className=" opacity-1 transform-none will-change-auto">
            <div className="grid grid-cols-2 md:gap-12 lg:gap-12 gap-2">
              <div className="flex gap-2 ">
                <h1 className="lg:h-14 lg:w-14 md:h-12 md:w-12 h-8 w-8 shrink-0 ">
                  <Image src={Instagramlogo}/>
                </h1>
                <div className="flex flex-col justify-center">
                  <span className="text-sm md:text-2xl lg:text-2xl font-bold leading-none">
                    <span className="inline-block tabular-nums undefined text-white">
                      900+
                    </span>
                  </span>
                  <span className="text-sm lg:text-lg leading-none text-white ">
                    Followers
                  </span>
                </div>
              </div>
              <div className="flex gap-4">
              <h1 className="lg:h-14 lg:w-14 md:h-12 md:w-12 h-8 w-8 shrink-0 ">
                  <Image src={Google_Logo}/>
                </h1>
                <div className="flex flex-col justify-center mr-2">
                  <span className="text-sm lg:text-2xl md:text-2xl font-bold leading-none">
                    <span className="inline-block tabular-nums undefined text-white">
                      100+
                    </span>
                  </span>
                  <span className="text-sm lg:text-lg leading-none text-white">
                    Review
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Socialmediafollow