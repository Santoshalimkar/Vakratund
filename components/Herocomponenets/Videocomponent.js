"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Videocomponent = () => {
  const [text] = useTypewriter({
    words: [
      "Connecting People.",
      "Creating Memories.",
      "Creating Stories.",
      "Fulfilling Adventure",
      "Spreading Happiness",
    ],
    loop: false,
  });

  return (
    <div className="h-[30rem] overflow-hidden relative w-full">
      <video
        muted
        loop
        autoPlay
        className="object-cover brightness-50 w-full h-full"
        src="https://d1c8wbldjj3tey.cloudfront.net/header-video+(1080p).mp4"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 justify-center items-center px-4 text-center">
        <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl capitalize leading-tight sm:leading-snug md:leading-snug lg:leading-snug">
          Vakratund Tours & Adventure
        </h1>
        <h2 className="text-[#fee60b] text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium h-12">
          {text} <Cursor cursorColor="white" />
        </h2>
      </div>
    </div>
  );
};

export default Videocomponent;
