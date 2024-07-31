"use client";
import { Divider, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import toast, { Toaster } from 'react-hot-toast';
import Logo from "../../public/Navabar/Logo2.png";
import Conatctus from "../../public/Footer/Conatctus.png";
import FooterHero from "../../public/Footer/FooterHero.JPG";

const Footer = () => {
  //   const [email, setEmail] = useState("");
  //   const [subscribed, setSubscribed] = useState(false);
  //   const router = useRouter();

  //   const handleSubscribe = () => {
  //     // Simulate subscription process
  //     if (email) {
  //       // Here, you can integrate your actual subscription logic
  //       toast.success("Thank you for subscribing!");
  //       setEmail("");
  //     } else {
  //       toast.error("Please enter a valid email address.");
  //     }
  //   };

  return (
    <div className="w-full flex flex-col bg-[#0b8d7c]">
      <div className="w-full h-full bg-[#0b8d7c] py-3 sm:py-4 box-border relative text-start uppercase __className_1fc36d">
        <div className="grid container px-4 grid-cols-2 md:grid-cols-4 gap-2 items-center justify-center p-2 text-slate-200">
          <div className="flex flex-col gap-2 items-start justify-start p-2">
            <h2 className="text-5xl sm:text-6xl font-bold text-white">99%</h2>
            <h3 className="text-base sm:text-lg font-bold text-white">
              Satisfaction
            </h3>
            <hr className="w-1/5 sm:w-1/3 border border-white"></hr>
            <ul className="flex flex-col gap-1 items-start justify-start text-sm font-medium sm:font-semibold text-slate-100">
              <li>Deluxe Stays</li>
              <li>Travel Guides</li>
              <li>Customized Trips</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start p-2">
            <h2 className="text-5xl sm:text-6xl font-bold text-white">100%</h2>
            <h3 className="text-base sm:text-lg font-bold text-white">
              Best Services
            </h3>
            <hr className="w-1/5 sm:w-1/3 border border-white"></hr>
            <ul className="flex flex-col gap-1 items-start justify-start text-sm font-medium sm:font-semibold text-slate-100">
              <li>Best Services</li>
              <li>Easy Booking</li>
              <li>Affordable</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start p-2">
            <h2 className="text-5xl sm:text-6xl font-bold text-white">10+</h2>
            <h3 className="text-base sm:text-lg font-bold text-white">
              Destinations
            </h3>
            <hr className="w-1/5 sm:w-1/3 border border-white"></hr>
            <ul className="flex flex-col gap-1 items-start justify-start text-sm font-medium sm:font-semibold text-slate-100">
              <li>50+ Group Trips</li>
              <li>10+ International</li>
              <li>10+ Domestic</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start p-2">
            <h2 className="text-5xl sm:text-6xl font-bold text-white">24/7</h2>
            <h3 className="text-base sm:text-lg font-bold text-white">
              Support
            </h3>
            <hr className="w-1/5 sm:w-1/3 border border-white"></hr>
            <ul className="flex flex-col gap-1 items-start justify-start text-sm font-medium sm:font-semibold text-slate-100">
              <li>Easy Booking</li>
              <li>Customer Support</li>
              <li>Hasle Free</li>
            </ul>
          </div>
        </div>
      </div>
      <footer
        className="py-12 z-30 relative flex"
        style={{
          backgroundImage: `url(${FooterHero.src})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="max-w-[1400px] px-4 mx-auto">
          <div className="overflow-hidden filter bg-gradient-to-b from-slate-100/50 via-white/50 to-slate-200/50 backdrop-blur-md sticky z-10 p-10 shadow-lg border border-zinc-300 rounded-3xl px-4 md:px-6 grid grid-cols-1 lg:px-8 xl:px-12 md:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl text-gray-700 font-[500] __className_1fc36d">
                Our Vision
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Discover the world with Desh Videsh Travels – Where Adventure
                meets Inspiration. Join us as We Explore Captivating
                Destinations, Connect with Influencers, and Create Memories that
                last a Lifetime. Your Journey begins here{" "}
                <Link className="text-[#36a39e] hover:text-[#0b8d7c]" href="/">
                  More
                </Link>{" "}
              </p>
            </div>

            <div className="space-y-4 md:pl-8 md:border-l-2 border-white/30">
            <h3 className="text-lg md:text-xl text-gray-700 font-[500] ">Quick Link</h3>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-1">
              <Link className="hover:text-primary-main max-w-max text-gray-700 transition-colors duration-200 ease-in-out" href="/">Home</Link>
              <Link className="hover:text-primary-main max-w-max text-gray-700 transition-colors duration-200 ease-in-out" href="/">Review</Link>
              <Link className="hover:text-primary-main max-w-max text-gray-700 transition-colors duration-200 ease-in-out" href="/">Travel Blogs</Link>
              <Link className="hover:text-primary-main max-w-max text-gray-700 transition-colors duration-200 ease-in-out" href="/">About Us</Link>
              <Link className="hover:text-primary-main max-w-max text-gray-700 transition-colors duration-200 ease-in-out" href="/">Contact Us</Link>
              <Link className="hover:text-primary-main max-w-max text-gray-700 transition-colors duration-200 ease-in-out" href="/">Privacy Policy</Link>
              <Link className="hover:text-primary-main max-w-max text-gray-700 transition-colors duration-200 ease-in-out" href="/">Terms and Condition</Link>
            </div>

            </div>
            <div className="space-y-4 md:pl-8 md:border-l-2 border-white/30">
            <h3 className="text-lg md:text-xl text-gray-700 font-[500] __className_1fc36d">Top Categories</h3>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-1">
              <Link className="hover:text-primary-main max-w-max text-gray-700 transition-colors duration-200 ease-in-out" href="/">International Trips</Link>
              <Link className="hover:text-primary-main max-w-max text-gray-700 transition-colors duration-200 ease-in-out" href="/">Domestic Trips</Link>
              <Link className="hover:text-primary-main max-w-max text-gray-700 transition-colors duration-200 ease-in-out" href="/">Upcoming Trips</Link>
             
            </div>

            </div>
            <div className="space-y-4 md:pl-8 md:border-l-2 border-white/30">
            <div >
              <h3 className="text-xl md:text-2xl text-gray-700 font-[500] __className_1fc36d">
                Contact Us
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Email :
                <span> Info@vakratund.com</span>
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Phone :8669186483
                
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Website :
                <span> www.vakratund.com</span>
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Office :
                <span> Pune ,Maharastara 410401</span>
              </p>
            </div>

            </div>
          </div>
        </div>
      </footer>

      <div className="md:m-10 m-4 flex items-center justify-center border border-white rounded-lg  relative ">
        <Image
          className="w-full object-fill h-80 rounded-lg "
          src={Conatctus}
          alt="Conatctus"
        />
      </div>
      {/* <div className="bg-[#0b8d7c] md:h-40 lg:h-40 h-56 md:pb-0 lg:pb-0 pb-4 w-full gap-8 flex flex-col md:flex-row lg:flex-row justify-between md:items-center lg:items-center items-start md:px-12 lg:px-12 px-4 ">
        <div className="flex justify-start items-start gap-2 md:w-1/2 lg:w-1/2 w-full flex-col">
          <h6 className="text-xs font-medium text-[#FF7143] uppercase">
            newsletter
          </h6>
          <p className="text-[0.7rem] md:text-xs lg:text-xs font-medium text-white md:leading-7 lg:leading-7 leading-7 uppercase">
            {`Sign up for our newsletter now! Get exclusive offers and discounts. Stay informed, stay ahead. Subscribe today!`}
          </p>
        </div>
        <div className="flex items-center h-12 ring-1 ring-white rounded-lg md:w-1/2 lg:w-1/2 w-full px-4">
          <input
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="border-none text-white w-11/12 focus:outline-none bg-[#0b8d7c] p-2"
          />
          <span
            // onClick={handleSubscribe}
            className="text-sm font-extrabold text-[#FF7143] uppercase cursor-pointer"
          >
            send
          </span>
        </div>
      </div> */}

<p className="text-center text-white mb-3 font-bold md:text-xs lg:text-xs text-[0.4rem] uppercase w-full">
          {` 2024 Vakaratund tour & Adventure - All rights reserved.`}
        </p>

      <div className="w-11/12 mx-auto z-10 bg-white md:mb-0 lg:mb-0 mb-8">
      
        <Divider orientation="horizontal" />
        
      </div>
      
     
  

      {/* <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/> */}
    </div>
  );
};

export default Footer;
