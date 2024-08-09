import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Navbar } from "@/components/ui/Navbar";
import { TracingBeam } from "@/components/ui/TracingBeam";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col mx-auto sm:px-10 overflow-clip ">
      <TracingBeam className="max-w-7xl w-full">
        <Navbar navItems={navItems}/>
        <Hero />
        <Grid />
        <Projects />
        <Education />
        <Skills />
        <Footer />
      </TracingBeam>
    </main>
  );
}
