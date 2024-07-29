import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";


const Cardcrousel = () => {
  return (
    <div className='back2 w-full h-screen flex justify-center items-center mx-auto '>

    <Carousel
    opts={{
      align: "center",
    }}
    className="w-11/12 mx-auto"
  >
    <CarouselContent className="-ml-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/4">
          <div className="p-1">
            <Card className="w-60 h-60">
              <CardContent className="flex items-center justify-center">
                <span className="text-3xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
    </div>
  )
}

export default Cardcrousel