import Contactform from "@/components/Contactuscomponents/Contactform";
import Cardcrousel from "@/components/Crouselcomponents/Cardcrousel";
import Crouselslide from "@/components/Crouselcomponents/Crouselslide";
import Videocomponent from "@/components/Herocomponenets/Videocomponent";
import Image from "next/image";
import UpcomingTrips from "./destination/upcomingtrip/page";
import Aboutus from "@/components/AboutUs/Aboutus";
import ContactFormMain from "@/components/Contactuscomponents/ContactFormMain";
import WeekendTripMain from "./destination/weekendtrip/page";
           

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
     <Videocomponent/>
     <Crouselslide/>
     {/* <Cardcrousel/> */}
    <WeekendTripMain/>
     <UpcomingTrips/>
     <Aboutus/>
     <ContactFormMain/>

    </main>
  );
}
