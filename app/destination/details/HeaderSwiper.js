// components/HeaderSwiper.js
"use client";

import React, { useState } from "react";

import { Carousel } from "primereact/carousel";

import Image from "next/image";
import "primeicons/primeicons.css";

import Bali from "../../../public/Cardimages/Bali.JPG";
import HeroImage from "../../../public/Cardimages/BaliHeroImage.JPG";
import HeroImage_2 from "../../../public/Cardimages/BaliHeroImage_2.JPG";
import Meghalaya from "../../../public/Cardimages/Meghalaya.JPG";

export default function HeaderSwiper() {
  const initialProducts = [
    {
      id: "1000",
      code: "f230fh0g3",
      name: "Bamboo Watch",
      description: "Product Description",
      image: HeroImage,
      price: 65,
      category: "Accessories",
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5,
    },
    {
      id: "1001",
      
      image: HeroImage_2,
    
    },
    {
      id: "1002",
 
      image: Bali,
    
     
    },
    {
      id: "1003",
   
      image: Meghalaya,
   
    },
    {
      id: "1004",
      image: Meghalaya,
   
    },
    {
      id: "1005",
   
      image: HeroImage_2,
    },
    {
      id: "1006",
      
      image: Bali,
    
    },
    {
      id: "1007",
      image: Meghalaya,
   
    },
    {
      id: "1008",
      image: Meghalaya,
    },
  ];

  const [products, setProducts] = useState(initialProducts);
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


  const productTemplate = (product) => {
    return (
      <div className=" m-2 mt-5 text-center py-5 px-3">
        <div className="mb-3 relative w-full h-60">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="w-6 shadow-2 carousel-image redius "
          />
        </div>
      </div>
    );
  };

  return (

    <div
      className="card "
    >
      <div className="">
        <Carousel
        className=" "
          value={products}
          numVisible={3}
          numScroll={3}
          responsiveOptions={responsiveOptions}
          itemTemplate={productTemplate}
        />
      </div>
    </div>
  );
}
