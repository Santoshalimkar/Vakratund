"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import { IoLogoFacebook } from "react-icons/io";
import Image from "next/image";
import axios from "axios";
import { FacebookEmbed } from "react-social-media-embed";
import { InstagramEmbed } from "react-social-media-embed";

const Page = () => {
    const [selected, setSelected] = useState(1);
    const [instagramData, setInstagramData] = useState([]);
    const [facebookfeed, setfacebookFeed] = useState();
    const [error, setError] = useState(null);
    const [mergedData, setMergedData] = useState([]);
    const [numPosts, setNumPosts] = useState(5);
    const [isClient, setIsClient] = useState(false);

    const fetchData = async () => {
        const instagramToken = `IGQWRPMWlFV3lwd0d1WjVxcFlRSFhlZAVFDaGFRSmRoRW5IWXVGa3ZAKMUJFVElBM0xDZAUZAvZAUloUzdkZAE1lWDZAQTTFXX01sNVZAJVDJaQzFDMzEybGNqNmdOblZAybmpZAZAXEwazJYNl9KbGlUZAWdtRGRxcU4wV3VaUjAZD`;
        const facebookToken = `EABYU2oKqNHUBOwtDOk5QAKD7EEUFep0ZASezWTku6FEkQEhuCJfCcKHB7wZBJwqDFcWqZCUsM8c19SniSHrb9U6vXfZBhPRldaOqQl9gpu1FWlUPUQbn2hzAGcVEIuBG2DPitUpwakSfeyvLeZA7g8GP6ZAOnihHnADUH2nHg7azfOLuZCbJgPZBF2fPOp81030c`;
    
        try {
          const instagramResponse = await axios.get(
            `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink,username&access_token=${instagramToken}`
          );
    
          const facebookResponse = await axios.get(
            `https://graph.facebook.com/v12.0/me/feed?fields=id,message,created_time,full_picture,permalink_url&access_token=${facebookToken}`
          );
    
          if (instagramResponse.status !== 200 || facebookResponse.status !== 200) {
            throw new Error("Failed to fetch data");
          }else{
            setInstagramData(instagramResponse.data.data)
            setfacebookFeed(facebookResponse.data.data)
          }
         
         
        } catch (error) {
          console.log(error);
          setError(error.message);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);

console.log(instagramData)

  return (
    <motion.div
      initial={{ opacity: 0.6 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center items-center w-full gap-8 mx-auto"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-12 flex flex-col justify-center items-center gap-4"
      >
        <h2 className="font-bold text-4xl leading-8 capitalize">
          our<span className="text-redtheme"> Blogs!</span>
        </h2>
        <p className="text-sm font-medium leading-4 text-foreground-700 capitalize">
          Explore all our Social media .
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4 place-content-center justify-items-center py-8 h-auto px-2 w-11/12">

      {instagramData?.slice(0,10).map((post,key) => (
        <InstagramEmbed key={key} url={post?.permalink} width={380} />
        ))}
        
      </div>
    </motion.div>
  );
};

export default Page;
