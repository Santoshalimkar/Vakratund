import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
import Image from "next/image";
import Logo from '../../public/Navabar/Logo2.png'
import { NavigationMenuDemo } from "./Navmenu";
import { FaPhone } from "react-icons/fa6";

export default function Nav() {
  // const icons = {
  //   chevron: <ChevronDown fill="currentColor" size={16} />,
  //   scale: <Scale className="text-warning" fill="currentColor" size={30} />,
  //   lock: <Lock className="text-success" fill="currentColor" size={30} />,
  //   activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
  //   flash: <Flash className="text-primary" fill="currentColor" size={30} />,
  //   server: <Server className="text-success" fill="currentColor" size={30} />,
  //   user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  // };

  return (
    <Navbar maxWidth="full" className="w-full shadow-md ">
      <NavbarBrand>
        <Image className="w-32 h-32 object-contain" src={Logo} alt='logo'/>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
       <NavigationMenuDemo/>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} className="ring-1 ring-[#01afd1] rounded-full bg-white text-[#01afd1]" href="#" variant="solid">
           <FaPhone className="text-[#01afd1]"/> +91-8669186483
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}



