import React from "react";
import AboutUsTabs from "./AboutUsTabs";
import AboutJourney from "./AboutJourney";

const Aboutus = () => {
  return (
    <div>
      <div className="h-full  w-full max-w-7xl mx-auto relative md:px-8 lg:px-10 flex flex-col gap-8 items-center justify-center pt-8 md:pb-10 lg:pb-10 pb-4 px-6 xl:px-0">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-bold flex flex-row gap-2 text-black">
          Why Travelers Love Us{" "}
          <span className="lucide -mt-3 lucide-sparkles h-4 w-4 text-[#36a39e] shrink-0">
            <i className="pi pi-sparkles" style={{ fontSize: "1rem" }}></i>
          </span>
        </h2>
        <p className="text-sm md:text-base lg:text-lg font-medium text-center md:text-start text-text-color -mt-4 leading-7 -tracking-tighter">
          Elevate Your Adventures: Choose Vakaratund for Unforgettable Journeys
        </p>
      </div>

      <AboutUsTabs />
      <AboutJourney />
    </div>
  );
};

export default Aboutus;
