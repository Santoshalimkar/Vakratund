"use client"
import React from "react";
import { useTypewriter,Cursor  } from "react-simple-typewriter";
import Contactform from "../Contactuscomponents/Contactform";

const Videocomponent = () => {
    const [text] = useTypewriter({
        words: ["Connecting People.", "Creating Memories.", "Creating Stories.","Fulfilling Adventure","Spreading Happiness"],
        loop: false,
      });
  return (
    <div className="h-[30rem] overflow-hidden relative w-full">

      
      <video
        muted
        loop
        autoPlay
        className="object-cover brightness-50 "
        src="https://d1c8wbldjj3tey.cloudfront.net/header-video+(1080p).mp4"
      />
      <div className="absolute   top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 justify-center items-center ">
        <h1 className="text-white font-bold text-4xl capitalize leading-9 ">
          Vakratund Tour & Adventure
        </h1>
        <hi className='text-[#fee60b] text-xl font-medium h-12'>{text} <Cursor cursorColor='white' /></hi>
        
       

       
      </div>

     

    </div>
  );
};

export default Videocomponent;
