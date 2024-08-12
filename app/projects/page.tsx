import Footer from "@/components/Footer";
import { NavbarExternal } from "@/components/NavbarExternal";
import React from "react";
import { Projects } from "./Projects";
import { TracingBeam } from "@/components/ui/TracingBeam";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col mx-auto sm:px-10 overflow-clip ">
      <TracingBeam>
        <NavbarExternal />
        <div className="container mx-auto px-4 pt-8">
          <Projects />
          <Footer showContact={false} />
        </div>
      </TracingBeam>
    </main>
  );
}
