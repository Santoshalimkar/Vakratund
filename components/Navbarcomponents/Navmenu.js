"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Logo from "../../public/Navabar/Logo2.png";

const components = [

  {
    title: "Trending Trips",
    href: "/international",
    subLinks: [
      {
        title: "Upcoming Trips",
        href: "/upcomingtrip",
      },
      {
        title: "Weekend Trips",
        href: "/destination/weekendtrip",
      },
    ],
  },
  {
    title: "International Trips",
    href: "/international",
    subLinks: [
      {
        title: "Dubai Trips",
        href: "/destination/upcomingtrip",
      },
      {
        title: "Maldives Trips",
        href: "/destination/weekendtrip",
      },
    ],
  },

  {
    title: "India Packages",
    href: "/destination",
    subLinks: [
      {
        title: "Ladakh",
        href: "/destination",
      },
      {
        title: "Kashmir",
        href: "/destination",
      },
      {
        title: "Andaman",
        href: "/destination",
      },
      {
        title: "Kerla",
        href: "/destination",
      },
      {
        title: "Sikkim",
        href: "/destination",
      },
      {
        title: "Rajasthan",
        href: "/destination",
      },
      
    ],
  },
  
  
  
  {
    title: "Trending Romantic Journeys",
    href: "/international",
    subLinks: [
      {
        title: "Honeymoon Packages",
        href: "/honeymoon-packages",
      },
      
    ],
  },
  
  
  
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-[#0b8d7c]">
            About us
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-[#f2fdff]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex bg-slate-100 h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image className="w-44" src={Logo} alt="logo" />
                    <div className="mb-2 mt-4 text-sm font-medium ">
                      Vakratund - Tour and Adventure
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger className="text-[#0b8d7c]">
          Categories
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-[#f2fdff]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}

<NavigationMenuItem>
          <NavigationMenuTrigger className="text-[#0b8d7c]">
            Categories
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-[#f2fdff]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  subLinks={component.subLinks} // Pass subLinks here
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <Link href="/Blogs" legacyBehavior passHref>
            <NavigationMenuLink
              className={"text-sm font-medium text-[#0b8d7c]"}
            >
              Blogs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem >
          <Link href="/payment" legacyBehavior passHref>
            <NavigationMenuLink
              className={"text-sm font-medium text-[#0b8d7c] ml-5"}
            >
              Payments
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

      </NavigationMenuList>

      
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, subLinks ,...props }, ref) => {
    return (
      <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
          {subLinks && (
            <ul className="ml-4 mt-2 space-y-2">
              {subLinks.map((subLink) => (
                <li key={subLink.href}>
                  <Link href={subLink.href} legacyBehavior passHref>
                    <a className="font-medium text-sm text-[#0b8d7c] hover:underline">
                      {subLink.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </a>
      </NavigationMenuLink>
    </li>
    );
  }
);
ListItem.displayName = "ListItem";
