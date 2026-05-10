"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { socialMedia } from '@/data'
import Spotify from './ui/Spotify'
import { useDetroitTime } from '@/hooks/useDetroitTime'

const Footer = ({ showContact }: { showContact: boolean }) => {
  const time = useDetroitTime()

  return (
    <footer className="relative z-20 bg-[#050505] text-neutral-300 pt-12 pb-10 overflow-hidden" id="footer">
      
      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[300px] bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* HUGE TYPOGRAPHIC CTA */}
        {showContact && (
          <div className="mb-16 md:mb-20">

            <div className="flex flex-col items-start group">
              <p className="text-xl md:text-2xl text-neutral-500 font-light mb-2">Have a project in mind?</p>
              
              <a 
                href="mailto:jeremoon@umich.edu" 
                className="flex items-center gap-4 md:gap-8 hover:opacity-80 transition-opacity duration-300"
              >
                <h1 className="text-5xl md:text-8xl lg:text-[8rem] font-light tracking-tighter text-white leading-none">
                  Let&apos;s Talk.
                </h1>
                
                {/* Sleek animated arrow */}
                <div className="w-12 h-12 md:w-24 md:h-24 rounded-full border border-neutral-700 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500 transform group-hover:rotate-45">
                  <svg 
                    className="w-5 h-5 md:w-10 md:h-10 text-white group-hover:text-black transition-colors duration-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </a>
              <a 
                href="mailto:jeremoon@umich.edu"
                className="mt-6 text-sm md:text-base font-mono tracking-widest text-neutral-500 hover:text-white transition-colors uppercase border-b border-neutral-800 hover:border-white pb-1"
              >
                jeremoon@umich.edu
              </a>
            </div>
          </div>
        )}

        {/* BOTTOM METADATA GRID */}
        <div className="border-t border-neutral-800/60 pt-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          
          {/* Left Column: Time & Location */}
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
              Local Time — Ann Arbor, MI
            </span>
            <div className="flex items-center gap-3">
              <div className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
              </div>
              <span className="text-sm font-light text-neutral-300">
                {time || "Loading..."}
              </span>
            </div>
          </div>

          {/* Center Column: Integrated Spotify Widget */}
          <div className="w-full lg:w-auto flex justify-start lg:justify-center">
             <div className="flex flex-col gap-2">
               <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">Currently Playing</span>
               <div className="bg-neutral-900/30 border border-neutral-800/60 rounded-full pr-4 pl-1 py-1 hover:border-neutral-600 transition-colors">
                 <Spotify />
               </div>
             </div>
          </div>

          {/* Right Column: Socials & Copyright */}
          <div className="flex flex-col items-start lg:items-end gap-6 w-full lg:w-auto">
            {/* Unboxed, premium social icons */}
            <div className="flex items-center gap-6">
              {socialMedia.map((profile) => (
                <a 
                  key={profile.id} 
                  href={profile.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative h-5 w-5 md:h-6 md:w-6 flex justify-center items-center"
                >
                  <Image 
                    src={profile.img} 
                    alt="Social Media Icon" 
                    fill
                    className="object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:-translate-y-1"
                  />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-600">
              <span>© {new Date().getFullYear()} Jeremy Moon</span>
              <span className="w-1 h-1 bg-neutral-700 rounded-full" />
              <span>All Rights Reserved</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer