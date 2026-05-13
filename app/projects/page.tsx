import Footer from "@/components/Footer";
import React from "react";
import { Projects } from "./Projects";
import { TracingBeam } from "@/components/ui/TracingBeam";
import { Navbar } from "@/components/ui/Navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-clip w-full">
      <Navbar navItems={navItems} />
      <div className="relative w-full pt-8 z-30">
        <Projects />
        <Footer showContact={false} />
      </div>
    </main>
  );
}