"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "../theme-toggle";
import Link from "next/link";
const menuItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Gallery",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

type Props = {};

const Navbar = (props: Props) => {
  // const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };
  return (
    <div className="relative w-full lg:w-[80%] py-4 mx-auto 
     ">
      <ul className="flex items-center  justify-evenly ">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className={`font-jetbrains transition hover:scale-110 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center `}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
