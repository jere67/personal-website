import React from "react"
import { Navbar } from "@/components/ui/Navbar"
import Footer from "@/components/Footer"
import AboutContent from "./About"
import { navItems } from "@/data"

export default function AboutPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-neutral-300 selection:bg-white selection:text-black">
      <Navbar navItems={navItems} />
      <AboutContent />
      <Footer showContact={false} />
    </main>
  )
}