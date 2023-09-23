"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { LinkItems } from "@/config/nav";
import { useActiveSectionContext } from "@/context/activeSectionContextProvider";

const SectionNav = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <nav className=" hidden lg:space-y-4 lg:flex flex-col lg:mb-2">
      {LinkItems.map((item, index) => (
        <div className="flex items-center justify-between ">
          <Link
            key={index}
            href={item.disabled ? "#" : item.href}
            // color="foreground"
            aria-current="page"
            className="text-2xl font-medium font-jetbrains "
            onClick={() => {
              setActiveSection(item.name);
              setTimeOfLastClick(Date.now());
            }}
          >
            {item.name}
          </Link>
          {item.name === activeSection && (
            <motion.div
              className="bg-gray-900 w-8 h-1 animate-pulse "
              layoutId="activeSection"
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 150,
                damping: 32,
              }}
            ></motion.div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default SectionNav;
