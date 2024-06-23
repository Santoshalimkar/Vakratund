import Contactform from "@/components/Contactuscomponents/Contactform";
import Crouselslide from "@/components/Crouselcomponents/Crouselslide";
import Videocomponent from "@/components/Herocomponenets/Videocomponent";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-8">
     <Videocomponent/>
     <Crouselslide/>
     <Contactform/>
     
    </main>
  );
}
