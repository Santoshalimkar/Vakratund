// components/ImageSliderWithThumbnails.js
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import HeroImage from '../../../public/Cardimages/BaliHeroImage.JPG';
import Meghalaya from '../../../public/Cardimages/Meghalaya.JPG';
import SpitiValley_1 from '../../../public/Itinerary/SpitiValley_1.JPG';
import SpitiValley_2 from '../../../public/Itinerary/SpitiValley_2.JPG';
import SpitiValley_3 from '../../../public/Itinerary/SpitiValley_3.JPG';
import SpitiValley_4 from '../../../public/Itinerary/SpitiValley_4.JPG';
import SpitiValley_5 from '../../../public/Itinerary/SpitiValley_5.JPG';

// Mock image data
const images = [
    {
        itemImageSrc: SpitiValley_1,
        thumbnailImageSrc: SpitiValley_1,
        alt: 'Image 1'
    },
    {
        itemImageSrc: SpitiValley_2,
        thumbnailImageSrc: SpitiValley_2,
        alt: 'Image 2'
    },
    {
        itemImageSrc: SpitiValley_3,
        thumbnailImageSrc: SpitiValley_3,
        alt: 'Image 3'
    },
    {
        itemImageSrc: SpitiValley_4,
        thumbnailImageSrc: SpitiValley_4,
        alt: 'Image 4'
    },
    {
        itemImageSrc: SpitiValley_5,
        thumbnailImageSrc: SpitiValley_5,
        alt: 'Image 5'
    },
    
];

export default function ImageSliderWithThumbnails() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleThumbnails, setVisibleThumbnails] = useState(images.slice(0, 5));
    const [screenSize, setScreenSize] = useState(5);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(1); // Initial zoom level

    useEffect(() => {
        const updateScreenSize = () => {
            if (window.innerWidth <= 575) {
                setScreenSize(1);
            } else if (window.innerWidth <= 767) {
                setScreenSize(3);
            } else if (window.innerWidth <= 991) {
                setScreenSize(4);
            } else {
                setScreenSize(5);
            }
        };

        window.addEventListener('resize', updateScreenSize);
        updateScreenSize();

        return () => window.removeEventListener('resize', updateScreenSize);
    }, []);

    useEffect(() => {
        setVisibleThumbnails(images.slice(0, screenSize));
    }, [screenSize]);

    const handleThumbnailClick = (index) => {
        setCurrentIndex(index);
    };

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setZoomLevel(1); // Reset zoom level when closing modal
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
        updateThumbnails(nextIndex);
    };

    const handlePrevious = () => {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(prevIndex);
        updateThumbnails(prevIndex);
    };

    const updateThumbnails = (index) => {
        let start = index;
        let end = start + screenSize;

        if (end > images.length) {
            start = images.length - screenSize;
            end = images.length;
        }

        setVisibleThumbnails(images.slice(start, end));
    };

    const zoomIn = () => {
        setZoomLevel(prevZoom => prevZoom + 0.5);
    };

    const zoomOut = () => {
        setZoomLevel(prevZoom => (prevZoom > 1 ? prevZoom - 0.5 : 1));
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="relative w-full h-[480px] overflow-hidden bg-white">
                <div className="flex w-full h-full transition-transform duration-1000"
                     style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((image, index) => (
                        <div key={index} className="flex-shrink-0 w-full h-full relative p-4">
                            {typeof image.itemImageSrc === 'string' ? (
                                <img
                                    src={image.itemImageSrc}
                                    alt={image.alt}
                                    className="w-full h-full object-contain cursor-pointer"
                                    onClick={handleImageClick}
                                />
                            ) : (
                                <Image
                                    src={image.itemImageSrc}
                                    alt={image.alt}
                                    layout="fill"
                                    objectFit="contain"
                                    className="w-full h-full cursor-pointer"
                                    onClick={handleImageClick}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 z-10"
                    onClick={handlePrevious}
                >
                    Previous
                </button>
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 z-10"
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
            <div className="flex justify-center mt-4">
                {visibleThumbnails.map((image, index) => (
                    <div key={index} className="mx-1 cursor-pointer" onClick={() => handleThumbnailClick(index)}>
                        {typeof image.thumbnailImageSrc === 'string' ? (
                            <img
                                src={image.thumbnailImageSrc}
                                alt={image.alt}
                                className={`w-16 h-10 object-cover ${currentIndex === index ? 'border-2 border-blue-500' : 'border'}`}
                            />
                        ) : (
                            <Image
                                src={image.thumbnailImageSrc}
                                alt={image.alt}
                                width={64}
                                height={40}
                                className={`w-16 h-10 object-cover ${currentIndex === index ? 'border-2 border-blue-500' : 'border'}`}
                            />
                        )}
                    </div>
                ))}
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="relative w-3/4 h-3/4">
                        {typeof images[currentIndex].itemImageSrc === 'string' ? (
                            <img
                                src={images[currentIndex].itemImageSrc}
                                alt={images[currentIndex].alt}
                                className={`w-full h-full object-contain transition-transform duration-300`}
                                style={{ transform: `scale(${zoomLevel})` }}
                            />
                        ) : (
                            <Image
                                src={images[currentIndex].itemImageSrc}
                                alt={images[currentIndex].alt}
                                layout="fill"
                                objectFit="contain"
                                className={`w-full h-full transition-transform duration-300`}
                                style={{ transform: `scale(${zoomLevel})` }}
                            />
                        )}
                        <button
                            className="absolute top-4 right-4 text-white text-3xl"
                            onClick={handleCloseModal}
                        >
                            &times;
                        </button>
                        <button
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 z-10"
                            onClick={zoomOut}
                        >
                            Zoom Out
                        </button>
                        <button
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 z-10"
                            onClick={zoomIn}
                        >
                            Zoom In
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
