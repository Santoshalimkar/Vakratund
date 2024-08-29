"use client";

import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import Image from "next/image";
import "primeicons/primeicons.css";

export default function HeaderSwiper({ data }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Update products when data changes
    if (data && Array.isArray(data.galleryImages)) {
      setProducts(data.galleryImages);
    }
  }, [data]);

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
      <div className="m-2 mt-5 text-center py-5 px-3">
        <div className="mb-3 relative w-full h-60">
          <Image
            src={product} // Assuming `product` is a string (URL)
            alt="Image"
            layout="fill"
            objectFit="cover"
            className="w-6 shadow-2 carousel-image radius"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={products}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
      />
    </div>
  );
}
