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
            TERMS & CONDITIONS
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
                    Our TERMS & CONDITIONS
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

                        <li>The photos/videos content created on Vakratund Tours & Adventure trip (by Vakratund Tours & Adventure content creators or clients) is the property of Vakratund Tours & Adventure can only be used by Vakratund Tours & Adventure Experiences for advertising across media platforms. None of the digital content can be used by anyone for advertising/commercial use without obtaining the rightful permissions by Vakratund Tours & Adventure.</li>

                        <li >Full Payment of the trip cost must be completed before the trip begins. Pending Payments may eventually lead to the cancellation of the trip.</li>

                        <li>The IDs shall all be verified before boarding. No boarding shall be entertained without a valid Govt. ID.</li>
                        <li>The Transfer of the bookings is not permitted. Only the names mentioned at the time of confirmation shall be allowed to travel.</li>
                        <li>People traveling with Vakratund Tours & Adventure for International travel are advised that their passport must be valid for at least six (6) months from the date of intended travel and not damaged in any way. Vakratund Tours & Adventure does not take any responsibility for clients who book travel with passports that do not meet this requirement. It is the responsibility of the client to ensure that their passport is valid for the required period before making any travel bookings through Vakratund Tours & Adventure. Any denial of entry at immigration, and any additional cost arising out of alternate arrangements for deporting has to be borne by the travellers.</li>
                        <li>No refunds shall be made towards any inclusion(s) not availed by the Client.</li>
                        <li>Travellers must take care of their luggage & belongings. The management shall not be responsible for any damage or any missing items along the tour.</li>
                        <li>The time of Departure is stated & fixed. All travelers must update their status with the Trip coordinator(s), & report at the pickup point 30 mins prior to the scheduled departure.</li>
                        <li>The Air Conditioning will be switched off in the hills. Also, during the trip, it shall be the Driver’s discretion to put off the AC as & when required, considering the travelers’ safety & ease of travel along uneven & dangerous routes.</li>
                        <li>Our time of departure is fixed must depart by the stated time & keep their status updated with the trip coordinator(s). Anyone missing the bus shall not be eligible for any refunds. We shall call you twice before the schedule departure.</li>
                        <li>Drinking & Smoking are strictly prohibited along the tour due to health & safety concerns. Our tours involve physically demanding activities such as trekking, and camping at high altitudes, and we recommend that you be in the right shape to make the most of them.</li>
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
