"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GlobeDemo } from "./ui/GridGlobe"
import StacksCard from "./ui/StacksCard"
import CodingHours from "./ui/CodingHours"
import SectionHeader from "./ui/SectionHeader"
import AmbientLighting from "./ui/AmbientLighting"
import { useDetroitTime } from "@/hooks/useDetroitTime"

export const WidgetCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.5)] group ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-50" />
    {children}
  </div>
)

const PhotoCarousel = () => {
  const images = [
    "/personal/img1.jpg",
    "/personal/img2.jpg",
    "/personal/img3.jpg",
    "/personal/img4.jpg",
    "/personal/img5.jpg",
    "/personal/img6.jpg",
    "/personal/img7.jpg",
    "/personal/img8.jpg",
    "/personal/img9.jpg",
    "/personal/img10.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  },[currentIndex, images.length]) // Reset timer when currentIndex changes manually

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative w-full h-full min-h-[300px] bg-[#050505] overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          alt={`Personal memory ${currentIndex + 1}`}
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
      
      {/* Hover Controls (Left/Right Arrows) */}
      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={goToPrev}
          className="p-3 rounded-full bg-black/20 hover:bg-black/60 text-white backdrop-blur-md border border-white/10 transition-all transform hover:scale-110"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={goToNext}
          className="p-3 rounded-full bg-black/20 hover:bg-black/60 text-white backdrop-blur-md border border-white/10 transition-all transform hover:scale-110"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Interactive Bottom Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {images.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrentIndex(i)}
            className="group/dot p-2 -m-2" // Larger click target
            aria-label={`Go to image ${i + 1}`}
          >
            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
              i === currentIndex 
                ? 'bg-white scale-150' 
                : 'bg-white/30 group-hover/dot:bg-white/60 group-hover/dot:scale-125'
            }`} />
          </button>
        ))}
      </div>
    </div>
  )
}

const CurrentlyBuilding = () => {
  return (
    <div className="w-full h-full p-8 flex flex-col justify-between min-h-[300px] lg:min-h-[400px]">
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">Live Status</h4>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[9px] font-mono tracking-widest text-emerald-400 uppercase">Building</span>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-sm text-neutral-400 font-light mb-2">Currently working on</p>
        <h3 className="text-2xl lg:text-3xl font-normal text-white leading-tight tracking-tight">
          Aviation <br/>
          <span className="italic text-neutral-500">Safety.</span>
        </h3>
      </div>

      <div className="mt-8 border-t border-white/5 pt-6">
        <div className="flex gap-1 mb-2">
          <div className="w-8 h-1 bg-white/20 rounded-full" />
          <div className="w-4 h-1 bg-white/20 rounded-full" />
          <div className="w-12 h-1 bg-white/20 rounded-full" />
        </div>
        <p className="text-[10px] font-mono text-neutral-600">~ git commit -m &quot;optimize latency&quot;</p>
      </div>
    </div>
  )
}

const About = () => {
  const time = useDetroitTime()

  return (
    <section id="about" className="relative z-20 bg-[#050505] text-neutral-300 py-32 overflow-hidden">
      <AmbientLighting />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        
        <SectionHeader label="About Me" className="mb-16" />

        {/* 
            UPDATED GRID LAYOUT 
            Row 1: Bio (1) + Hours (1) + Photos (2) = 4
            Row 2: Building (1) + Globe (3) = 4
            Row 3: Marquee (4)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 1. Bio / Identity Card (Now 1 Col - Adjusted Padding/Typography for vertical fit) */}
          <WidgetCard className="lg:col-span-1 p-6 lg:p-8 flex flex-col justify-between min-h-[300px]">
            <div>
              <h3 className="text-2xl font-light text-white leading-tight mb-4 tracking-tight">
                I&apos;m a rising senior attending the <span className="italic text-neutral-500">University of Michigan.</span> <br /> <br />
              </h3>
            </div>
            <p className="text-neutral-500 font-light text-sm leading-relaxed">
              I have a passion for giving life to my ideas and building my version of the digital world, one line of code at a time.
            </p>
          </WidgetCard>

          {/* 2. Coding Hours Widget (1 Col) */}
          <WidgetCard className="lg:col-span-1 min-h-[300px]">
            <CodingHours />
          </WidgetCard>

          {/* 3. Image Carousel (Now 2 Cols for stunning landscape ratio) */}
          <WidgetCard className="md:col-span-2 lg:col-span-2 min-h-[375px] p-0">
            <PhotoCarousel />
          </WidgetCard>

          {/* 4. Currently Building Monitor */}
          <WidgetCard className="lg:col-span-1">
            <CurrentlyBuilding />
          </WidgetCard>

          {/* 5. The Globe */}
          <WidgetCard className="md:col-span-2 lg:col-span-3 min-h-[300px] lg:min-h-[400px] p-0 flex items-center justify-center relative">
            <div className="absolute top-8 left-8 z-20">
              <h4 className="text-white font-medium text-lg mb-2">Currently located in</h4>
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-neutral-900/50 border border-neutral-800 mb-6 w-max">
                <div className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase">
                  Ann Arbor • {time || "—"}
                </span>
              </div>
            </div>
            <div className="w-full h-full absolute inset-0">
              <GlobeDemo />
            </div>
          </WidgetCard>

          {/* 6. The Stack Marquee (Full width) */}
          <div className="md:col-span-2 lg:col-span-4 mt-8 lg:mt-4">
            <h4 className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-neutral-600 mb-6 px-4">
              <span className="w-1.5 h-1.5 bg-neutral-700 rounded-full"></span>
              Current Stack
            </h4>
            <StacksCard />
          </div>

        </div>
      </div>
    </section>
  )
}

export default About