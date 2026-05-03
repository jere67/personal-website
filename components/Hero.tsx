"use client"

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSignature from './ui/AnimatedSignature'

const words =[
  "Software Engineer", 
  "Website Developer", 
  "Data Scientist", 
  "Machine Learning Engineer"
]

// --- HIGH PERFORMANCE HYPERDRIVE BACKGROUND ---
const HyperdriveCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let stars: { x: number; y: number; z: number; oZ: number }[] =[]
    const numStars = 240
    const warpSpeed = 15 // Velocity of passing stars

    const resetStar = (star: any) => {
      star.x = (Math.random() - 0.5) * canvas.width * 2
      star.y = (Math.random() - 0.5) * canvas.height * 2
      star.z = canvas.width
      star.oZ = star.z
    }

    const initStars = () => {
      stars =[]
      for (let i = 0; i < numStars; i++) {
        const star = { x: 0, y: 0, z: 0, oZ: 0 }
        resetStar(star)
        star.z = Math.random() * canvas.width
        star.oZ = star.z
        stars.push(star)
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    const animate = () => {
      ctx.fillStyle = "rgba(5, 5, 5, 1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      stars.forEach((star) => {
        star.z -= warpSpeed

        if (star.z <= 0) {
          resetStar(star)
        }

        const px = (star.x / star.z) * 450 + centerX
        const py = (star.y / star.z) * 450 + centerY
        const oPx = (star.x / star.oZ) * 450 + centerX
        const oPy = (star.y / star.oZ) * 450 + centerY

        star.oZ = star.z

        if (px > 0 && px < canvas.width && py > 0 && py < canvas.height) {
          ctx.beginPath()
          ctx.moveTo(oPx, oPy)
          ctx.lineTo(px, py)
          
          const alpha = 1 - star.z / canvas.width
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.35})`
          ctx.lineWidth = 1.2
          ctx.stroke()
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
    }
  },[])

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none opacity-60 w-full h-full object-cover" 
    />
  )
}

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3500)
    return () => clearInterval(interval)
  },[])

  return (
    // Reduced mobile padding (pt-24 instead of pt-32) to bring content up
    <section className="relative w-full min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden pt-24 lg:pt-20 pb-12 lg:pb-16">
      
      {/* 1. EMBEDDED STAR TREK WARP SPEED ENGINE */}
      <HyperdriveCanvas />

      {/* Background Lighting & Void Masks */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[45vw] md:h-[45vw] bg-white/[0.02] rounded-full blur-[120px]" />
      </div>

      {/* Tighter flex gap on mobile (gap-4) to remove the massive whitespace */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8 h-full mt-4 lg:mt-0">
        
        {/* PORTRAIT SECTION: Rendered FIRST on mobile via `order-1` */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease:[0.16, 1, 0.3, 1] }}
          // Drastically reduced the mobile container height (h-[260px]) to pull text up
          className="order-1 lg:order-2 w-full lg:w-2/5 flex flex-col justify-center items-center relative h-[260px] sm:h-[320px] lg:h-[480px]"
        >
          {/* Cosmic Eclipse Orbital Rings - Scaled down for mobile */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] lg:w-[380px] lg:h-[380px] border border-white/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[290px] h-[290px] lg:w-[460px] lg:h-[460px] border border-white/[0.03] rounded-full border-dashed animate-[spin_80s_linear_infinite]" />

          {/* Portrait Mask Frame - Slightly larger on mobile (w-52) for presence */}
          <div className="relative w-52 h-52 lg:w-72 lg:h-72 rounded-full z-20 group">
            
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 shadow-[0_0_60px_rgba(255,255,255,0.3)] transition-all duration-700 pointer-events-none" />
            
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-neutral-800/80 group-hover:border-neutral-400 transition-all duration-700 bg-neutral-900 shadow-[0_0_30px_rgba(0,0,0,0.6)]">
              <Image
                src="/my-head.png"
                alt="Jeremy Moon"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 13rem, 18rem"
                priority
              />
            </div>

            <div className="absolute -top-2 -right-2 lg:-top-3 lg:-right-3 w-full h-full animate-[spin_12s_linear_infinite] pointer-events-none">
              <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            </div>
          </div>

          {/* Signature Anchor - Pulled much closer to the portrait on mobile (-bottom-4) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute -bottom-4 lg:-bottom-16 z-30 pointer-events-none scale-75 lg:scale-100"
          >
            <div className="relative flex flex-col items-center">
              <div className="w-[1px] h-6 bg-gradient-to-b from-neutral-800 to-transparent mb-2" />
              <div className="drop-shadow-[0_0_12px_rgba(255,255,255,0.08)]">
                <AnimatedSignature />
              </div>
            </div>
          </motion.div>
        </motion.div>


        {/* TEXT SECTION: Rendered SECOND on mobile via `order-2` */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          // Tighter top margin on mobile to close the gap
          className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-3/5 mt-4 lg:mt-0"
        >
          <span className="text-sm md:text-lg font-light text-neutral-500 mb-1 lg:mb-2 tracking-wide block">
            Hi, my name is
          </span>
          
          <h1 className="text-[3.5rem] leading-[1] sm:text-7xl md:text-8xl lg:text-[7.2rem] font-normal tracking-tighter text-white lg:leading-[0.9] mb-3 lg:mb-8">
            Jeremy <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-400 to-neutral-600 italic pr-2 lg:pr-3">
              Moon.
            </span>
          </h1>

          {/* Flexible Mobile-Safe Word Flipper */}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-1 lg:gap-3 text-lg sm:text-2xl md:text-3xl font-light text-neutral-400 w-full">
            <span className="flex-shrink-0">I am a</span>
            
            {/* Increased container height (h-16 on mobile) and allowed text wrapping */}
            <div className="relative h-16 lg:h-12 flex items-start lg:items-center justify-center lg:justify-start w-full sm:w-[320px] md:w-[420px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ y: 24, opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -24, opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  // Removed whitespace-nowrap, added leading-tight for clean mobile wrapping
                  className="absolute w-full text-white font-medium tracking-tight text-center lg:text-left leading-tight px-4 lg:px-0"
                >
                  {words[currentWord]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero