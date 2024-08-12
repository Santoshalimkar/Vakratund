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
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import "primeicons/primeicons.css";

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
    <div className="w-full flex flex-col bg-[#36a39e]">
      <div className="w-full h-full bg-[#36a39e] py-3 sm:py-4 box-border relative text-start uppercase __className_1fc36d">
        <div className="grid container px-4 grid-cols-2 md:grid-cols-4 gap-2 items-center justify-center p-2 text-slate-200">
          <div className="flex flex-col gap-2 items-start justify-start p-2">
            <h2 className="md:text-4xl lg:text-4xl sm:text-3xl text-xl font-bold text-white">
              99%
            </h2>
            <h3 className="text-base sm:text-lg font-bold text-white">
              Satisfaction
            </h3>
            <hr className="w-1/5 sm:w-1/3 border border-white"></hr>
            <ul className="flex flex-col gap-1 items-start justify-start md:text-sm lg:text-sm text-xs font-medium sm:font-semibold text-slate-100">
              <li>Deluxe Stays</li>
              <li>Travel Guides</li>
              <li>Customized Trips</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start p-2">
            <h2 className="md:text-4xl lg:text-4xl sm:text-3xl text-xl font-bold text-white">
              100%
            </h2>
            <h3 className="text-base sm:text-lg font-bold text-white">
              Best Services
            </h3>
            <hr className="w-1/5 sm:w-1/3 border border-white"></hr>
            <ul className="flex flex-col gap-1 items-start justify-start md:text-sm lg:text-sm text-xs font-medium sm:font-semibold text-slate-100">
              <li>Best Services</li>
              <li>Easy Booking</li>
              <li>Affordable</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start p-2">
            <h2 className="md:text-4xl lg:text-4xl sm:text-3xl text-xl font-bold text-white">
              10+
            </h2>
            <h3 className="text-base sm:text-lg font-bold text-white">
              Destinations
            </h3>
            <hr className="w-1/5 sm:w-1/3 border border-white"></hr>
            <ul className="flex flex-col gap-1 items-start justify-start md:text-sm lg:text-sm text-xs font-medium sm:font-semibold text-slate-100">
              <li>50+ Group Trips</li>
              <li>10+ International</li>
              <li>10+ Domestic</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start p-2">
            <h2 className="md:text-4xl lg:text-4xl sm:text-3xl text-xl font-bold text-white">
              24/7
            </h2>
            <h3 className="text-base sm:text-lg font-bold text-white">
              Support
            </h3>
            <hr className="w-1/5 sm:w-1/3 border border-white"></hr>
            <ul className="flex flex-col gap-1 items-start justify-start md:text-sm lg:text-sm text-xs font-medium sm:font-semibold text-slate-100">
              <li>Easy Booking</li>
              <li>Customer Support</li>
              <li>Hasle Free</li>
            </ul>
          </div>
        </div>
      </div>
      <footer
        className="md:py-12 lg:py-12 py-4 z-30 relative flex"
        style={{
          backgroundImage: `url(${FooterHero.src})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="max-w-[1400px]  px-4 mx-auto">
          <div className="overflow-hidden filter bg-gradient-to-b from-slate-100/50 via-white/50 to-slate-200/50 backdrop-blur-md sticky z-10 p-10 shadow-lg border border-zinc-300 rounded-3xl px-4 md:px-6 grid grid-cols-1 lg:px-8 xl:px-12 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl text-gray-700 font-[500] __className_1fc36d">
                Our Vision
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs leading-6 -tracking-tight">
                Discover the world with Vakratund Tours Travels – Where
                Adventure meets Inspiration. Join us as We Explore Captivating
                Destinations, Connect with Influencers, and Create Memories that
                last a Lifetime. Your Journey begins here{" "}
                <Link className="text-[#36a39e] hover:text-[#0b8d7c]" href="/">
                  More
                </Link>{" "}
              </p>
            </div>

            <div className="space-y-4 md:pl-8 md:border-l-2 border-white/30">
              <h3 className="text-lg md:text-xl text-gray-700 font-[500] ">
                Quick Link
              </h3>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-1">
                <Link
                  className="hover:text-primary-main text-sm max-w-max text-gray-700 transition-colors duration-200 ease-in-out"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="hover:text-primary-main  text-sm  max-w-max text-gray-700 transition-colors duration-200 ease-in-out"
                  href="/review"
                >
                  Review
                </Link>
                <Link
                  className="hover:text-primary-main  text-sm  max-w-max text-gray-700 transition-colors duration-200 ease-in-out"
                  href="/Blogs"
                >
                  Travel Blogs
                </Link>
                <Link
                  className="hover:text-primary-main  text-sm  max-w-max text-gray-700 transition-colors duration-200 ease-in-out"
                  href="/aboutus"
                >
                  About Us
                </Link>
                <Link
                  className="hover:text-primary-main  text-sm  max-w-max text-gray-700 transition-colors duration-200 ease-in-out"
                  href="/Contactus"
                >
                  Contact Us
                </Link>
                <Link
                  className="hover:text-primary-main  text-sm  max-w-max text-gray-700 transition-colors duration-200 ease-in-out"
                  href="/privacypolicy"
                >
                  Privacy Policy
                </Link>
                <Link
                  className="hover:text-primary-main  text-sm  max-w-max text-gray-700 transition-colors duration-200 ease-in-out"
                  href="/payment"
                >
                  Payment
                </Link>
                <Link
                  className="hover:text-primary-main  text-sm  max-w-max text-gray-700 transition-colors duration-200 ease-in-out"
                  href="/termsandconditions"
                >
                  Terms and Condition
                </Link>
              </div>
            </div>
            <div className="space-y-4 md:pl-8 md:border-l-2 border-white/30">
              <h3 className="text-lg md:text-xl text-gray-700 font-[500] __className_1fc36d">
                Top Categories
              </h3>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-1">
                <Link
                  className="hover:text-primary-main  text-sm  max-w-max text-gray-700 transition-colors duration-200 ease-in-out"
                  href="/"
                >
                  International Trips
                </Link>
                <Link
                  className="hover:text-primary-main  text-sm  max-w-max text-gray-700 transition-colors duration-200 ease-in-out"
                  href="/"
                >
                  Domestic Trips
                </Link>
                <Link
                  className="hover:text-primary-main  text-sm  max-w-max text-gray-700 transition-colors duration-200 ease-in-out"
                  href="/upcomingtrip"
                >
                  Upcoming Trips
                </Link>
                <Link
                  className="hover:text-primary-main  text-sm  max-w-max text-gray-700 transition-colors duration-200 ease-in-out"
                  href="/destination/weekendtrip"
                >
                  Weekend Trips
                </Link>
              </div>
            </div>
            <div className="space-y-4 text-sm md:pl-8 md:border-l-2 border-white/30">
              <div>
                <h3 className="text-xl md:text-2xl text-gray-700 font-[500] __className_1fc36d">
                  Contact Us
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Email :<span>vakratundtour@gmail.com</span>
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Phone :9284205536
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Website :<span> www.vakratund.com</span>
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Office :<span> Pune ,Maharastara 410401</span>
                </p>
                <div className="flex justify-center items-center w-full rounded-lg h-24  mt-20">
                  <div className="flex justify-around gap-2 items-center">
                    <div className="group transition-all duration-700 flex justify-center items-center rounded-md bg-[#4aaca8] w-12 h-12 hover:bg-white hover:text-[#36a39e]">
                      <FaInstagram
                        size={24}
                        className="text-white transition-all duration-700 group-hover:text-[#36a39e]"
                      />
                    </div>
                    <div className="group transition-all duration-700 flex justify-center items-center rounded-md bg-[#4aaca8] w-12 h-12 hover:bg-white hover:text-[#36a39e]">
                      <SlSocialFacebook
                        size={24}
                        className="text-white transition-all duration-700 group-hover:text-[#36a39e]"
                      />
                    </div>
                    <div className="group transition-all duration-700 flex justify-center items-center rounded-md bg-[#4aaca8] w-12 h-12 hover:bg-white hover:text-[#36a39e]">
                      <FaWhatsapp
                        size={24}
                        className="text-white transition-all duration-700 group-hover:text-[#36a39e]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="md:m-10 m-4 flex items-center justify-center  relative ">
        {/* <Image
          className="w-full object-fill h-80 rounded-lg "
          src={Conatctus}
          alt="Conatctus"
        /> */}

        <div className="text-center p-4">
          <h3 className="font-bold text-2xl md:text-4xl text-white">
            Vakaratund Tours
          </h3>
          <p className="text-xs md:text-base text-white">
            At-Kanhe Jambhul, Tal-Maval Dist-Pune, Maharashtra 412106
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center text-white gap-2 md:gap-10 mt-5">
            <p className="flex items-center">
              <i className="pi pi-envelope mr-1"></i>
              vakratundtour@gmail.com
            </p>
            <p className="flex items-center">
              <i className="pi pi-phone mr-1"></i>
              +91-9284205536
            </p>
            <p className="flex items-center">
              <i className="pi pi-globe mr-1"></i>
              <Link href="https://www.vakratundtours.com/">
                https://www.vakratundtours.com/
              </Link>
            </p>
          </div>
        </div>
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

      <div className="w-11/12 mx-auto z-10 bg-white md:mb-0 lg:mb-0 mb-8 ">
        <Divider orientation="horizontal" />
      </div>

      <p className="text-center mt-2 text-white mb-3 font-sans md:text-xs lg:text-xs text-tiny px-1 uppercase w-full">
        {` 2024 Vakaratund tour & Adventure - All rights reserved.`}
      </p>

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
