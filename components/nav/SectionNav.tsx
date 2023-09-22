"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LinkItems } from "@/config/nav";
import { useActiveSectionContext } from "@/context/activeSectionContextProvider";

const SectionNav = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <nav className=" hidden pl-28 space-y-8 lg:flex flex-col">
      {LinkItems.map((item, index) => (
        <div className="grid grid-cols-2">
          <Link
            key={index}
            href={item.disabled ? "#" : item.href}
            color="foreground"
            aria-current="page"
            className={cn(
              "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
              activeSection === item.href.substring(1)
                ? "text-foreground"
                : "text-foreground/60",
              item.disabled && "cursor-not-allowed opacity-80"
            )}
            onClick={() => {
              setActiveSection(item.name);
              setTimeOfLastClick(Date.now());
            }}
          >
            {item.name}
          </Link>
          {item.name === activeSection && (
            <motion.div
              className="bg-gray-900 w-8 h-1 animate-pulse"
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
