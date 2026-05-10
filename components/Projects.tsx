"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { projects } from '@/data'
import SectionHeader from './ui/SectionHeader'
import AmbientLighting from './ui/AmbientLighting'

// Epic Spatial 3D Card Component
const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const ref = useRef<HTMLAnchorElement>(null)
  
  // Mouse tracking values
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth springs for luxurious feel
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })

  // Map mouse position to tilt angles (max 8 degrees)
  const rotateX = useTransform(mouseYSpring,[-0.5, 0.5], ["8deg", "-8deg"])
  const rotateY = useTransform(mouseXSpring,[-0.5, 0.5], ["-8deg", "8deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col group block"
      style={{ perspective: 1200 }} // Establishes 3D space
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full rounded-3xl bg-[#0a0a0a] border border-white/5 p-4 md:p-6 shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-colors duration-500 hover:border-neutral-700"
      >
        {/* Cinematic Image Frame - Floats up slightly */}
        <div 
          className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-8"
          style={{ transform: "translateZ(30px)" }} 
        >
          <div className="absolute inset-0 bg-neutral-900 animate-pulse" /> {/* Loading skeleton state */}
          <Image 
            src={project.img}
            alt={project.title}
            fill
            className="object-cover z-10 transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Internal shadow overlay for depth */}
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        </div>

        {/* Project Metadata - Floats up extremely high */}
        <div 
          className="relative z-30 flex flex-col px-2 md:px-4 pb-2"
          style={{ transform: "translateZ(60px)" }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-mono text-neutral-600 group-hover:text-neutral-400 transition-colors">
              0{index + 1}
            </span>
            <div className="h-[1px] flex-1 bg-neutral-800 group-hover:bg-neutral-600 transition-colors" />
          </div>

          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-neutral-300 group-hover:text-white transition-colors duration-300 mb-3 line-clamp-1">
            {project.title}
          </h2>

          <p className="text-sm md:text-base text-neutral-500 font-light leading-relaxed line-clamp-2 mb-8">
            {project.des}
          </p>

          {/* Footer of Card: Tech Stack & Link */}
          <div className="flex items-center justify-between mt-auto">
            
            {/* Overlapping Tech Stack */}
            <div className="flex items-center">
              {project.iconLists.map((icon: string, i: number) => (
                <div 
                  key={icon} 
                  className="relative w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#0a0a0a] bg-neutral-900 flex justify-center items-center overflow-hidden grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ 
                    marginLeft: i === 0 ? 0 : '-12px',
                    zIndex: project.iconLists.length - i 
                  }}
                >
                  <Image 
                    src={icon} 
                    alt="tech-stack-icon" 
                    fill 
                    className="p-2 object-contain" 
                  />
                </div>
              ))}
            </div>

            {/* Premium CTA */}
            <div className="flex items-center gap-2 group/btn">
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">
                Live Demo
              </span>
              <div className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300 transform group-hover:-rotate-45">
                <svg 
                  className="w-3.5 h-3.5 text-white group-hover:text-black transition-colors" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </a>
  )
}

const Projects = () => {
  return (
    <section 
      className="relative z-20 bg-[#050505] text-neutral-300 py-32 overflow-hidden selection:bg-white selection:text-black" 
      id="projects" 
      data-aos="fade-up" 
      data-aos-duration="700"
    >
      <AmbientLighting />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        
        <SectionHeader label="Featured Projects" className="mb-16 md:mb-24" />

        {/* The Exhibition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Epic Typographic "View All" Link */}
        <div className="mt-24 md:mt-32 border-t border-neutral-800/60 pt-10 flex justify-center">
          <a 
            href="/projects" 
            className="group flex items-center gap-6 hover:opacity-80 transition-opacity"
          >
            <span className="text-xl md:text-3xl font-light tracking-tight text-white">
              View the full archive
            </span>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500 transform group-hover:translate-x-2">
              <svg 
                className="w-5 h-5 text-white group-hover:text-black transition-colors duration-500" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Projects