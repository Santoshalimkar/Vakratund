"use client";

import React, { useState } from "react";
import Image from "next/image";
import HeroImage from "../../public/Cardimages/BaliHeroImage.JPG";
import Link from "next/link";
import Bali from "../../public/Cardimages/Bali.JPG";
import BaliBikeRide from "../../public/Cardimages/BaliBikeRide.JPG";
import Instagramlogo from "../../public/Cardimages/Instagramlogo_icon.png";
import Google_Logo from "../../public/Cardimages/Google_Logo.png";
import UpcomingTripsCrousel from "./upcomingtrip/UpcomingTripsCrousel";
import "primeicons/primeicons.css";

const trips = [
  {
    id: 1,
    location: "Denpasar",
    price: 50000,
    discountedPrice: 42000,
    from: "Pune",
    duration: "6N/7D",
    type: "Group Trip",
    imageUrl: Bali,
  },
  // Add more trip objects as needed
  {
    id: 2,
    location: "Bali",
    price: 60000,
    discountedPrice: 50000,
    from: "Mumbai",
    duration: "7N/8D",
    type: "Family Trip",
    imageUrl: HeroImage,
  },
  {
    id: 3,
    location: "Spiti Valley",
    price: 50000,
    discountedPrice: 10000,
    from: "Goa",
    duration: "7N/8D",
    type: "Solo Trip",
    imageUrl: BaliBikeRide,
  },
];

