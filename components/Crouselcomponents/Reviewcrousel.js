"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaStar } from "react-icons/fa6";
import { Avatar, Divider } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import logo from "../../public/Navabar/Logo2.png";

const Reviewcrousel = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const reviews = [
    {
      name: "Sandeep Kadam",
      title: "Maval",
      pic: "https://res.cloudinary.com/ddysmgao7/image/upload/v1723461021/vjekmz3ctjbrqzbhx90r.jpg",
      text: "Vakratund Tours and Adventure exceeded all my expectations! From the moment we booked our trip, the team was incredibly professional and attentive to every detail. The destinations were stunning, and the guides were knowledgeable and passionate. It truly felt like a personalized experience. Highly recommend to anyone looking for an adventure of a lifetime!",
    },
    {
      name: "Santosh Alimkar",
      title: "Touriest",
      pic: 'https://res.cloudinary.com/ddysmgao7/image/upload/v1723461333/uyvhgafwvkywjje0mry1.jpg',
      text: `Our trip with Vakratund Tours and Adventure was absolutely amazing! They managed to strike the perfect balance between thrilling adventures and comfortable accommodations. Every day was a new discovery, and the itinerary was perfectly planned. I can’t wait to book my next trip with them!`,
    },
    {
      name: "Rohit Ashok Rajivade",
      title: "Pune",
      pic: 'https://res.cloudinary.com/ddysmgao7/image/upload/v1723461894/oq5likuqyprk6uqisora.jpg',
      text: `Vakratund Tours and Adventure made our dream vacation a reality. The entire journey was seamless, and the attention to detail was impeccable. We visited breathtaking places and had experiences we’ll never forget. The team’s passion for travel really shines through in everything they do. Can’t recommend them enough!

`,
    },
    {
      name: "Rohan Kakre",
      title: "Mumbai",
      pic: logo,
      text: `From the first interaction to the last day of our trip, Vakratund Tours and Adventure provided exceptional service. The destinations were handpicked and absolutely breathtaking. The guides were friendly, knowledgeable, and went above and beyond to ensure we had an amazing time. I would recommend them to anyone looking for an unforgettable travel experience.`,
    },
    {
      name: "Rushi Kadam",
      title: "Lonavala",
      pic: logo,
      text: `What sets Vakratund Tours and Adventure apart is their commitment to creating a personalized travel experience. They listened to our preferences and curated an itinerary that matched our interests perfectly. The trip was well-organized, stress-free, and filled with unique experiences. It felt like traveling with friends rather than just a tour company.

`,
    },
  ];

  useEffect(() => {
    if (!api) return;

    const totalItems = api.scrollSnapList().length;
    setCount(totalItems);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="back">
      <div className="flex flex-col justify-center items-start gap-4 mt-16">
        <div className="w-11/12 mx-auto">
          <h6 className="font-bold text-3xl mt-8">
            Review &
            <span className="">
              {" "}
              Testimonials
              <span className="lucide absolute ml-2 -mt-3 lucide-sparkles h-4 w-4 text-[#36a39e] shrink-0">
                <i className="pi pi-sparkles" style={{ fontSize: "1rem" }}></i>
              </span>
            </span>{" "}
          </h6>
        </div>
      </div>
      <div className="flex justify-center items-center w-11/12  mx-auto  mt-4 ">
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
                className="md:basis-1/3 lg:basis-1/3 sm:basis-1/2   h-auto"
              >
                <div>
                  <Card className="rounded-3xl border back2  border-foreground-300 flex justify-center items-start">
                    <CardContent className="flex flex-col gap-4  items-center justify-center p-5">
                      <div className="flex justify-start items-center gap-2 mr-auto">
                        <Image
                          className="w-12 h-12 rounded-full"
                          size="lg"
                          object
                          src={value.pic}
                          height={60}
                          width={60}
                        />
                        <div>
                          <h6 className="text-sm font-bold">{value.name}</h6>
                          <p className="text-xs text-foreground-500 font-bold">
                            {value.title}
                          </p>
                        </div>
                      </div>
                      <p className="text-justify lg:h-44 md:h-48 h-52 break-all leading-5 font-medium text-xs">
                        {value.text}
                      </p>
                      {/* <Divider
                        orientation="horizontal"
                        className="w-11/12 mx-auto bg-foreground-400"
                      /> */}
                      {/* <div className="flex justify-center items-center gap-2 text-2xl">
                        <FaStar className="text-[#FFB300]" />
                        <FaStar className="text-[#FFB300]" />
                        <FaStar className="text-[#FFB300]" />
                        <FaStar className="text-[#FFB300]" />
                        <FaStar className="text-[#FFB300]" />
                      </div> */}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-[-15px] w-full flex justify-center items-center">
            {reviews.map((value, index) => (
              <div
                key={index}
                className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${
                  current === index + 1 ? "bg-buttoncolor" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Reviewcrousel;
