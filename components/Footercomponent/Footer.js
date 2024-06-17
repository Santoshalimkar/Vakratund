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
import Logo from '../../public/Navabar/Logo2.png'
import Conatctus from '../../public/Footer/Conatctus.png'

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
    <div className="w-full flex flex-col bg-[#01afd1]">
      <div
        className="md:m-10 m-4 flex items-center justify-center border border-white rounded-lg  relative "
      >
       <Image className="w-full object-fill h-80 rounded-lg " src={Conatctus} alt="Conatctus"/>
      </div>
      <div className="bg-[#01afd1] md:h-40 lg:h-40 h-56 md:pb-0 lg:pb-0 pb-4 w-full gap-8 flex flex-col md:flex-row lg:flex-row justify-between md:items-center lg:items-center items-start md:px-12 lg:px-12 px-4 ">
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
            className="border-none text-white w-11/12 focus:outline-none bg-[#01afd1] p-2"
          />
          <span
            // onClick={handleSubscribe}
            className="text-sm font-extrabold text-[#FF7143] uppercase cursor-pointer"
          >
            send
          </span>
        </div>
      </div>
     
      <div className="w-11/12 mx-auto z-10 bg-white md:mb-0 lg:mb-0 mb-8">
        <Divider orientation="horizontal" />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#01afd1] md:h-[60vh] lg:h-[60vh] h-[55vh]">
        <div className="w-11/12 mx-auto flex md:flex-row flex-col justify-between items-start ">
          <div className="flex flex-wrap md:gap-24 lg:gap-24 gap-4 w-full items-start">
            <div className="flex flex-col gap-4 justify-start items-start text-white uppercase">
              <p className="text-[#FF7143] font-semibold md:text-sm lg:text-sm text-[0.7rem]">
               Tours
              </p>
              <span
                className="md:text-xs hover:text-[#FF7143] lg:text-xs text-[0.7rem] text-white cursor-pointer"
              >
                A
              </span>
              <span
                className="md:text-xs hover:text-[#FF7143] lg:text-xs text-[0.7rem] text-white cursor-pointer"
              >
                O
              </span>
              <span
                className="md:text-xs hover:text-[#FF7143] lg:text-xs text-[0.7rem] text-white cursor-pointer"
              >
                o
              </span>
              <span
                className="md:text-xs hover:text-[#FF7143] lg:text-xs text-[0.7rem] text-white cursor-pointer"
              >
                p
              </span>
              <span
                className="md:text-xs hover:text-[#FF7143] lg:text-xs text-[0.7rem] text-white cursor-pointer"
              >
                b
              </span>
            </div>
            <div className="flex flex-col gap-4 justify-start items-start text-white uppercase">
              <p className="text-[#FF7143] font-semibold md:text-xs lg:text-xs text-[0.7rem]">
               Packages
              </p>
              <span
                className="md:text-xs hover:text-[#FF7143] lg:text-xs text-[0.7rem] text-white cursor-pointer"
              >
                u
              </span>
              <span
                className="md:text-xs hover:text-[#FF7143] lg:text-xs text-[0.7rem] text-white cursor-pointer"
              >
                d
              </span>
              <span
                className="md:text-xs hover:text-[#FF7143] lg:text-xs text-[0.7rem] text-white cursor-pointer"
              >
                s
              </span>
              <span
                className="md:text-xs hover:text-[#FF7143] lg:text-xs text-[0.7rem] text-white cursor-pointer"
              >
                m
              </span>
              <span
                className="md:text-xs hover:text-[#FF7143] lg:text-xs text-[0.7rem] text-white cursor-pointer"
              >
                c
              </span>
            </div>
            <div className="flex flex-col gap-4 justify-start items-start text-white uppercase">
              <p className="text-[#FF7143] font-semibold md:text-xs lg:text-xs text-[0.7rem]">
                Blogs
              </p>
              <span
                onClick={() => router.push("/Termsandconditions")}
                className="md:text-xs lg:text-xs text-[0.6rem] text-white cursor-pointer hover:text-[#FF7143]"
              >
                t
              </span>
              <span
                onClick={() => router.push("/Policy")}
                className="md:text-xs lg:text-xs text-[0.7rem] text-white cursor-pointer hover:text-[#FF7143]"
              >
                p
              </span>
            </div>
          </div>
          <div className="flex flex-col md:w-80 mt-4 md:mt-0 justify-start items-center gap-2">
            <div className="flex justify-start items-start gap-2 flex-col">
              <p className="text-[#FF7143] font-semibold text-sm uppercase">
                contact us
              </p>
              <span className="text-sm text-white cursor-pointer uppercase">
                email
              </span>
              <h6 className="md:text-2xl lg:text-2xl text-lg font-medium text-white">
                <Link href={"mailto:info@angadiworldtech.com"}>
                  info@Vakaratund.com
                </Link>
              </h6>

              <div className="flex md:flex-col lg:flex-col justify-between items-start gap-8 md:gap-2 lg:gap-2">
                <div>
                  <span className="text-sm text-white cursor-pointer uppercase">
                    Phone
                  </span>
                  <h6 className="md:text-2xl lg:text-2xl text-sm font-medium text-white">
                    +91-8669186483
                    <br></br>+91-8669186483
                  </h6>
                </div>
                <div>
                </div>
              </div>
              <div className="flex justify-start items-center gap-2 mt-2 pb-4">
                <AiFillInstagram
                  onClick={() =>
                    router.push("")
                  }
                  size={45}
                  className="text-white hover:text-[#FF7143]"
                />
                <FaFacebookSquare
                  onClick={() =>
                    router.push("")
                  }
                  size={40}
                  className="text-white hover:text-[#FF7143]"
                />
                <IoLogoLinkedin
                  onClick={() =>
                    router.push(
                      ""
                    )
                  }
                  size={40}
                  className="text-white hover:text-[#FF7143]"
                />
                <FaSquareTwitter
                  size={40}
                  className="text-white hover:text-[#FF7143]"
                />
                <IoLogoYoutube
                  onClick={() =>
                    router.push(
                      ""
                    )
                  }
                  size={45}
                  className="text-white hover:text-[#FF7143]"
                />
              </div>
            </div>
          </div>
        </div>

        <div>{/* dropdown */}</div>
      </div>
      <Divider className="w-11/12 mx-auto z-10 bg-white " />
      <div className="w-full h-12 bg-[#01afd1] flex justify-start items-center md:px-10 lg:px-10 px-4">
        {/* <Image className=" " src={Logo} alt="brand" /> */}
        <p className="text-center text-white font-bold md:text-xs lg:text-xs text-[0.4rem] uppercase w-full">
          {` 2024 Vakaratund tour & Adventure - All rights reserved.`}
        </p>
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
