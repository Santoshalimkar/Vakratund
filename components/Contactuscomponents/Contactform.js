"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardBody, Input } from "@nextui-org/react";
import { Select, SelectItem, Textarea, Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { IoMdMail } from "react-icons/io";
import { FcBusinessman } from "react-icons/fc";
import { FcAddressBook } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { FcCallback } from "react-icons/fc";
import { FcComments } from "react-icons/fc";
import ContactMap from "./ContactMap";

const Contactform = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    serviceRequired: "",
    message: "",
  });

  const services = [
    { key: "service1", label: "Service 1" },
    { key: "service2", label: "Service 2" },
    { key: "service3", label: "Service 3" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleServiceChange = (selectedKeys) => {
    const selectedKey = Array.from(selectedKeys)[0];
    const selectedLabel = services.find(
      (service) => service.key === selectedKey
    ).label;
    setFormData({
      ...formData,
      serviceRequired: selectedLabel,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any required field is empty
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.mobileNumber ||
      !formData.email ||
      !formData.serviceRequired
    ) {
      toast.error("Please fill out all required fields");
      return;
    }

    const sendForm = async () => {
      const response = await fetch("/api/Contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setFormData({
        firstName: "",
        lastName: "",
        mobileNumber: "",
        email: "",
        serviceRequired: "",
        message: "",
      });
    };

    toast.promise(sendForm(), {
      loading: "Sending message...",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again.",
    });
  };

  const locationname = "kakatiya hills, pragati nagar,Kukatpally-500090";
  const location = `https://maps.google.com/maps?q=${locationname}&t=k&z=10&ie=UTF8&iwloc=&output=embed`;

  return (
    <>
      <div className="flex flex-col gap-4 justify-start items-start px-3 py-1 w-full  ">
        <h6 className="capitalize md:text-3xl text-xl  font-medium text-start">
          {`Get in Touch`}
        </h6>
        <div className="flex flex-col w-full justify-start items-start gap-4">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-4 place-content-center justify-between items-start">
              <Input
                type="text"
                name="firstName"
                variant="bordered"
                radius="sm"
                className="w-full rounded-none"
                size="lg"
                placeholder="First Name"
                startContent={
                  <FcBusinessman className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                value={formData.firstName}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="lastName"
                variant="bordered"
                radius="sm"
                className="w-full rounded-none"
                size="lg"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                startContent={
                  <FcBusinessman className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
              <Input
                type="text"
                name="mobileNumber"
                variant="bordered"
                radius="sm"
                className="w-full rounded-none"
                size="lg"
                placeholder="Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                startContent={
                  <FcCallback className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
              <Input
                type="text"
                name="email"
                variant="bordered"
                radius="sm"
                className="w-full rounded-none"
                size="lg"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                startContent={
                  <FcAddressBook className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
            </div>
            <div className="w-full mt-4">
              <Select
                name="serviceRequired"
                label="Service Required"
                variant="bordered"
                size="md"
                radius="sm"
                className="w-full mx-auto"
                selectedKeys={new Set([formData.serviceRequired])}
                onSelectionChange={handleServiceChange}
              >
                <SelectItem key="">Select a service</SelectItem>
                {services.map((service) => (
                  <SelectItem key={service.key}>{service.label}</SelectItem>
                ))}
              </Select>
            </div>
            <div className="w-full mt-4">
              <Textarea
                name="message"
                variant="bordered"
                placeholder="Your message (Optional)"
                className="w-full"
                value={formData.message}
                onChange={handleChange}
                startContent={
                  <FcComments className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
            </div>
            <div className="w-full flex justify-center items-center mt-4">
              <Button
                type="submit"
                className="w-60 rounded-full bg-[#0b8d7c] text-white text-center"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Contactform;
