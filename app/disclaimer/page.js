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
            Disclaimer

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
                    
                    <h2 className="text-xl md:text-2xl lg:text-4xl font-bold flex flex-row gap-1 text-black">
                    Disclaimer

                      <span className="lucide -mt-6 lucide-sparkles h-4 w-4 text-[#36a39e] shrink-0">
                        <i
                          className="pi pi-sparkles"
                          style={{ fontSize: "1rem" }}
                        ></i>
                      </span>
                    </h2>
                    
                  </div>

                  
                  
                </div>
                <ul className="flex flex-col gap-4 list-decimal pl-6 md:pl-8 lg:pl-10">

                        <li>{`Vakratund Tours provides the vakratundtours.com Web site as a service to the public and Web site owners.`}</li>

                        <li>{`Vakratund Tours is not responsible for, and expressly disclaims all liability for, damages of any kind arising out of use, reference to, or reliance on any information contained within the site. While the information contained within the site is periodically updated, no guarantee is given that the information provided in this Website is correct, complete, and up-to-date.`}</li>
                        <li>{`Although the Vakratund Tours Website may include links providing direct access to other Internet resources, including Web sites, Vakratund Tours is not responsible for the accuracy or content of information contained in these sites.`}</li>
                        <li>{`Links from vakratundtours.com to third-party sites do not constitute an endorsement by Vakratund Tours of the parties or their products and services. The appearance on the Web site of advertisements and product or service information does not constitute an endorsement by Vakratund Tours.`}</li>
                    </ul>

                
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
