import Footer from "@/components/Footer";
import { NavbarExternal } from "@/components/NavbarExternal";
import React from "react";
import About from "./About";

export default function Home() {
  return (
    <menu>
      <NavbarExternal />
      <div className="container mx-auto px-4 pt-8">
        <About />
        <Footer showContact={false} />
      </div>
    </menu>
  );
}
