'use client'
import Contactform from '@/components/Contactuscomponents/Contactform'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Location from "../../../public/Cardimages/Location_Map.png"

const TripDetails = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Day 1: Arrival at Pune",
      content: (
        <ul className="list-disc list-inside">
          <li>Arrival at Pune airport.</li>
          <li>Transfer to hotel and check-in.</li>
          <li>Evening at leisure.</li>
        </ul>
      ),
    },
    {
      title: "Day 2: Full-Day Kintamani Volcano Tour",
      content: (
        <ul className="list-disc list-inside">
          <li>Visit Kintamani Volcano.</li>
          <li>Explore Ubud Village.</li>
          <li>Bali Swing experience.</li>
        </ul>
      ),
    },
    {
      title: "Day 3: Temple Tour",
      content: (
        <ul className="list-disc list-inside">
          <li>Visit Uluwatu Temple.</li>
          <li>Visit Tanah Lot Temple.</li>
          <li>Experience Kecak Dance performance.</li>
        </ul>
      ),
    },
    {
      title: "Day 4: Temple Tour Day. Visit Uluwatu and Tanah Lot Temple.",
      content: (
        <ul className="list-disc list-inside">
          <li>Have breakfast and pack your bags.</li>
          <li>Transfer to Denpasar airport.</li>
          <li>Return journey to home.</li>
        </ul>
      ),
    },
    {
      title: "Day 5: Departure. Take back a lot of amazing memories.",
      content: (
        <ul className="list-disc list-inside">
          <li>Have breakfast and pack your bags.</li>
          <li>Transfer to Denpasar airport.</li>
          <li>Return journey to home.</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="flex flex-col lg:flex-row justify-around">
        <div className="lg:w-1/2">
          <div className='flex flex-col gap-0 items-start justify-start w-full'>
            <h2 className='mt-3 inline-flex flex-row gap-2 my-2 relative md:text-4xl lg:text-5xl text-3xl font-sans text-black'>Bali with Gili Islands</h2>
            <div className='flex flex-row gap-2 items-center justify-start w-full'>
              <p className='flex items-center gap-1 sm:gap-1.5 text-xs text-white bg-gradient-to-r from-green-500 to-teal-500 rounded-md px-1'>7D/8N<span className='pl-1 py-0.5'></span></p>
              <p className='flex items-center gap-1 sm:gap-1.5 text-xs text-white bg-gradient-to-r from-green-500 to-teal-500 rounded-md px-1'>Customized Trip<span className='pl-1 py-0.5'></span></p>
              <p className='flex items-center gap-1 sm:gap-1.5 text-xs text-white bg-gradient-to-r from-green-500 to-teal-500 rounded-md px-1'>Bali Airport<span className='pl-1 py-0.5'></span></p>
            </div>
            <div className='flex flex-row gap-2 items-center justify-start w-full mt-2'>
              <div className='flex flex-col gap-2 py-4 items-start justify-start w-full'>
                <div className='flex flex-row gap-2 items-center justify-start w-full text-2xl font-sans text-black'> INR<span className='text-4xl font-sans text-black'>49000/- <span className='text-base text-text-color'>per person</span></span></div>
                <div className='flex flex-row gap-2 items-center justify-start w-full'>
                  <p className='relative max-w-fit flex flex-row gap-2 items-center justify-start w-full text-lg font-bold text-gray-600'>
                    INR <span className='text-2xl font-bold'>50000/-</span>
                    <span className='absolute top-1/2 left-0 w-full h-0.5 bg-red-500'></span>
                  </p>
                  <span className='inline-flex text-xs md:text-sm rounded-full justify-center text-center px-1 md:px-2 items-center bg-[#0b8d7c] font-medium text-white'>4% OFF</span>
                </div>
              </div>
            </div>
            <div className='relative flex flex-col gap-3'>
              <article className='prose prose-sm prose-zinc dark:prose-invert max-w-none !bg-transparent' style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', whiteSpace: 'normal', WebkitLineClamp: 3, backgroundColor: 'transparent' }}>
           {` Embark on an unforgettable Bali adventure with our meticulously planned trip, designed to give you an authentic taste of this Indonesian paradise. This journey takes you through the vibrant artsy town of Ubud, the lively Gili Islands, and the trendy hotspots of Seminyak. Whether you’re a thrill-seeker or a relaxation enthusiast, this Bali itinerary has something for everyone. Your adventure begins in Ubud, the cultural heart of Bali. Known for its lush forests, stunning waterfalls, expansive rice fields, and majestic volcanic mountains, Ubud is the perfect starting point for your Bali journey. Check into your accommodation and get ready for an evening of relaxation. Meet your fellow travelers during an ice-breaking session, setting the stage for new friendships and shared experiences.`}
              </article>
            </div>
            <div className='flex flex-col gap-6 mb-4 mt-3 w-full'>
              <div className='flex flex-col sm:flex-row gap-2 items-center justify-center sm:justify-start w-full'>
                <Link className='inline-flex flex-row gap-2 items-center justify-center w-full bg-[#0b8d7c] text-white rounded-md p-2 text-center text-lg font-medium border border-primary-dark inset-1 hover:bg-[#0b8d7c] transition-all shadow-md hover:transition-y-100 hover:pb-2 duration-300 hover:scale-[1.03] group relative overflow-hidden' href="/">Book Now <span className='lucide -mt-3 lucide-sparkles h-4 w-4 shrink-0'><i className="pi pi-phone" style={{ fontSize: '1rem' }}></i></span> </Link>
                <Link className='inline-flex flex-row gap-2 items-center justify-center w-full bg-[#0b8d7c] text-white rounded-md p-2 text-center text-lg font-medium border border-primary-dark inset-1 hover:bg-[#0b8d7c] transition-all shadow-md hover:transition-y-100 hover:pb-2 duration-300 hover:scale-[1.03] group relative overflow-hidden' href="/">Enquiry Now <span className='lucide -mt-3 lucide-sparkles h-4 w-4 shrink-0'><i className="pi pi-whatsapp" style={{ fontSize: '1rem' }}></i></span></Link>
                <Link className='inline-flex flex-row gap-2 items-center justify-center w-full bg-[#0b8d7c] text-white rounded-md p-2 text-center text-lg font-medium border border-primary-dark inset-1 hover:bg-[#0b8d7c] transition-all shadow-md hover:transition-y-100 hover:pb-2 duration-300 hover:scale-[1.03] group relative overflow-hidden' href="/">Itinerary <span className='lucide -mt-3 lucide-sparkles h-4 w-4 shrink-0 animate-bounce'><i className="pi pi-arrow-down" style={{ fontSize: '1rem' }}></i></span></Link>
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              <h2 className='text-xl md:text-2xl lg:text-3xl font-[500] flex flex-row gap-2'>Itinerary
                <span className='lucide -mt-3 lucide-sparkles h-4 w-4 text-[#36a39e] shrink-0'><i className="pi pi-sparkles" style={{ fontSize: '1rem' }}></i></span>
              </h2>
              <p className='text-text-color text-sm md:text-base capitalize -mt-6'>Check out the detailed itinerary of this trip.</p>
            </div>
            <div className="space-y-4 mt-3 w-full">
              {items.map((item, index) => (
                <div key={index} className="border rounded-lg">
                  <button
                    className="flex justify-between w-full px-4 py-4 text-left bg-gray-100 rounded-t-lg"
                    onClick={() => handleToggle(index)}
                  >
                    <span>{item.title}</span>
                    <span>{openIndex === index ? '-' : '+'}</span>
                  </button>
                  {openIndex === index && (
                    <div className="p-4 bg-white border-t">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className='relative flex flex-col gap-6 md:gap-8 my-6 w-full'>
              <h2 className='text-xl md:text-2xl lg:text-3xl font-[500] flex flex-row gap-2'>Batches Available <span className='lucide -mt-3 lucide-sparkles h-4 w-4 text-[#36a39e] shrink-0'><i className="pi pi-sparkles" style={{ fontSize: '1rem' }}></i></span></h2>
              <p className='text-text-color text-sm md:text-base capitalize -mt-6'>Check out the available date batches for this trip.</p>
              <div className='relative flex flex-col lg:flex-row justify-start items-start gap-3 md:gap-5'>
                <div className='flex flex-col'><p className='font-medium text-base sm:text-lg'>Contact us directly for available date batches for this trip.</p></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-96 hidden bg-white my-2 lg:my-0 lg:flex lg:basis-[35%] lg:sticky lg:top-32 flex-col h-full items-start justify-start shadow-[2px_2px_2px_2px_rgba(11,141,124,0.10)] border border-[#36a39e] hover:border-[#0b8d7c] rounded-lg overflow-hidden">
          <Contactform />
        </div>
      </div>
    </div>
  )
}

export default TripDetails
