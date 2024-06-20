import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { Card, CardContent } from "@/components/ui/card"

const Crouselslide = () => {
  return (
    <div className="back w-full h-screen flex justify-center items-center">
      <div className="relative flex flex-col justify-center items-center">
        <video
          muted
          loop
          height={100}
          autoPlay
          className="object-cover w-full mx-auto rounded-xl "
         src="https://d1c8wbldjj3tey.cloudfront.net/category-section/international_(1)+(540p).mp4"
        />
         
         <div className="absolute -bottom-36 w-11/12 mx-auto">
         <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/5 lg:basis-1/5">
            <div className="p-1">
              <Card className="w-40 h-52">
                <CardContent className="flex  items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
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
