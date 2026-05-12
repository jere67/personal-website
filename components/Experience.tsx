"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { expCards } from "@/data"
import SectionHeader from "./ui/SectionHeader"
import AmbientLighting from "./ui/AmbientLighting"

// Framer Motion Variants for a very high-end, subtle entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  },
}

const Experience = () => {
  return (
    <section 
      id="experience" 
      className="relative z-20 bg-[#050505] text-neutral-300 py-32 overflow-hidden selection:bg-white selection:text-black"
    >
      <AmbientLighting />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        
        <SectionHeader label="Experience" className="mb-20 md:mb-32" />

        {/* The Roster - Replacing the timeline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col w-full"
        >
          {/* Roster Header (Desktop Only) */}
          <div className="hidden md:flex items-center justify-between pb-6 border-b border-neutral-800 text-xs font-mono uppercase tracking-[0.2em] text-neutral-600">
            <div className="w-1/4">Timeframe</div>
            <div className="w-1/2">Organization</div>
            <div className="w-1/4 text-right">Role</div>
          </div>

          {/* Roster Rows */}
          {expCards.map((card, index) => (
            <motion.div 
              key={card.company}
              variants={rowVariants}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between py-10 md:py-14 border-b border-neutral-800/60 hover:border-neutral-400 transition-colors duration-500 cursor-default"
            >
              {/* Left Column: Index & Date */}
              <div className="flex items-center gap-6 w-full md:w-1/4 mb-6 md:mb-0">
                <span className="text-xs font-mono text-neutral-700 group-hover:text-neutral-400 transition-colors duration-300">
                  0{index + 1}
                </span>
                <span className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-500 group-hover:text-white transition-colors duration-300">
                  {card.date}
                </span>
              </div>

              {/* Middle Column: Massive Company Name */}
              <div className="w-full md:w-1/2 flex items-center">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tighter text-neutral-300 group-hover:text-white group-hover:translate-x-4 transition-all duration-500">
                  {card.company}
                </h3>
              </div>

              {/* Right Column: Role & Polished Logo */}
              <div className="w-full md:w-1/4 flex items-center justify-start md:justify-end gap-6 mt-6 md:mt-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm md:text-base md:text-right text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300 font-light leading-snug max-w-[200px]">
                  {card.title}
                </span>
                
                {/* 
                  Logo Treatment: 
                  Forced into a white circular frame so JPGs with white backgrounds look intentional.
                  Kept faded until hovered.
                */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 border border-neutral-800 group-hover:border-neutral-300 shrink-0 bg-white shadow-[0_0_0_rgba(255,255,255,0)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                  <Image
                    src={card.logoPath}
                    alt={`${card.company} logo`}
                    fill
                    className="object-contain p-2"
                    sizes="48px"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Experience