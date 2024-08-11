"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function AboutUsTabs() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const totalItems = api.scrollSnapList().length;
    setCount(totalItems);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const reviews = [
    {
      title: "No Third Party Mess",
      pic: "https://wanderon.in/assets/images/sauceBg1.svg",
      text: "100 percent in-house operations for all trips! No third parties involved, hence no fishy claims!",
    },
    {
      title: "Transparency & Security",
      pic: " https://wanderon.in/assets/images/sauceBg2.svg",
      text: `Real time monitoring of all trips by ground team! All routes and weather conditions are accurately updated!`,
    },
    {
      title: "Co-Travelers Filtering",
      pic: "https://wanderon.in/assets/images/sauceBg3.svg",
      text: `Multi-step filtering to bring only like-minded people together! That’s our key to have fuss-free trips!`,
    },
    {
      title: "One Stop Hassle Free Experience",
      pic: "https://wanderon.in/assets/images/sauceBg4.svg",
      text: `Comfortable stays, trained drivers, hospitable staff and friendly trip leaders put together that one memorable trip for you!
`,
    },
  ];



  //   https://wanderon.in/assets/images/sauceBg2.svg
  return (
    <div className="back">
      <div className="flex justify-center items-center w-11/12   mx-auto md:py-6 lg:py-6 py-12">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
          }}
          className=" w-full  py-4   "
        >
          <CarouselContent>
            {reviews.map((value, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/4 lg:basis-1/4 sm:basis-1/2   h-auto"
              >
                <div>
                  <Card className="rounded-3xl border lg:h-80 md:h-80 w-full relative  border-foreground-300 flex justify-center items-start">
                    <CardContent className="flex flex-col gap-4  items-center justify-center ">
                      <Image
                        className="pt-4 object-fill h-full w-full"
                        height={50}
                        width={50}
                        size="lg"
                        src={value.pic}
                      />
                      <div className="absolute top-4 p-4">

                      <p className="text-2xl font-semibold text-[#36a39e]">
                        {value.title}
                      </p>
                      
                      <p className="text-justify mt-4 font-medium text-sm text-gray-400">
                        {value.text}
                      </p>

                      </div>

                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="md:hidden lg:hidden absolute  transform -translate-x-1/2 -translate-y-1/2 left-1/2 right-1/2 -bottom-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
