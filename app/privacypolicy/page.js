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
            Privacy Policy
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
                    Our Privacy Policy

                      <span className="lucide -mt-6 lucide-sparkles h-4 w-4 text-[#36a39e] shrink-0">
                        <i
                          className="pi pi-sparkles"
                          style={{ fontSize: "1rem" }}
                        ></i>
                      </span>
                    </h2>
                    
                  </div>

                  
                  
                </div>
               

<div className="flex flex-col gap-6">

    <h3 className=" md:text-xl lg:text-2xl font-semibold text-black">

    Information We Collect:
    </h3>

    <ul className="flex flex-col gap-4 list-decimal pl-6 md:pl-8 lg:pl-10">
        <li className="">Personal Information: When you sign up for our services, we may collect personal information such as your name, email address, phone number, and payment details.</li>
        <li>Travel Preferences: We may collect information about your travel preferences and interests to tailor our services to meet your needs.</li>
        <li>Communication Data: This includes any communication you have with us, whether through email, chat, or other means.</li>
        <li>Website Usage Data: We may collect data on how you interact with our website, such as your IP address, browser type, and pages visited.</li>
    </ul>

</div>

<div className="flex flex-col gap-6">

    <h3 className=" md:text-xl lg:text-2xl font-semibold text-black">

    How We Use Your Information:
    </h3>

    <ul className="flex flex-col gap-4 list-decimal pl-6 md:pl-8 lg:pl-10">
        <li className="">To Provide Services: We use your information to fulfill your travel bookings, communicate with you about your trips, and provide customer support.</li>
        <li>Personalization: We may use your information to personalize your experience and tailor our services to your preferences.</li>
        <li>Marketing: With your consent, we may send you promotional emails about our latest offers, trips, and services.</li>
        <li>Analytics: We may analyze website usage data to improve our website, services, and marketing efforts.</li>
        <li className="">Legal Compliance: We may use your information to comply with legal obligations or respond to lawful requests.</li>
    </ul>

</div>
<div className="flex flex-col gap-6">

    <h3 className=" md:text-xl lg:text-2xl font-semibold text-black">

    Data Sharing:
    </h3>

    <ul className="flex flex-col gap-4 list-decimal pl-6 md:pl-8 lg:pl-10">
        <li className="">Third-Party Service Providers: We may share your information with trusted third-party service providers who assist us in providing our services, such as payment processors, marketing agencies, and customer support providers.</li>
        <li>Legal Requirements: We may disclose your information when required by law or to protect our rights, property, or safety, or that of others.</li>
        <li>Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</li>
        
    </ul>

</div>
<div className="flex flex-col gap-6">

    <h3 className=" md:text-xl lg:text-2xl font-semibold text-black">

    Data Retention:
    </h3>

    <ul className="flex flex-col gap-4 list-decimal pl-6 md:pl-8 lg:pl-10">
        <p className="">We will retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
    </ul>

</div>
<div className="flex flex-col gap-6">

    <h3 className=" md:text-xl lg:text-2xl font-semibold text-black">

    Your Rights:
    </h3>

    <p className="-mt-4">You have the right to access, correct, or delete your personal information. You may also object to the processing of your data or request its transfer.  </p>
    <p>You can unsubscribe from marketing communications at any time by clicking the unsubscribe link in the emails we send you.</p>

</div>
<div className="flex flex-col gap-6">

    <h3 className=" md:text-xl lg:text-2xl font-semibold text-black">

    Security Measures:
    </h3>
<p className="">We implement industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, or destruction.</p>
<p className="-mt-4">However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

</div>
                
<div className="flex flex-col gap-6">

    <h3 className=" md:text-xl lg:text-2xl font-semibold text-black">

    Children's Privacy:
    </h3>
<p className="">Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.</p>

</div>
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
