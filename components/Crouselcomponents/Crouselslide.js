"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { CldImage } from 'next-cloudinary';
import Image from "next/image";

const Crouselslide = () => {
  const [cardData, setCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch("/api/Packages");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log("Fetched cardData:", data.data); // Log the fetched data
        setCardData(data.data || []);
      } catch (error) {
        console.error("Error fetching packages:", error);
      } finally {
        setIsLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchPackages();
  }, []);

  return (
    <div className="back w-full flex flex-col justify-center items-center container md:p-10 lg:p-10 p-2">
      <div className="flex flex-col justify-start items-start pb-2 md:pb-4 lg:pb-4 text-start w-full py-2">
        <h1 className="md:text-3xl lg:text-4xl text-xl boxShadow font-bold text-black">
          Explore India
        </h1>
        <p className="boxShadow text-sm text-black">
          A Journey Through Time, Colour And Culture
        </p>
      </div>

      <div className="md:flex lg:flex flex-col justify-center items-center h-[30rem] relative w-full hidden">
        <video
          muted
          loop
          height={400}
          autoPlay
          className="object-cover w-full mx-auto rounded-xl brightness-50"
          src="https://d1c8wbldjj3tey.cloudfront.net/category-section/india_(1)+(540p).mp4"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 justify-center items-center px-4 text-center">
          <h1 className="text-[44px] boxShadow font-bold text-white">
            Explore India
          </h1>
          <p className="boxShadow text-xl text-white">
            A Journey Through Time, Colour And Culture
          </p>
        </div>
        <div className="absolute -bottom-36 w-11/12 mx-auto">
          {isLoading ? (
            <p className="text-black text-2xl -mt-40">Loading...</p> // Loading indicator
          ) : (
            <Carousel className="w-full">
              <CarouselContent>
                {Array.isArray(cardData) && cardData.length > 0 ? (
                  cardData.map((card) => (
                    <CarouselItem
                      key={card._id}
                      className="flex justify-center gap-2 md:basis-1/3 lg:basis-1/5"
                    >
                      <div className="p-1">
                        <Card className="w-48 h-60 relative overflow-hidden group">
                          <div className="h-full w-full absolute top-0 left-0 bg-black/25 group-hover:bg-black/65 transition-all duration-300 ease-in-out"></div>
                          <div
                            // className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-50"
                            // style={{
                            //   backgroundImage: `url(${card.thumbnailImage})`,
                            //   backgroundSize: "cover",
                            //   backgroundPosition: "center",
                            // }}       
                            
                          ><Image width={100} height={100} className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-50 h-full w-full object-fill" src={card.thumbnailImage}/></div>
                          <CardContent className="relative flex flex-col items-center justify-center p-4 mt-[220px]">
                            <div className="h-fit w-full p-2 flex flex-col items-center transition-all duration-300 ease-in-out absolute -bottom-10 left-1/2 -translate-x-1/2 group-hover:-translate-y-1/2 group-hover:bottom-0 pb-4 text-white">
                              <h3 className="text-xl md:text-2xl xl:text-2xl textShadow font-bold text-center">
                                {card.packageName}
                              </h3>
                              <p className="text-white whitespace-nowrap boxShadow shadow-2xl mb-4">
                                Starting Price: Rs.{card.startingPrice}
                              </p>
                              <Link href={`/destination/${card._id}`}>
                                <button className="h-fit w-fit px-4 py-1.5 hover:bg-[#0b8d7c] text-white text-sm font-semibold bg-[#36a39e] rounded-md relative top-[4px] group-hover:top-0 transition-all duration-200 ease-in-out">
                                  View Trips
                                </button>
                              </Link>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))
                ) : (
                  <p>No data available</p>
                )}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          )}
        </div>
      </div>

      <div className="mx-auto lg:hidden md:hidden flex w-full">
        {isLoading ? (
          <p className="text-xl">Loading...</p> // Loading indicator for mobile view
        ) : (
          <Carousel className="w-full">
            <CarouselContent>
              {cardData.map((card) => (
                <CarouselItem
                  key={card._id}
                  className="flex justify-center gap-2 basis-1/2 md:basis-1/3 lg:basis-1/5"
                >
                  <div className="p-1">
                    <Card className="w-[10.5rem] h-60 relative overflow-hidden group">
                      <div className="h-full w-full absolute top-0 left-0 bg-black/25 group-hover:bg-black/65 transition-all duration-300 ease-in-out"></div>
                      <div
                      //   className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-50"
                      //   style={{
                      //     backgroundImage: `url(${card.thumbnailImage})`,
                      //     backgroundSize: "cover",
                      //     backgroundPosition: "center",
                      //   }}
                      // />
                      ><Image width={100} height={100} className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-50 h-full w-full object-fill" src={card.thumbnailImage}/></div>

                      <CardContent className="relative flex flex-col items-center justify-center p-4 mt-[220px]">
                        <div className="h-fit w-full p-2 flex flex-col items-center transition-all duration-300 ease-in-out absolute -bottom-10 left-1/2 -translate-x-1/2 group-hover:-translate-y-1/2 group-hover:bottom-0 pb-4 text-white">
                          <h3 className="text-xl md:text-2xl xl:text-2xl textShadow font-bold text-center">
                            {card.packageName}
                          </h3>
                          <p className="text-white text-xs whitespace-nowrap boxShadow shadow-2xl mb-4">
                            {card.startingPrice}
                          </p>
                          <Link href={`/destination/${card._id}`}>
                            <button className="h-fit w-fit px-4 py-1.5 hover:bg-[#0b8d7c] text-white text-sm font-semibold bg-[#36a39e] rounded-md relative top-[4px] group-hover:top-0 transition-all duration-200 ease-in-out">
                              View Trips
                            </button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden" />
            <CarouselNext className="hidden" />
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default Crouselslide;
