'use client';
import React, { useState } from 'react';

export default function AboutUsTabs() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="card p-4">
            <div className="flex mb-2 gap-2 justify-center">
                <button
                    onClick={() => setActiveIndex(0)}
                    className={`px-4 py-2 rounded-lg font-medium ${activeIndex === 0 ? 'bg-teal-500 text-white' : 'border border-gray-300 text-gray-600'}`}
                >
                    Connect with Like-minded Travelers
                </button>
                <button
                    onClick={() => setActiveIndex(1)}
                    className={`px-4 py-2 rounded-lg font-medium ${activeIndex === 1 ? 'bg-teal-500 text-white' : 'border border-gray-300 text-gray-600'}`}
                >
                    Authentic Travel Experiences
                </button>
                <button
                    onClick={() => setActiveIndex(2)}
                    className={`px-4 py-2 rounded-lg font-medium ${activeIndex === 2 ? 'bg-teal-500 text-white' : 'border border-gray-300 text-gray-600'}`}
                >
                    Traveler Safety and Security
                </button>
            </div>
            <div className="border p-4 rounded-lg">
                {activeIndex === 0 && (
                    <div>
                        {/* <h2 className="font-bold text-lg mb-2">Connect with Like-minded Travelers</h2> */}
                        <p>
                        {`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                    ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.`}
                        </p>
                    </div>
                )}
                {activeIndex === 1 && (
                    <div>
                        {/* <h2 className="font-bold text-lg mb-2">Authentic Travel Experiences</h2> */}
                        <p>
                    {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia similique est fuga ratione explicabo excepturi, voluptas necessitatibus libero. Enim quas ullam sequi ex at ipsum rerum ipsa, quia quibusdam dicta?`}
                        </p>
                    </div>
                )}
                {activeIndex === 2 && (
                    <div>
                        {/* <h2 className="font-bold text-lg mb-2">Traveler Safety and Security</h2> */}
                        <p>
                        {`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                    ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.`}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
