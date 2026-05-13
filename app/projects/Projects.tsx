"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { webApplications, machineLearning, dataScience, computerScience } from "./data";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { FaLocationArrow } from "react-icons/fa6";
import SectionHeader from "@/components/ui/SectionHeader";

type Project = {
  description: string;
  title: string;
  src: string;
  technologies: string[];
  codeText: string;
  codeLink: string;
  demoText: string;
  demoLink: string;
  content: string;
};

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const ProjectGrid = ({ data }: { data: Project[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 z-20 relative">
      {data.map((card) => (
        <motion.div
          key={card.title}
          onClick={() => setActive(card)}
          className="group flex flex-col cursor-pointer"
        >
          {/* Cinematic Image Frame */}
          <div className="relative aspect-[16/10] w-full overflow-hidden border border-neutral-800/60 group-hover:border-neutral-400 transition-colors duration-500 mb-6 bg-neutral-950">
            <div className="w-full h-full relative">
              <Image
                fill
                src={card.src}
                alt={card.title}
                className="object-cover opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent opacity-80" />
            
          </div>

          {/* Typography & Details */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-normal tracking-tighter text-neutral-200 group-hover:text-white transition-colors duration-300 mb-3">
              {card.title}
            </h3>
            
            <p className="text-sm font-light text-neutral-500 line-clamp-2 leading-relaxed mb-4">
              {card.content}
            </p>

            <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-neutral-600 group-hover:text-cyan-500/80 transition-colors duration-500">
              {card.technologies.slice(0, 3).join(" • ")}
              {card.technologies.length > 3 && " ..."}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 pb-32">
      
      {/* --- HERO HEADER --- */}
      <div className="pt-24 md:pt-32 pb-4">
        <h1 className="text-6xl md:text-8xl font-normal tracking-tighter text-white">
          Projects
        </h1>
      </div>

      {/* --- MODAL DOSSIER OVERLAY --- */}
      <AnimatePresence>
        {active && (
          // Extremely high z-index to guarantee we cover navbars
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 lg:p-12">
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-[#050505]/90 backdrop-blur-xl"
            />

            {/* Main Split-Screen Modal Container */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease:[0.16, 1, 0.3, 1] }}
              className="w-full max-w-6xl max-h-[90vh] md:h-[80vh] bg-[#0a0a0a] border border-neutral-800 rounded-none md:rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-[0_0_100px_rgba(0,0,0,0.8)] relative z-[10000]"
            >
              
              {/* Absolute close button MOVED INSIDE the modal card */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.1 }}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-3 bg-black/60 hover:bg-black/80 backdrop-blur-xl border border-white/20 rounded-full text-white transition-all z-[105]"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>

              {/* Left Side: Massive Cinematic Media */}
              <div className="w-full md:w-1/2 h-56 md:h-full relative shrink-0 border-b md:border-b-0 md:border-r border-neutral-800 bg-neutral-950">
                <div className="w-full h-full relative">
                  <Image
                    priority
                    fill
                    src={active.src}
                    alt={active.title}
                    className="object-cover object-top opacity-90"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0a0a]/80 hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:hidden block" />
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 hidden md:flex flex-wrap gap-2 z-10">
                   {active.technologies.map((tech, idx) => (
                     <span key={idx} className="px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-mono uppercase tracking-[0.2em] text-neutral-300">
                       {tech}
                     </span>
                   ))}
                </div>
              </div>

              {/* Right Side: Data & Intel. Added 'flex-1 min-h-0' to fix mobile scrolling */}
              <div className="w-full md:w-1/2 flex flex-col flex-1 min-h-0 bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
                
                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto p-6 md:p-10 lg:p-12 custom-scrollbar">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.6)]" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-cyan-400">
                      {active.description}
                    </span>
                  </div>

                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tighter text-white mb-8 leading-[1.05] pr-12 md:pr-0">
                    {active.title}
                  </h3>

                  {/* Mobile-only tech stack */}
                  <div className="flex flex-wrap gap-2 mb-8 md:hidden">
                    {active.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-black border border-white/10 text-[9px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm md:text-base font-light text-neutral-400 leading-relaxed">
                    {active.content}
                  </p>
                </div>

                {/* Sticky Action Footer */}
                <div className="p-6 md:p-10 border-t border-neutral-800/60 bg-[#050505] flex flex-col sm:flex-row gap-4 shrink-0">
                  <a
                    href={active.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex justify-center items-center gap-3 px-6 py-4 bg-white text-black hover:bg-neutral-200 transition-colors duration-300 font-mono text-xs uppercase tracking-widest font-semibold"
                  >
                    {active.codeText}
                    <SiGithub className="w-4 h-4" />
                  </a>
                  
                  <a
                    href={active.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex justify-center items-center gap-3 px-6 py-4 border border-neutral-700 text-white hover:bg-neutral-800 transition-colors duration-300 font-mono text-xs uppercase tracking-widest"
                  >
                    {active.demoText}
                    <FaLocationArrow className="w-3 h-3" />
                  </a>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- PROJECT CATEGORIES --- */}
      <div className="flex flex-col gap-10">
        <div>
          <SectionHeader label="Web Applications" className="mb-12 mt-20" />
          <ProjectGrid data={webApplications} />
        </div>

        <div>
          <SectionHeader label="Data Science" className="mb-12 mt-20" />
          <ProjectGrid data={dataScience} />
        </div>

        <div>
          <SectionHeader label="AI / Machine Learning" className="mb-12 mt-20" />
          <ProjectGrid data={machineLearning} />
        </div>

        <div>
          <SectionHeader label="Computer Science" className="mb-12 mt-20" />
          <ProjectGrid data={computerScience} />
        </div>
      </div>

    </div>
  );
}

const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};