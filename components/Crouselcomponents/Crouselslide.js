'use client'

import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import lehladakh from "@/public/Cardimages/lehladak.jpg";
import Kashmir from "@/public/Cardimages/Kashmir.jpg";
import Meghalaya from "@/public/Cardimages/Meghalaya.JPG";
import Bali from "@/public/Cardimages/Bali.JPG";
import Goa from "@/public/Cardimages/Goa.JPG";
import Kedarnath from "@/public/Cardimages/Kedarnath.JPG";

const Crouselslide = () => {
  const cardData = [
    {
      id: 1,
      title: "Leh Ladakh",
      description: "Starting Price Rs.21,999 ",
      imageUrl: lehladakh,
    },
    {
      id: 2,
      title: "Kashmir",
      description: "Starting Price Rs.15,999 ",
      imageUrl: Kashmir,
    },
    {
      id: 3,
      title: "Meghalaya",
      description: "Starting Price Rs.5,999",
      imageUrl: Meghalaya,
    },
    {
      id: 4,
      title: "Bali",
      description: "Starting Price Rs.15,999",
      imageUrl: Bali,
    },
    {
      id: 5,
      title: "Goa",
      description: "Starting Price Rs.5,999.",
      imageUrl: Goa,
    },
    {
      id: 6,
      title: "Kedarnath",
      description: "Starting Price Rs.15,999",
      imageUrl: Kedarnath,
    },
    {
      id: 7,
      title: "Card Title 1",
      description: "This is the description for card 1.",
      imageUrl: lehladakh,
    },
    
  ];

  return (
    <div className="back w-full h-screen flex justify-center items-center container mx-auto px-24">
      <div className="relative flex flex-col justify-center items-center w-full">
        <video
          muted
          loop
          height={200}
          autoPlay
          className="object-cover w-full mx-auto rounded-xl brightness-50"
          src="https://d1c8wbldjj3tey.cloudfront.net/category-section/india_(1)+(540p).mp4"
        />
        <div className="absolute top-6 left-10">
          <h1 className="text-[44px] boxShadow font-bold text-white">
            Explore India
          </h1>
          <p className="boxShadow text-xl text-white">
            A Journey Through Time, Colour And Culture
          </p>
        </div>
        <div className="absolute -bottom-36 w-11/12 mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {cardData.map((card) => (
                <CarouselItem
                  key={card.id}
                  className="pl-1 md:basis-1/5 lg:basis-1/5"
                >
                  <div className="p-1">
                    <Card className="w-48 h-60 relative overflow-hidden group">
                      <div className="h-full w-full absolute top-0 left-0 bg-black/25 group-hover:bg-black/65 transition-all duration-300 ease-in-out"></div>

                      <div
                        className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-50"
                        style={{
                          backgroundImage: `url(${card.imageUrl.src})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                      <CardContent className="relative flex flex-col items-center justify-center p-4 mt-[220px]">
                        <div className="h-fit w-full p-2 flex flex-col items-center transition-all duration-300 ease-in-out absolute -bottom-10 left-1/2 -translate-x-1/2 group-hover:-translate-y-1/2 group-hover:bottom-0 pb-4 text-white">
                          <h3 className="text-xl md:text-2xl xl:text-2xl  text-white textShadow font-bold text-center">
                            {card.title}
                          </h3>
                          <p className="text-white whitespace-nowrap boxShadow shadow-2xl mb-4">
                            {card.description}
                          </p>
                          <button className="h-fit w-fit px-4 py-1.5 hover:bg-[#01afd1] text-white text-sm font-semibold bg-[#3dbdd6] rounded-md relative top-[4px] group-hover:top-0 transition-all duration-200 ease-in-out">
                            View Trips
                          </button>
                        </div>
                        {/* <span className="h-1 group-hover:h-2 group-hover:bg-primary-dark ease-in-out transition-all absolute bottom-0 left-1/2 -translate-x-1/2 bg-primary-main rounded-full w-1/2"></span> */}

                        {/* <button className=" h-fit w-full p-2 flex flex-col items-center gap-2 transition-all duration-300 ease-in-out absolute -bottom-10 left-1/2 -translate-x-1/2 group-hover:-translate-y-1/2 group-hover:bottom-0 pb-4 text-white">
                          More
                        </button> */}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Crouselslide;
