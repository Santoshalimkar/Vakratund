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
      name: "Kuchipudi Venkat",
      title: "CEO",
      pic: logo,
      text: "As the CEO of multiple restaurant brands, working with BRANDSAGA has been a transformative experience for our marketing strategy. Their team of professionals has a profound understanding of the influencer landscape, which has been crucial in executing campaigns that resonate deeply with our target audiences.",
    },
    {
      name: "Harleys CEO Suresh Naik",
      title: "CEO",
      pic: logo,
      text: `Partnering with BRANDSAGA has elevated our marketing initiatives to new heights. Their expertise in influencer collaboration and strategic marketing has not only enhanced our brand's visibility but has also significantly contributed to our overall business growth. I highly recommend BRANDSAGA to any business looking to forge meaningful connections with their audience through influencer marketing`,
    },
    {
      name: "F cafe and Bar",
      title: "Cafe",
      pic: logo,
      text: `The content created in collaboration with their handpicked influencers has not only been authentic and engaging but has also translated into tangible outcomes. We've seen a significant increase in our social media engagement rates and a noticeable boost in foot traffic across our locations. Their ability to track campaign performance with comprehensive metrics has allowed us to see the ROI clearly and adjust our strategies dynamically.`,
    },
    {
      name: "String Metaverse",
      title: "Brand",
      pic: logo,
      text: `Their selection of influencers was impeccable. BRANDSAGA has access to a diverse network of influencers, and they matched us with individuals who not only had significant reach but also aligned perfectly with our brand values. This alignment ensured that the promotions felt genuine and resonated strongly with potential customers, driving both engagement and conversion.`,
    },
    {
      name: "Brandorigin",
      title: "Brand",
      pic: logo,
      text: `The campaign performance was tracked meticulously, and the transparency with which data was shared helped us understand the impact of each element of the campaign. This data-driven approach was invaluable as it allowed us to iterate quickly and optimize our strategies in real time`,
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
                          className="w-16 h-16 rounded-full"
                          size="lg"
                          src={value.pic}
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
