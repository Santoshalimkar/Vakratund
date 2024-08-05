import React from "react";
import Contactform from "./Contactform";
import ContactMap from "./ContactMap";

import toast, { Toaster } from "react-hot-toast";
import { IoMdMail } from "react-icons/io";
import { FcBusinessman } from "react-icons/fc";
import { Card, CardBody, Input } from "@nextui-org/react";
import { FcAddressBook } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { FcCallback } from "react-icons/fc";
import { FcComments } from "react-icons/fc";

const ContactFormMain = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full p-8  gap-8 mx-auto  ">
      <div className="py-10 flex flex-col justify-center items-center gap-4">
        <h2 className="font-bold text-4xl leading-8 capitalize">
          contact <span className="text-redtheme"> us!</span>
        </h2>
        <p className="text-sm text-center font-medium leading-4 text-foreground-700 capitalize">
          let’s get started! reach out to us, we will get the work done.
        </p>
      </div>
      
      <div className="flex lg:flex-row flex-col md:w-11/12 w-full justify-center items-center gap-4 mx-auto">
       
        <Card className="md:w-[30rem] w-11/12">
          <CardBody className="flex justify-start items-center w-full flex-row gap-4 p-3">
            <div className="flex justify-center items-center h-16 w-16 bg-greentheme rounded-full">
              <FcAddressBook size={24}/>
             </div>
            <div className="w-2/4 flex flex-col justify-start items-start gap-1">
              <h6 className="font-bold text-sm text-[#0b8d7c] capitalize">e-mail</h6>
              <p className="text-xs">
                Info@Vakaratund.com <br />
              </p>
            </div>
          </CardBody>
        </Card>
        <Card className="md:w-[30rem] w-11/12">
          <CardBody className="flex justify-start items-center w-full flex-row gap-4 p-3">
            <div className="flex justify-center items-center h-16 w-16 bg-greentheme rounded-full">
            <FcHome size={24}/>
            </div>
            <div className="w-2/4 flex flex-col justify-start items-start gap-1">
              <h6 className="font-bold text-sm text-[#0b8d7c] capitalize">address</h6>
              <p className="text-xs">{`Address : kakatiya hills, pragati nagar, Kukatpally-500090`}</p>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="flex lg:flex-row  flex-row w-full justify-between items-start gap-4 mx-auto py-12 shadow-xl rounded-lg px-12 ring-1 ring-gray-200">
        <Contactform />
        <ContactMap />
      </div>
    </div>
  );
};

export default ContactFormMain;
