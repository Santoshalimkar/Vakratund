import Contactform from "@/components/Contactuscomponents/Contactform";
import Cardcrousel from "@/components/Crouselcomponents/Cardcrousel";
import Crouselslide from "@/components/Crouselcomponents/Crouselslide";
import Videocomponent from "@/components/Herocomponenets/Videocomponent";
import Image from "next/image";

import Aboutus from "@/components/AboutUs/Aboutus";
import ContactFormMain from "@/components/Contactuscomponents/ContactFormMain";
import WeekendTripMain from "./destination/weekendtrip/page";
import { Divider } from "@nextui-org/react";
import Whats from "../public/Navabar/whats.png"
import Link from "next/link";
import RomanticEscape from "./honeymoon-packages/RomanticEscape";

import UpcomingTripsCrousel from "./upcomingtrip/UpcomingTripsCrousel";
import Reviewcrousel from "@/components/Crouselcomponents/Reviewcrousel";
import Swipper from "@/components/Crouselcomponents/Swipper";
           

export default function Home() {
  return (
    <main className="flex flex-col w-full ">
    {/* <div className="fixed bottom-8 right-8 z-50">

      <SpeedDial/>
    
    </div> */}
     <Videocomponent/>
     <Crouselslide/>
     {/* <Cardcrousel/> */}
    <WeekendTripMain/>
    <Divider className="w-11/12 mx-auto mt-12 "/>
     <UpcomingTripsCrousel/>
     <Divider className="w-11/12 mx-auto mt-12 "/>

     <RomanticEscape />

     <Divider className="w-11/12 mx-auto mt-12 "/>
     
     <Aboutus/>
     <Divider className="w-11/12 mx-auto mt-12 "/>
     <Reviewcrousel/>
     <Divider className="w-11/12 mx-auto mt-12 "/>

     <Swipper/>
     <Divider className="w-11/12 mx-auto mt-12 hidden md:block lg:block "/>

     <ContactFormMain/>

    </main>
  );
}
