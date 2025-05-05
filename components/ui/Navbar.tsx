"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

export const Navbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.div
      className={cn(
        "fixed top-0 inset-x-0 z-50",
        "w-full",
        "bg-black/80 backdrop-blur-sm",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className={cn(
          "flex justify-between items-center",
          "px-4 sm:px-6 lg:px-8 py-4",
        )}>
          <Link href="/" aria-label="Homepage" onClick={closeMobileMenu}>
            <Image
               src="/moon.svg"
               alt="moon logo"
               width={36}
               height={36}
               className="h-9 w-9"
               priority
             />
          </Link>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((navItem, idx) => (
              <Link
                key={`link-desktop-${idx}`}
                href={navItem.link}
                className={cn(
                  "relative text-base font-medium",
                  "text-neutral-300 hover:text-white",
                  "transition-colors duration-200"
                )}
              >
                {navItem.name}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "close main menu" : "open main menu"}
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-700/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {mobileMenuOpen ? <HiX className="h-6 w-6"/> : <HiMenu className="h-6 w-6"/>}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-neutral-900/95 backdrop-blur-sm border-t border-neutral-700"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-1">
              {navItems.map((navItem, idx) => (
                <Link
                  key={`link-mobile-${idx}`}
                  href={navItem.link}
                  onClick={closeMobileMenu}
                  className={cn(
                    "block rounded-md px-3 py-2 text-base font-medium",
                    "text-neutral-300 hover:text-white hover:bg-neutral-700/50",
                    "transition-colors duration-200"
                  )}
                >
                  {navItem.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
