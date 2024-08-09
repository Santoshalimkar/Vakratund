"use client";

import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import lehladakh from "../../public/Cardimages/lehladak.jpg";
import Kashmir from "../../public/Cardimages/Kashmir.jpg";
import Meghalaya from "../../public/Cardimages/Meghalaya.JPG";
import Bali from "../../public/Cardimages/Bali.JPG";
import Goa from "../../public/Cardimages/Goa.JPG";
import Kedarnath from "../../public/Cardimages/Kedarnath.JPG";

const RomanticEscape = () => {
  const cardData = [
    {
      id: 1,
      title: "Bali",
      description: "Starting Price Rs.21,999 ",
      imageUrl: lehladakh,
    },
    {
      id: 2,
      title: "Singapore",
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
      title: "Thailand",
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
      title: "Andaman",
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
    <div className="back2 w-full  flex flex-col justify-center items-center container md:p-10 lg:p-10 p-2 mb-28 ">
      <div className="flex flex-col  justify-start items-start pb-2 md:pb-4 lg:pb-4 text-start w-full py-2">
        <h1 className="md:text-3xl lg:text-4xl text-xl boxShadow font-bold text-black">
        Romantic Escapes
        </h1>
        <p className="boxShadow text-sm text-black">
        Where Forever Begins...Together!
        </p>
      </div>

      <div className=" md:flex lg:flex flex-col justify-center items-center  h-[30rem] relative w-full hidden ">
        <video
          muted
          loop
          height={400}
          autoPlay
          className="object-cover w-full mx-auto rounded-xl brightness-50  "
          src="https://d1c8wbldjj3tey.cloudfront.net/category-section/honeymoon_(1)+(540p).mp4"
        />
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 justify-center items-center px-4 text-center">
          <h1 className="text-[44px] boxShadow font-bold text-white">
          Romantic Escapes
          </h1>
          <p className="boxShadow text-xl text-white">
          Where Forever Begins...Together!
          </p>
        </div>
        <div className="absolute -bottom-36 w-11/12 mx-auto ">
          <Carousel className="w-full">
            <CarouselContent className="">
              {cardData.map((card) => (
                <CarouselItem
                  key={card.id}
                  className=" flex justify-center gap-2  md:basis-1/3 lg:basis-1/5"
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

                          <Link href="/honeymoon-packages">
                            <button className="h-fit w-fit px-4 py-1.5 hover:bg-[#0b8d7c] text-white text-sm font-semibold bg-[#36a39e] rounded-md relative top-[4px] group-hover:top-0 transition-all duration-200 ease-in-out">
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

      <div className="mx-auto lg:hidden md:hidden flex w-full">
        <Carousel className="w-full">
          <CarouselContent className="">
            {cardData.map((card) => (
              <CarouselItem
                key={card.id}
                className=" flex justify-center gap-2 basis-1/2  md:basis-1/3 lg:basis-1/5"
              >
                <div className="p-1 ">
                  <Card className="w-[10.5rem] h-60 relative overflow-hidden group ">
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
                        <p className="text-white text-xs whitespace-nowrap boxShadow shadow-2xl mb-4">
                          {card.description}
                        </p>

                        <Link href="/destination">
                          <button className="h-fit w-fit px-4 py-1.5 hover:bg-[#0b8d7c] text-white text-sm font-semibold bg-[#36a39e] rounded-md relative top-[4px] group-hover:top-0 transition-all duration-200 ease-in-out">
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
          <CarouselPrevious className="hidden" />
          <CarouselNext className="hidden" />
        </Carousel>
      </div>
    </div>
  );
};

export default RomanticEscape;
