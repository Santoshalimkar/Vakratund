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
import Whats from "../public/Navabar/whats.png"
import Link from "next/link";
           

export default function Home() {
  return (
    <main className="flex flex-col w-full ">
    <div className="fixed bottom-8 right-8 z-50">
    <Link href={"https://wa.link/f5qsnc"}>
      <Image className="md:w-24 md:h-24 lg:w-24 lg:h-24 h-20 w-20 object-contain" src={Whats} alt="whatsapp"/>

    </Link>
    </div>
     <Videocomponent/>
     <Crouselslide/>
     {/* <Cardcrousel/> */}
    <WeekendTripMain/>
    <Divider className="w-11/12 mx-auto mt-12 "/>
     <UpcomingTrips/>
     <Aboutus/>
     <ContactFormMain/>

    </main>
  );
}
