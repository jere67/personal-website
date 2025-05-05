import Footer from "@/components/Footer";
import React from "react";
import About from "./About";
import { Navbar } from "@/components/ui/Navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <menu>
      <Navbar navItems={navItems} />
      <div className="container mx-auto px-4 pt-8">
        <About />
        <Footer showContact={false} />
      </div>
    </menu>
  );
}
