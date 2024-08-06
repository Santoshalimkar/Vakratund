import Contactform from "@/components/Contactuscomponents/Contactform";
import Cardcrousel from "@/components/Crouselcomponents/Cardcrousel";
import Crouselslide from "@/components/Crouselcomponents/Crouselslide";
import Videocomponent from "@/components/Herocomponenets/Videocomponent";
import Image from "next/image";
import UpcomingTrips from "./destination/upcomingtrip/page";
import Aboutus from "@/components/AboutUs/Aboutus";
import ContactFormMain from "@/components/Contactuscomponents/ContactFormMain";
import WeekendTripMain from "./destination/weekendtrip/page";
import { Divider } from "@nextui-org/react";
           

export default function Home() {
  return (
    <main className="flex flex-col w-full ">
     <Videocomponent/>
     <Crouselslide/>
     {/* <Cardcrousel/> */}
    <WeekendTripMain/>
    <Divider className="w-11/12 mx-auto mt-4 "/>
     <UpcomingTrips/>
     <Aboutus/>
     <ContactFormMain/>

    </main>
  );
}
