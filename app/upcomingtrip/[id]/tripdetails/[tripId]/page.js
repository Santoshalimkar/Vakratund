"use client";
import React, { useEffect, useState } from "react";

import Contactform from "@/components/Contactuscomponents/Contactform";
import UpcomingTripsCrousel from "@/app/upcomingtrip/UpcomingTripsCrousel";
import HeaderSwiper from "@/app/destination/details/HeaderSwiper";
import TripDetails from "@/app/destination/details/TripDetails";
import Link from "next/link";

import "primeicons/primeicons.css";
import Image from "next/image";
import { Carousel } from "primereact/carousel";


const responsiveOptions = [
  {
    breakpoint: "1400px",
    numVisible: 4,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
];


const DetailsPage = ({ params }) => {
  const { id, tripId } = params;
  const [tripdata, setTripdtata] = useState();
  const [activeTab, setActiveTab] = useState("August");
  const [products, setProducts] = useState([]);

  const sharingOptions = [
    { type: "Double Sharing", cost: "INR 19,999/-" },
    { type: "Triple Sharing", cost: "INR 17,999/-" },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  useEffect(() => {
    if (tripdata && Array.isArray(tripdata.galleryImages)) {
      setProducts(tripdata.galleryImages);
    }
  }, [tripdata]);


  useEffect(() => {
    if (id && tripId) {
      const fetchDestination = async () => {
        try {
          const response = await fetch(
            `/api/upcomingtrip/${id}/trips/${tripId}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();
          console.log("Destination Data:", data);
          setTripdtata(data.data);
        } catch (error) {
          console.error("Error fetching destination:", error);
        }
      };

      fetchDestination();
    }
  }, [id, tripId]);

  // const productTemplate = (product) => {
  //   return (
  //     <div className="m-2 mt-5 text-center py-5 px-3">
  //       <div className="mb-3 relative w-full h-60">
  //         <Image
  //           src={product } // Assuming `product` is a string (URL)
  //           alt="Image"
  //           layout="fill"
  //           objectFit="cover"
  //           className="w-6 shadow-2 carousel-image radius"
  //         />
  //       </div>
  //     </div>
  //   );
  // };



  return (
    <div className="container  z-0 px-0 flex flex-col justify-center">
      <div className="">
        {/* <HeaderSwiper data={tripdata} /> */}
        {/* <div className="card">
      <Carousel
        value={products}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
      />
    </div> */}

        <div className="container mx-auto mt-10 px-4">
          <div className="flex flex-col lg:flex-row justify-around">
            <div className="lg:w-1/2">
              <div className="flex flex-col gap-0 items-start justify-start w-full">
                <h2 className="mt-3 inline-flex flex-row gap-2 my-2 relative md:text-4xl lg:text-5xl text-3xl font-sans text-black">
                  {tripdata?.tripTitle}
                </h2>
                <div className="flex flex-row gap-2 items-center justify-start w-full">
                  <p className="flex items-center gap-1 sm:gap-1.5 text-xs text-white bg-gradient-to-r from-green-500 to-teal-500 rounded-md px-1">
                    {tripdata?.days}
                    <span className="pl-1 py-0.5"></span>
                  </p>
                  <p className="flex items-center gap-1 sm:gap-1.5 text-xs text-white bg-gradient-to-r from-green-500 to-teal-500 rounded-md px-1">
                    Customized Trip<span className="pl-1 py-0.5"></span>
                  </p>
                  <p className="flex items-center gap-1 sm:gap-1.5 text-xs text-white bg-gradient-to-r from-green-500 to-teal-500 rounded-md px-1">
                    {tripdata?.fromLocation}
                    <span className="pl-1 py-0.5"></span>
                  </p>
                  <p className="flex items-center gap-1 sm:gap-1.5 text-xs text-white bg-gradient-to-r from-green-500 to-teal-500 rounded-md px-1">
                    {tripdata?.tripDate}
                    <span className="pl-1 py-0.5"></span>
                  </p>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start w-full mt-2">
                  <div className="flex flex-col gap-2 py-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-full text-2xl font-sans text-black">
                      {" "}
                      INR
                      <span className="text-4xl font-sans text-black">
                        {tripdata?.price}/-{" "}
                        <span className="text-base text-text-color">
                          per person
                        </span>
                      </span>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-full">
                      <p className="relative max-w-fit flex flex-row gap-2 items-center justify-start w-full text-lg font-bold text-gray-600">
                        INR{" "}
                        <span className="text-2xl font-bold">
                          {tripdata?.discountprice}/-
                        </span>
                        <span className="absolute top-1/2 left-0 w-full h-0.5 bg-red-500"></span>
                      </p>
                      {/* <span className="inline-flex text-xs md:text-sm rounded-full justify-center text-center px-1 md:px-2 items-center bg-[#0b8d7c] font-medium text-white">
                        4% OFF
                      </span> */}
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col gap-3">
                  <article
                    className="prose prose-sm prose-zinc dark:prose-invert max-w-none !bg-transparent"
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      whiteSpace: "normal",
                      WebkitLineClamp: 3,
                      backgroundColor: "transparent",
                    }}
                  ></article>

                  {tripdata?.tripDescription}
                </div>
                <div className="flex flex-col gap-6 mb-4 mt-3 w-full">
                  <div className="flex flex-col sm:flex-row gap-2 items-center justify-center sm:justify-start w-full">
                    <Link
                      className="inline-flex flex-row gap-2 items-center justify-center w-full bg-[#0b8d7c] text-white rounded-md p-2 text-center text-lg font-medium border border-primary-dark inset-1 hover:bg-[#0b8d7c] transition-all shadow-md hover:transition-y-100 hover:pb-2 duration-300 hover:scale-[1.03] group relative overflow-hidden"
                      href="tel:919284205536"
                    >
                      Book Now{" "}
                      <span className="lucide -mt-3 lucide-sparkles h-4 w-4 shrink-0">
                        <i
                          className="pi pi-phone"
                          style={{ fontSize: "1rem" }}
                        ></i>
                      </span>{" "}
                    </Link>
                    <Link
                      className="inline-flex flex-row gap-2 items-center justify-center w-full bg-[#0b8d7c] text-white rounded-md p-2 text-center text-lg font-medium border border-primary-dark inset-1 hover:bg-[#0b8d7c] transition-all shadow-md hover:transition-y-100 hover:pb-2 duration-300 hover:scale-[1.03] group relative overflow-hidden"
                      href={"https://wa.link/f5qsnc"}
                    >
                      Enquiry Now{" "}
                      <span className="lucide -mt-3 lucide-sparkles h-4 w-4 shrink-0">
                        <i
                          className="pi pi-whatsapp"
                          style={{ fontSize: "1rem" }}
                        ></i>
                      </span>
                    </Link>
                    <Link
                      className="inline-flex flex-row gap-2 items-center justify-center w-full bg-[#0b8d7c] text-white rounded-md p-2 text-center text-lg font-medium border border-primary-dark inset-1 hover:bg-[#0b8d7c] transition-all shadow-md hover:transition-y-100 hover:pb-2 duration-300 hover:scale-[1.03] group relative overflow-hidden"
                      href={""}
                    >
                      Itinerary{" "}
                      <span className="lucide -mt-3 lucide-sparkles h-4 w-4 shrink-0 animate-bounce">
                        <i
                          className="pi pi-arrow-down"
                          style={{ fontSize: "1rem" }}
                        ></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-[500] flex flex-row gap-2">
                    Itinerary
                    <span className="lucide -mt-3 lucide-sparkles h-4 w-4 text-[#36a39e] shrink-0">
                      <i
                        className="pi pi-sparkles"
                        style={{ fontSize: "1rem" }}
                      ></i>
                    </span>
                  </h2>
                  <p className="text-text-color text-sm md:text-base capitalize -mt-6">
                    Check out the detailed itinerary of this trip.
                  </p>
                </div>
                <div className="space-y-4 mt-3 w-full">
                  {tripdata?.itinerary.map((item, index) => (
                    <div
                      key={index}
                      className="border rounded-md  border-[#36a39e]"
                    >
                      <button
                        className="flex justify-between w-full px-4 py-4 text-left bg-gray-100 rounded-t-lg"
                        onClick={() => handleToggle(index)}
                      >
                        <span>{item.day}</span>
                        <span>{item.activity}</span>

                        <span>{openIndex === index ? "-" : "+"}</span>
                      </button>
                      {openIndex === index && (
                        <div className="p-4 bg-white border-t">
                          {item.description}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="relative flex flex-col gap-6 md:gap-8 my-6 w-full">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-[500] flex flex-row gap-2">
                    Batches Available{" "}
                    <span className="lucide -mt-3 lucide-sparkles h-4 w-4 text-[#36a39e] shrink-0">
                      <i
                        className="pi pi-sparkles"
                        style={{ fontSize: "1rem" }}
                      ></i>
                    </span>
                  </h2>
                  <p className="text-text-color text-sm md:text-base capitalize -mt-6">
                    Check out the available date batches for this trip.
                  </p>
                  <div className="relative flex flex-col lg:flex-row justify-start items-start gap-3 md:gap-5">
                    <div className="flex flex-col">
                      <p className="font-medium text-base sm:text-lg">
                        Contact us directly for available date batches for this
                        trip.
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="flex border-b border-gray-300">
        {Object.keys(dates).map((month) => (
          <button
            key={month}
            onClick={() => setActiveTab(month)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === month
                ? 'text-white bg-teal-500'
                : 'text-gray-700 bg-gray-200'
            } focus:outline-none`}
          >
            {month}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {dates[activeTab].map((item, index) => (
          <div
            key={index}
            className="border border-teal-500 rounded-md p-2 my-2"
          >
            <div>{item.dateRange}</div>
            <div className="text-sm text-gray-500">{item.status}</div>
          </div>
        ))}
      </div> */}

                <div className="relative flex flex-col gap-6 md:gap-8 my-6 w-full">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-[500] flex flex-row gap-2">
                    Inclusions{" "}
                    <span className="lucide -mt-3 lucide-sparkles h-4 w-4 text-[#36a39e] shrink-0">
                      <i
                        className="pi pi-sparkles"
                        style={{ fontSize: "1rem" }}
                      ></i>
                    </span>
                  </h2>
                  <p className="text-text-color text-sm md:text-base capitalize -mt-6">
                    {`What's included with this trip.`}
                  </p>
                  <div className="relative flex flex-col lg:flex-row justify-start items-start gap-3 md:gap-5">
                    <div className="prose prose-sm prose-zinc dark:prose-invert max-w-none !bg-transparent">
                      <ul className="list-disc pl-5">
                        {tripdata?.inclusions.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="relative flex flex-col gap-6 md:gap-8 my-6 w-full">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-[500] flex flex-row gap-2">
                    Exclusions{" "}
                    <span className="lucide -mt-3 lucide-sparkles h-4 w-4 text-[#36a39e] shrink-0">
                      <i
                        className="pi pi-sparkles"
                        style={{ fontSize: "1rem" }}
                      ></i>
                    </span>
                  </h2>
                  <p className="text-text-color text-sm md:text-base capitalize -mt-6">
                    {`What's not included with this trip.`}
                  </p>
                  {/* <div className="relative flex flex-col lg:flex-row justify-start items-start gap-3 md:gap-5">
                    <div className="flex flex-col">
                      prose prose-sm prose-zinc dark:prose-invert max-w-none !bg-transparent
                    </div>


                  </div> */}
                  <div className="prose prose-sm prose-zinc dark:prose-invert max-w-none !bg-transparent">
                    <ul className="list-disc pl-5">
                      {tripdata?.exclusions.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative flex flex-col gap-6 md:gap-8 my-6 w-full">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-[500] flex flex-row gap-2">
                    Costing Options
                    <span className="lucide -mt-3 lucide-sparkles h-4 w-4 text-[#36a39e] shrink-0">
                      <i
                        className="pi pi-sparkles"
                        style={{ fontSize: "1rem" }}
                      ></i>
                    </span>
                  </h2>
                  <p className="text-text-color text-sm md:text-base capitalize -mt-6">
                    {`What are the Costing and Sharing Options are Available for this trip.`}
                  </p>
                 <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 border-collapse">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Sharing Type
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Costing
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {tripdata?.sharingOptions.map((item, index) => (
                          <tr key={item}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {item.type}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {item.cost}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-96 hidden bg-white my-2 lg:my-0 lg:flex lg:basis-[35%] lg:sticky lg:top-32 flex-col h-full items-start justify-start shadow-[2px_2px_2px_2px_rgba(11,141,124,0.10)] border border-[#36a39e] hover:border-[#0b8d7c] rounded-lg overflow-hidden">
              <Contactform />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
