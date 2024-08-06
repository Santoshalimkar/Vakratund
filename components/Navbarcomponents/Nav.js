"use client"
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Divider,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import Image from "next/image";
import Logo from "../../public/Navabar/Logo2.png";
import { NavigationMenuDemo } from "./Navmenu";
import { FaPhone } from "react-icons/fa6";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { IoMdMenu } from "react-icons/io";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import {motion} from "framer-motion"

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeitem, setactiveitem] = useState();
  const active =
    "uppercase text-xs font-bold cursor-pointer list-none text-[#FF7143]";
  const unactive = "uppercase text-xs font-bold cursor-pointer list-none";

  const Extendmenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const linkitem = [
    "HOME",
    "packages",
    "blog",
    "CONTACT US",
  ];

  const handleredirect = (link) => {
    switch (link) {
      case "HOME":
        router.push("/");
        break;
      case "packages":
        router.push("/destination");
        break;
      case "blog":
        router.push("/Blogs");
        break;
      case "CONTACT US":
        router.push("/Contactus");
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    switch (pathname) {
      case "/":
        setactiveitem("HOME");
        break;
      case "/Blogs":
        setactiveitem("blog");
        break;
      case "/destination":
        setactiveitem("packages");
        break;
      case "/Contactus":
        setactiveitem("CONTACT US");
        break;

      case pathname.startsWith("/Jobdetails"):
        setactiveitem("Careers");
        break;
      case pathname.startsWith("/Oursolution"):
        setactiveitem("OUR SOLUTIONS");
        break;
      default:
        setactiveitem("");
    }
  }, [pathname]);




  return (
    <Navbar maxWidth="full" className="w-full shadow-md bg-white">
      <NavbarBrand>
        <Link href="/">
        <Image
            className="md:w-32 md:h-32 lg:w-32 lg:h-32 hidden md:flex lg:flex -ml-8  object-contain"
            src={Logo}
            alt="logo"
          />
          </Link>
           <Sheet>
          <SheetTrigger>
           <IoMdMenu size={24} className="md:hidden lg:hidden flex"/>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <div className="flex justify-between items-center w-full">
                  <div className="bg-slate-100 rounded-md">
                    <Image className="" src={Logo} alt="logo" />
                  </div>
                  {/* <div className="w-8 h-8 bg-black rounded-full flex justify-center items-center">
                    <SheetClose>
                      <span className="text-lg font-bold text-white p-2  text-center">
                        X
                      </span>
                    </SheetClose>
                  </div> */}
                </div>
              </SheetTitle>
              <SheetDescription>
                <div className="flex flex-col justify-between sm:gap-24 gap-16  items-start mt-8 overflow-scroll">
                  <div className="flex justify-center items-start gap-4 flex-col w-full">
                    {linkitem.map((value, index) => (
                      <div
                        key={index}
                        className="w-full flex justify-start items-start flex-col gap-4"
                      >
                        <SheetClose>
                          <span
                            onClick={() => handleredirect(value)}
                            className={
                              activeitem === value
                                ? "text-sm font-semibold uppercase text-[#0b8d7c]"
                                : "text-sm font-semibold uppercase text-black"
                            }
                          >
                            {value}
                          </span>
                        </SheetClose>
                        <Divider />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-cente items-center text-center w-full">
                    <SheetClose>
                      <button
                        onClick={() => router.push("/Contactus")}
                        className=" h-8 bg-[#0b8d7c] text-white rounded-full  w-52 font-bold"
                      >
                       +91-9284205536
                      </button>
                    </SheetClose>
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavigationMenuDemo />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className="ring-1 ring-[#0b8d7c] rounded-full bg-white text-[#0b8d7c] -mr-4"
            href="#"
            variant="solid"
          >
            <FaPhone className="text-[#0b8d7c]" /> +91-9284205536
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
