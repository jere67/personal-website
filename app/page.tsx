import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { Navbar } from "@/components/ui/Navbar";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col mx-auto sm:px-10 overflow-clip ">
      <div className="max-w-7xl w-full">
        <Navbar navItems={navItems}/>
        <Hero />
        <Grid />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
