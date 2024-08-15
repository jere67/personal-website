"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/NavbarWithMenu";
import { cn } from "@/utils/cn";
import Image from "next/image";

export function NavbarExternal() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-4 max-w-4xl" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <a href="/" className="relative mr-auto">
          <Image className="" width="24" height="24" src="./moon.svg" alt="moon"/>
        </a>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about">Who Am I</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/projects">View All</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
