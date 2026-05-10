"use client"

import React, { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  languages,
  frontend,
  backend,
  dataScience,
  machineLearning,
  devTools,
  cloud
} from "@/data"

// The same site-wide geometric motif
const Star = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" fill="currentColor"/>
  </svg>
)

type SkillObject = {
  skillName: string
  img: string
  width: number
  height: number
  url: string
}

interface SkillCategory {
  id: string
  title: string
  skills: SkillObject[]
}

const skillCategories: SkillCategory[] =[
  { id: "languages", title: "Languages", skills: languages },
  { id: "frontend", title: "Frontend", skills: frontend },
  { id: "backend", title: "Backend", skills: backend },
  { id: "datascience", title: "Data Science", skills: dataScience },
  { id: "aiml", title: "AI/ML", skills: machineLearning },
  { id: "cloud", title: "Cloud Architecture", skills: cloud },
  { id: "devtools", title: "Developer Tools", skills: devTools },
]

const Skills = () => {
  // Default the first category to open so the section doesn't look empty on load
  const[expandedCategoryIds, setExpandedCategoryIds] = useState<string[]>([])

  const handleToggle = (id: string) => {
    setExpandedCategoryIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((prevId) => prevId !== id)
        : [...prevIds, id]
    )
  }

  return (
    <section
      id="skills"
      className="relative z-20 bg-[#050505] text-neutral-300 pt-32 pb-14 overflow-hidden selection:bg-white selection:text-black"
      data-aos="fade-up"
      data-aos-duration="700"
    >
      {/* Subtle Ambient Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-16 md:mb-24">
          <Star className="text-white w-5 h-5 animate-pulse" />
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400">Skills</h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-neutral-800 to-transparent" />
        </div>

        {/* The Technical Ledger */}
        <div className="border-t border-neutral-800/60 flex flex-col w-full">
          {skillCategories.map((category, index) => (
            <SkillCategoryRow
              key={category.id}
              index={index}
              category={category}
              isExpanded={expandedCategoryIds.includes(category.id)}
              onToggle={() => handleToggle(category.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface SkillCategoryRowProps {
  index: number
  category: SkillCategory
  isExpanded: boolean
  onToggle: () => void
}

const SkillCategoryRow: React.FC<SkillCategoryRowProps> = ({
  index,
  category,
  isExpanded,
  onToggle,
}) => {
  return (
    <div className="border-b border-neutral-800/60 group">
      {/* Editorial Toggle Row */}
      <button
        onClick={onToggle}
        aria-expanded={isExpanded}
        className="w-full flex items-center justify-between py-8 md:py-10 focus:outline-none transition-colors"
      >
        <div className="flex items-center gap-6 md:gap-12">
          <span className="text-xs font-mono text-neutral-700 group-hover:text-neutral-400 transition-colors duration-300">
            0{index + 1}
          </span>
          <h3 className="text-3xl md:text-5xl font-light tracking-tight text-neutral-400 group-hover:text-white transition-colors duration-500 text-left">
            {category.title}
          </h3>
        </div>
        
        {/* Minimalist Typographic Toggle */}
        <div className="flex items-center gap-4 text-neutral-600 group-hover:text-white transition-colors duration-300">
          <span className="hidden sm:block text-[10px] font-mono uppercase tracking-[0.2em]">
            {isExpanded ? "Close" : "Explore"}
          </span>
          <span className="text-2xl font-light w-4 flex justify-center">
            {isExpanded ? "—" : "+"}
          </span>
        </div>
      </button>

      {/* Expandable Grid Area */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-12 pt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-10">
              {category.skills.map((skill) => (
                <a
                  key={skill.skillName}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/skill flex flex-col items-center gap-4 focus:outline-none"
                  title={`Visit ${skill.skillName} website`}
                >
                  {/* High-end Logo Container: small opaque default, full color + jump on hover */}
                  <div className="relative flex justify-center items-center h-12 w-12 md:h-14 md:w-14 opacity-40 group-hover/skill:grayscale-0 group-hover/skill:opacity-100 transition-all duration-500 transform group-hover/skill:scale-110 group-hover/skill:-translate-y-1">
                    <Image
                      src={skill.img}
                      alt={`${skill.skillName} logo`}
                      width={skill.width}
                      height={skill.height}
                      className="object-contain max-h-full max-w-full drop-shadow-[0_0_15px_rgba(255,255,255,0)] group-hover/skill:drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all duration-500"
                    />
                  </div>
                  {/* Distinctive Monospace Typography */}
                  <p className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-neutral-600 group-hover/skill:text-neutral-200 transition-colors duration-300 text-center">
                    {skill.skillName}
                  </p>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Skills