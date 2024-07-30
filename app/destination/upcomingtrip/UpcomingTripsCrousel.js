"use client";

import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import 'primeicons/primeicons.css';
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

import lehladakh from "../../../public/Cardimages/lehladak.jpg";
import Kashmir from "../../../public/Cardimages/Kashmir.jpg";

import Meghalaya from "../../../public/Cardimages/Meghalaya.JPG";
import Bali from "../../../public/Cardimages/Bali.JPG";
import Goa from "../../../public/Cardimages/Goa.JPG";
import Kedarnath from "../../../public/Cardimages/Kedarnath.JPG";

const UpcomingTripsCrousel = () => {
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
        
        <div className="-bottom-36 w-full mx-auto">
          <div className="flex items-center justify-between w-full mb-4">
            <h3 className="text-xl md:text-2xl lg:text-2xl flex flex-row gap-1">
              UpComing Community Trips
              <span className='lucide -mt-3 lucide-sparkles h-4 w-4 text-[#36a39e] shrink-0'><i className="pi pi-sparkles" style={{ fontSize: '1rem' }}></i></span>
            </h3>
          </div>

          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {cardData.map((card) => (
                <CarouselItem
                  key={card.id}
                  className="pl-1 md:basis-1/5 lg:basis-1/5 "
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

                          <Link href="/destination/upcomingtrip">
                            <button className="h-fit w-fit px-4 py-1.5 hover:bg-[#36a39e] text-white text-sm font-semibold bg-[#0b8d7c] rounded-md relative top-[4px] group-hover:top-0 transition-all duration-200 ease-in-out">
                              View Trips
                            </button>
                          </Link>
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

export default UpcomingTripsCrousel;