const Hero = () => {
  const [showFullText, setShowFullText] = useState(false);

  // Handler to toggle text display
  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="relative">
      {/* Hero Part */}
      <div className="sticky top-16 sm:top-0 h-[85vh] sm:h-[75vh] flex items-center justify-center">
        <Image
          className="object-cover h-full absolute bg-transparent"
          src={HeroImage}
          alt="Hero"
        />

        <div className="bg-black/25 h-full w-full absolute top-0 left-0"></div>

        <div className="h-full w-full max-w-7xl mx-auto relative px-6 md:px-8 lg:px-10 xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-1 relative h-full w-full px-6 xl:px-0">
            <div className="h-full w-full flex flex-col gap-2 justify-center items-center">
              <h2 className="text-3xl lg:text-4xl xl:text-6xl font-bold text-center text-white">
                Bali Tour Packages
              </h2>
              <p className="text-sm sm:text-base px-2 md:px-4 capitalize py-5 mt-2 lg:py-1 bg-[#0b8d7c] rounded-3xl text-white font-medium text-center">
                Discover Bali's Beauty with Desh Videsh: Your Gateway to Island
                Bliss
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-2 left-0 h-full text-white w-full flex flex-col justify-end pb-32 items-center">
          <div className=" opacity-1 transform-none will-change-auto">
            <div className="grid grid-cols-2">
              <div className="flex gap-2 ">
                <h1 className="lg:h-14 lg:w-14 md:h-12 md:w-12 h-10 w-10 shrink-0">
                  <Image src={Instagramlogo}/>
                </h1>
                <div className="flex flex-col justify-center">
                  <span className="text-xl lg:text-2xl font-bold leading-none">
                    <span className="inline-block tabular-nums undefined">
                      90000+
                    </span>
                  </span>
                  <span className="text-sm lg:text-lg leading-none">
                    Followers
                  </span>
                </div>
              </div>
              <div className="flex gap-4">
              <h1 className="lg:h-14 lg:w-14 md:h-12 md:w-12 h-10 w-10 shrink-0 ">
                  <Image src={Google_Logo}/>
                </h1>
                <div className="flex flex-col justify-center mr-2">
                  <span className="text-xl lg:text-2xl font-bold leading-none">
                    <span className="inline-block tabular-nums undefined">
                      1000+
                    </span>
                  </span>
                  <span className="text-sm lg:text-lg leading-none">
                    Review
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 pb-20 md:pt-14 bg-white relative flex flex-col">
        <div className="h-full w-full max-w-7xl mx-auto relative md:px-8 lg:px-10 flex flex-col gap-20 px-6 xl:px-0">
          <div className="relative bg-white rounded-2xl shadow-[0px_4px_30px_0px_rgba(0,0,0,0.15)] p-8 flex flex-col gap-6">
            <h2 className="flex flex-row gap-1 text-2xl md:text-3xl lg:text-3xl font-bold">
              {" "}
              About Bali Tour Packages{" "}
              <span className="lucide -mt-3 lucide-sparkles h-4 w-4 text-[#36a39e] shrink-0">
                <i className="pi pi-sparkles" style={{ fontSize: "1rem" }}></i>
              </span>
            </h2>

            <div
              className={`text-sm md:text-base lg:text-lg font-medium text-text-color space-y-2 ${
                showFullText ? "" : "line-clamp-3"
              }`}
            >
              <p>
                Embark on an unforgettable journey to the exotic island paradise
                of Bali with Desh Videsh's expertly crafted tour packages.
                Nestled in the heart of Indonesia, Bali beckons with its
                pristine beaches, lush landscapes, and vibrant culture. Explore
                the vibrant city of Denpasar, where traditional Balinese
                architecture blends seamlessly with modern amenities. Wander
                through bustling markets, sample delicious street food, and
                immerse yourself in the island's rich cultural heritage. Embark
                on an unforgettable journey to the exotic island paradise of
                Bali with Desh Videsh's expertly crafted tour packages. Nestled
                in the heart of Indonesia, Bali beckons with its pristine
                beaches, lush landscapes, and vibrant culture. Explore the
                vibrant city of Denpasar, where traditional Balinese
                architecture blends seamlessly with modern amenities. Wander
                through bustling markets, sample delicious street food, and
                immerse yourself in the island's rich cultural heritage.
              </p>
            </div>

            <div className="w-full flex justify-center">
              <button onClick={toggleText}>
                <div className="h-fit w-fit text-[#36a39e] px-4 py-1.5 lg:px-5 lg:py-2 text-sm font-semibold border border-[#0b8d7c] rounded-lg">
                  {showFullText ? "View Less" : "View More"}
                </div>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex items-center justify-between w-full">
              <h3 className="text-xl md:text-2xl lg:text-2xl flex flex-row gap-1">
                {" "}
                {trips.length} Trips Found{" "}
                <span className="lucide -mt-3 lucide-sparkles h-4 w-4 text-[#36a39e] shrink-0">
                  <i className="pi pi-search" style={{ fontSize: "1rem" }}></i>
                </span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 px-2 md:px-0">
              {trips.map((trip) => (
                <div
                  key={trip.id}
                  className="z-0 group flex flex-col duration-150 ease-in-out border-opacity-0 hover:border-opacity-20 transition-all rounded-lg overflow-hidden shadow-[2px_2px_2px_2px_rgba(11,141,124,0.10)] border"
                >
                  <div className="relative h-52 w-full z-0">
                    <div className="bg-[#0b8d7c] absolute text-white py-0.5 text-sm px-3 rounded-l-md top-2 right-0 z-10">
                      <p className="flex items-center gap-1"> {trip.type}</p>
                    </div>
                    <div className="relative group h-52 z-0 w-full overflow-hidden">
                      <div className="overflow-hidden">
                        <div className="flex -ml-4 z-0">
                          <div className="min-w-0 shrink-0 grow-0 basis-full pl-4 h-full relative w-full min-h-52 z-0">
                            <Link href="/destination/details">
                              <Image
                                src={trip.imageUrl}
                                className="object-cover object-center"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  color: "transparent",
                                }}
                              />

                              <div className="absolute z-0 top-0 left-0 w-full h-full group-hover:bg-black/10 flex items-center justify-center duration-150 ease-in-out transition-all"></div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/destination/details"
                    className="flex flex-col px-4 pt-4"
                  >
                    <div className="p-2 border border-primary-main shadow-sm flex items-baseline justify-center gap-2 bg-[#0b8d7c] rounded h-full w-full max-w-[95%] mx-auto text-white relative -top-9">
                      <div className="h-fit w-fit shrink-0 text-xs relative font-sans">
                        <span>{trip.discountedPrice} /-</span>
                        <span className="h-[1px] w-full bg-[#F50F0F] absolute top-1/2 left-0 -rotate-6 -translate-y-1/2"></span>
                      </div>
                      <p className="text-lg min-w-24 font-bold">
                        {trip.price}/-
                      </p>
                    </div>
                    <div className="-mt-4 cursor-default">
                      <button>
                        <h3 className="text-black text-xl font-bold line-clamp-1 text-start cursor-pointer">
                          {trip.location}
                        </h3>
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-y-2 -mt-14 justify-center">
                      <div className="flex gap-1 items-center justify-start cursor-default">
                        <button>
                          <div className="flex flex-row gap-1 items-center justify-start w-fit cursor-pointer">
                            <span className="line-clamp-1 text-sm font-medium text-black justify-center">
                              {trip.from}
                            </span>
                          </div>
                        </button>
                      </div>

                      <div className="flex gap-1 items-center justify-center">
                        <svg>1</svg>
                        <span className="text-sm font-medium text-text-color">
                          {trip.duration}
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="flex flex-row w-full h-full gap-2 pb-4 -mt-10">
                    <div className="flex flex-row items-center gap-2 mx-auto text-white font-semibold text-sm col-span-2 text-center w-full min-w-fit rounded-md shrink-0 duration-300 ease-in-out transition-all justify-between">
                      <Link
                        href="/destination/details"
                        className="flex flex-row items-center font-sans gap-1 text-white font-semibold text-sm col-span-2 max-w-fit text-center w-full min-w-fit bg-[#0b8d7c] ml-3 px-4 py-2 rounded-md shrink-0 duration-300 ease-in-out transition-all hover:bg-primary-dark"
                      >
                        More Details{" "}
                        <span className="lucide  lucide-sparkles h-4 w-4 shrink-0">
                          <i
                            className="pi pi-angle-down
"
                            style={{ fontSize: "1rem" }}
                          ></i>
                        </span>
                      </Link>
                      <div className="flex flex-row items-center w-full justify-end">
                        <Link
                          href="/destination/details"
                          className="flex items-center  font-sans gap-1 w-max h-fit mr-3 text-white hover:text-white bg-[#0b8d7c] px-4 py-2 rounded-md shrink-0 duration-300 ease-in-out transition-all hover:bg-[#0b8d7c]"
                        >
                          Enquiry{" "}
                          <span className="lucide  lucide-sparkles h-4 w-4 shrink-0">
                            <i
                              className="pi pi-whatsapp"
                              style={{ fontSize: "1rem" }}
                            ></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
