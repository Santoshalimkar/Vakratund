"use client";

import React, { useEffect, useState } from "react";
import { ProgressSpinner } from 'primereact/progressspinner';
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


const UpcomingTripsCarousel = () => {
  const [cardData, setCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch("/api/upcomingtrip");
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
    <div className="back md:py-14 lg:py-14 py-4 flex justify-center items-center container mx-auto lg:px-24 md:px-24 px-2">
      <div className="relative flex flex-col justify-center items-center w-full">
        <div className="-bottom-36 w-full mx-auto">
          <div className="flex items-center md:justify-between xl:justify-between justify-center w-full mb-4">
            <div>
              <h3 className="text-xl md:text-2xl lg:text-2xl font-bold flex flex-row gap-1">
                UpComing Community Trips
                <span className="lucide -mt-3 lucide-sparkles h-4 w-4 text-[#36a39e] shrink-0">
                  <i className="pi pi-sparkles" style={{ fontSize: "1rem" }}></i>
                </span>
              </h3>
              <h1 className="text-text-color text-sm md:text-base lg:text-lg capitalize __className_1fc36d">
                Discover the world with our curated list of upcoming trips.
              </h1>
            </div>
          </div>

          {/* Loading Spinner */}
          {isLoading ? (
             <div className="card flex justify-content-center">
             <ProgressSpinner />
         </div>
          ) : (
            <Carousel className=" w-full justify-content-center ">
            <CarouselContent >
              {cardData.map((card) => (
                <CarouselItem
                  key={card.id}
                  className="flex  gap-2 basis-1/2 md:basis-1/3 lg:basis-1/5 justify-content-center" // Add justify-center and items-center
                >
                  <div className="p-1">
                    <Card className="md:w-48 lg:w-48 w-60 h-60 relative overflow-hidden group mx-auto">
                      <div className="h-full w-full absolute top-0 left-0 bg-black/25 group-hover:bg-black/65 transition-all duration-300 ease-in-out"></div>
                      <div
                        className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-50"
                        style={{
                          backgroundImage: `url(${card.thumbnailImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                      <CardContent className="relative flex flex-col items-center justify-center p-4 mt-[220px]">
                        <div className="h-fit w-full p-2 flex flex-col items-center transition-all duration-300 ease-in-out absolute -bottom-10 left-1/2 -translate-x-1/2 group-hover:-translate-y-1/2 group-hover:bottom-0 pb-4 text-white">
                          <h3 className="text-xl md:text-2xl xl:text-2xl text-white textShadow font-bold text-center">
                            {card.packageName}
                          </h3>
                          <p className="text-white whitespace-nowrap text-xs boxShadow shadow-2xl mb-4">
                            Starting Price: Rs.{card.startingPrice}
                          </p>
                          <Link href={`/upcomingtrip/${card._id}`}>
                            <button className="h-fit w-fit px-4 py-1.5 hover:bg-[#36a39e] text-white text-sm font-semibold bg-[#0b8d7c] rounded-md relative top-[4px] group-hover:top-0 transition-all duration-200 ease-in-out">
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
            <CarouselPrevious className="hidden md:flex lg:flex" />
            <CarouselNext className="hidden md:flex lg:flex" />
          </Carousel>
          
          )}
        </div>
        <div>
          {/* <Link
            href="/"
            className="group mt-4 whitespace-nowrap flex shadow-md bg-[#36a39e] hover:bg-[#0b8d7c] px-2 justify-center rounded-xl p-1 text-sm text-white flex-row items-center gap-1 hover:gap-2 cursor-pointer transition-all duration-300 ease-in-out"
          >
            View All
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default UpcomingTripsCarousel;
