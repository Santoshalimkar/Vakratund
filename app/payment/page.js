"use client";

import React, { useState } from "react";
import Image from "next/image";
import HeroImage from "../../public/Cardimages/BlurHill.JPG";
import GooglePay from "../../public/Cardimages/GooglePay.jpeg";

import "primeicons/primeicons.css";

const Hero = () => {
  const [showFullText, setShowFullText] = useState(false);

  // Handler to toggle text display
  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="relative">
      {/* Hero Part */}

      <div className="sticky top-16 sm:top-0 h-[400px] md:h-[400px] flex items-center justify-center">
        <Image
          className="object-cover  absolute bg-transparent"
          style={{ height: "100%", width: "100%" }}
          src={HeroImage}
          alt="Hero"
        />

        <div className="bg-black/25 h-full w-full absolute top-0 left-0"></div>

        <div className="relative bg-white/10 backdrop-blur-sm border border-white/50 rounded-xl h-fit md:h-1/3 lg:h-1/4 w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 py-8  md:py-0 px-4 md:px-0">
          <div className="flex flex-col gap-2 md:w-3/4 lg:w-2/3 h-full items-center justify-center mx-auto text-white">
            <h2 className="text-3xl lg:text-4xl xl:text-4xl text-center font-[600]">
              Payment Details
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-white sticky top-16">

   
                    


        <section className="z-0 relative px-1 md:px-4 lg:px-0 bg-white/20">
          <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10">
            {" "}
          </div>

          <div className="container mx-auto z-0">
            <div className="py-24 relative">
              <div className="h-full w-full max-w-7xl mx-auto relative md:px-8 lg:px-10 xl:px-0 flex flex-col gap-10 px-0">
                <div className="flex flex-col mb-10 lg:gap-2 relative after:absolute after:h-full after:left-0 pl-4 after:w-2 after:bg-[#36a39e]">
                  <div className="flex flex-row whitespace-nowrap gap-5 items-center justify-start">
                    <span className="lucide  lucide-sparkles h-4 -mt-4 w-4 text-[#36a39e] shrink-0">
                      <i
                        className="pi pi-indian-rupee"
                        style={{ fontSize: "2rem", fontWeight: "bold" }}
                      ></i>
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-bold flex flex-row gap-2">
                      Pay us At{" "}
                      <span className="lucide -mt-6 lucide-sparkles h-4 w-4 text-[#36a39e] shrink-0">
                        <i
                          className="pi pi-sparkles"
                          style={{ fontSize: "1rem" }}
                        ></i>
                      </span>
                    </h2>
                  </div>
                  <h4 className="text-text-color ml-4 text-sm md:text-base lg:text-lg capitalize __className_1fc36d">
                    Here, you can find the details for making payments to
                    Vakratund Tours, including bank account information and
                    other important details.
                  </h4>
                </div>

                <section className="grid grid-cols-5 w-full gap-4 md:gap-10 rounded-lg pb-6 bg-slate-50 shadow-md px-2 py-6 md:px-4 md:py-14">
                  <div className="flex flex-col col-span-5 items-start gap-8 py-1 px-2">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8 w-full">
                      <div className="flex flex-col gap-2 w-full">
                        <h3 className="text-lg flex flex-row justify-between items-center md:text-xl rounded-lg lg:text-2xl font-semibold text-white px-4 py-1 bg-[#36a39e]">
                          Bank Transfer
                          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50 relative z-10 h-6 w-6 text-zinc-50 [&_svg]:h-3 [&_svg]:w-3"></button>
                        </h3>

                        <div className="flex flex-col gap-2">
                          {" "}
                          <p className="px-2 md:px-4 py-2 bg-gray-100 rounded-lg text-sm md:text-base lg:text-lg">
                            <b className="font-semibold text-black">
                              Account Name:{" "}
                            </b>
                            Vishal Balu Ambekar <br />
                            <b className="font-semibold text-black">
                              Bank Account Number:
                            </b>
                            583902010012450
                            <br />
                            <b className="font-semibold text-black">
                              IFSC/NEFT Code:
                            </b>
                            UBIN0558397
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 w-full ">
                        <h3 className="text-lg flex flex-row justify-between items-center md:text-xl rounded-lg lg:text-2xl font-semibold text-white px-4 py-1 bg-[#36a39e]">
                          UPI Transfer
                        </h3>
                        {/* <p className="px-2 md:px-4 py-2 bg-gray-100 rounded-lg text-sm md:text-base lg:text-lg">
                          <b className="font-semibold text-black">
                            UPI ID: vishalambekar712-@okaxis
                          </b>
                        </p> */}
<div>

  
</div>
<Image
          className="object-fill bg-transparent p-5"
          
          src={GooglePay}
          alt="Hero"
        />

                     
                      </div>
                    </div>

                     
                  </div>

                  <div className="border col-span-5 border-red-800 bg-red-100 text-red-800 px-2 py-1 rounded-lg relative">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold py-1">
                      <ul className="mt-4 flex flex-col list-disc pl-6 gap-2 text-sm md:text-base lg:text-lg capitalize">
                        <li className="text-sm md:text-base">
                          {" "}
                          For secure transactions, please make payments
                          exclusively to the official bank details listed on our
                          website.
                        </li>
                        <li className="text-sm md:text-base">
                          Payments made to any other account will not be our
                          responsibility, and we cannot compensate for any
                          losses incurred from such transactions.
                        </li>
                        <li className="text-sm md:text-base">
                          For any questions or concerns, please contact us at
                          &nbsp; &nbsp;
                          <span className="underline underline-offset-2">
                            9284205536
                          </span>
                        </li>
                      </ul>
                    </h3>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
