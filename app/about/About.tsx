"use client"

import React, { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Html, Float } from "@react-three/drei"
import * as THREE from "three"
import SectionHeader from "@/components/ui/SectionHeader"

const diveItems =[
  { prefix: "Began coding at 14 and developed a ", linkText: "passion", suffix: "for building software and systems." },
  { prefix: "Scaled infrastructure at ", linkText: "AWS Glue", suffix: " (Systems Development team)." },
  { prefix: "Engineered a ", linkText: "multi-modal nuclear reactor analysis pipeline", suffix: "for the Artificial Intelligence and Multiphysics Simulations (AIMS) lab." },
  { prefix: "Managed a ", linkText: "$250k+", suffix: "crypto investment portfolio." },
]

const topTracks =[
  { title: "Paper Thin (Headhunterz Remix)", artist: "ILLENIUM, Tom DeLonge, Angels & Airwaves", art: "/music/paperthin.jpg" }, 
  { title: "Alive (feat RUNN) [Trivecta Remix]", artist: "Dabin, RUNN, Trivecta", art: "/music/alive.jpg" },
  { title: "Waiting for Love", artist: "Avicii", art: "/music/wfl.png" },
  { title: "Retraced", artist: "NURKO, HALIENE", art: "/music/retraced.jpeg" },
  { title: "hold my hand", artist: "Knock2, Sophia Gripari", art: "/music/holdmyhand.jpg" },
]

const topArtists =[
  { name: "Avicii", art: "/music/avicii.jpeg" }, 
  { name: "ILLENIUM", art: "/music/illenium.jpeg" },
  { name: "Dabin", art: "/music/dabin.jpg" },
  { name: "Seven Lions", art: "/music/sevenlions.jpg" },
  { name: "Knock2", art: "/music/knock2.jpg" },
]

// --- 3D SOLAR SYSTEM DATA ---
const orbitalInterests =[
  { 
    id: "crypto", 
    title: "Blockchain & DeFi", 
    subtitle: "Trading & Investments", 
    type: "network", 
    color: "#00f0ff",
    distance: 6, 
    speed: 0.4, 
    size: 0.8,
    desc: "Deeply entrenched in the decentralized finance ecosystem. Designing algorithmic trading strategies and exploring the bleeding edge of Web3 architecture." 
  },
  { 
    id: "boxing", 
    title: "Boxing & Fitness", 
    subtitle: "Athletics", 
    type: "rock", 
    color: "#ff3333",
    distance: 10, 
    speed: 0.25, 
    size: 1.2,
    desc: "Began weightlifting at 15 and boxing at 18. Have plans to compete in professional boxing in my 20s." 
  },
  { 
    id: "ml", 
    title: "AI Architecture", 
    subtitle: "Research", 
    type: "ring", 
    color: "#b026ff",
    distance: 15, 
    speed: 0.15, 
    size: 1.5,
    desc: "Currently exploring multi-agent systems, local LLM deployment, and optimizing inference latency." 
  }
]

// --- 3D COMPONENTS ---
const Planet = ({ data, activeId, onClick }: { data: any, activeId: string, onClick: () => void }) => {
  const orbitRef = useRef<THREE.Group>(null)
  const planetRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const isActive = activeId === data.id

  useFrame((state, delta) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y += data.speed * delta
    }
    if (planetRef.current) {
      planetRef.current.rotation.x += delta * 0.5
      planetRef.current.rotation.y += delta * 0.5
    }
  })

  const renderGeometry = () => {
    if (data.type === "network") {
      return (
        <mesh ref={planetRef}>
          <dodecahedronGeometry args={[data.size, 0]} />
          <meshPhysicalMaterial color={data.color} wireframe emissive={data.color} emissiveIntensity={0.5} />
        </mesh>
      )
    }
    if (data.type === "rock") {
      return (
        <mesh ref={planetRef}>
          <icosahedronGeometry args={[data.size, 1]} />
          <meshStandardMaterial color={data.color} roughness={1} metalness={0.1} flatShading />
        </mesh>
      )
    }
    if (data.type === "ring") {
      return (
        <group>
          <mesh>
            <sphereGeometry args={[data.size, 32, 32]} />
            <meshStandardMaterial color={data.color} roughness={0.2} metalness={0.8} />
          </mesh>
          <mesh rotation={[Math.PI / 2.2, 0, 0]}>
            <torusGeometry args={[data.size * 1.6, 0.05, 16, 100]} />
            <meshBasicMaterial color={data.color} transparent opacity={0.6} />
          </mesh>
        </group>
      )
    }
  }

  return (
    <group>
      {/* Trajectory Rings */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[data.distance - 0.02, data.distance + 0.02, 128]} />
        <meshBasicMaterial color={data.color} transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>

      <group ref={orbitRef}>
        <group 
          position={[data.distance, 0, 0]} 
          onClick={(e) => { e.stopPropagation(); onClick(); }}
          onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
          onPointerOut={(e) => { e.stopPropagation(); setHovered(false); document.body.style.cursor = 'auto'; }}
        >
          {/* Invisible Hitbox */}
          <mesh visible={false}>
            <sphereGeometry args={[data.size * 1.5, 16, 16]} />
            <meshBasicMaterial />
          </mesh>
          
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            {renderGeometry()}
            {(hovered || isActive) && (
              <mesh>
                <sphereGeometry args={[data.size * 1.2, 32, 32]} />
                <meshBasicMaterial color={data.color} transparent opacity={0.2} wireframe />
              </mesh>
            )}
          </Float>

          <Html center distanceFactor={15} position={[0, -data.size - 1, 0]}>
            <div className={`px-2 py-1 transition-all duration-300 pointer-events-none whitespace-nowrap border rounded-full backdrop-blur-sm ${
              isActive ? 'bg-white/10 border-white/40 text-white' : 'bg-black/50 border-white/10 text-neutral-400'
            }`}>
              <span className="text-[10px] font-mono tracking-widest uppercase shadow-black drop-shadow-md">
                {data.title}
              </span>
            </div>
          </Html>
        </group>
      </group>
    </group>
  )
}

export default function AboutContent() {
  const[activeInterest, setActiveInterest] = useState(orbitalInterests[0])
  const[expandedMobileId, setExpandedMobileId] = useState<string | null>(null)

  return (
    <div className="w-full bg-transparent selection:bg-white selection:text-black">
      
      {/* --- HERO BIO --- */}
      <section className="relative pt-40 pb-20 px-6 lg:px-12 max-w-7xl mx-auto z-20">
        <h1 className="text-6xl md:text-8xl font-normal tracking-tighter text-white mb-10">
          The <span className="italic text-neutral-500">Architect</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <p className="text-xl md:text-2xl font-light text-neutral-300 leading-relaxed">
            I am a highly disciplined and results-oriented software engineer, eager to apply my skills to high-impact projects to optimize, grow, and deliver exceptional outcomes.
          </p>
          <div className="flex flex-col gap-6 text-neutral-500 font-light text-lg">
            <p>
              I am a student attending the <span className="text-white font-medium">University of Michigan</span> pursuing a B.S.E in <span className="text-white font-medium">Computer Science</span> while pursuing a double minor in <span className="text-white font-medium">Mathematics</span> and <span className="text-white font-medium">Business</span> through the <span className="text-white font-medium">Ross School of Business.</span>
            </p>
            <p>
              I am passionate about emerging technologies in <span className="text-white font-medium">Data Science</span> and <span className="text-white font-medium">Machine Learning</span>. Recently, I took an interest in <span className="text-white font-medium">Web Development</span>, building this platform to master Next.js and TypeScript.
            </p>
          </div>
        </div>
      </section>

      {/* --- A BRIEF DIVE (Ledger List) --- */}
      <section className="relative py-24 z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader label="A Brief Dive" className="mb-20 md:mb-24" />
          
          {/* Centered List Container */}
          <div className="max-w-4xl mx-auto flex flex-col justify-center">
            <ul className="flex flex-col gap-8 md:gap-10 w-full">
              {diveItems.map((item, i) => (
                <li key={i} className="flex items-start gap-6 md:gap-8 group">
                  {/* Fixed width guarantees perfect left-edge alignment for the text block */}
                  <span className="text-neutral-700 font-mono mt-1.5 text-sm md:text-base w-6 md:w-8 shrink-0 group-hover:text-neutral-400 transition-colors">
                    0{i + 1}
                  </span>
                  
                  <p className="text-lg md:text-2xl lg:text-3xl font-light text-neutral-400 leading-snug tracking-tight">
                    {item.prefix}{" "}
                    <span className="text-white font-medium cursor-pointer relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                      {item.linkText}
                    </span>{" "}
                    {item.suffix}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- INTERESTS ENGINE --- */}
      <section className="relative py-32 z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <SectionHeader label="Interests" className="mb-20 md:mb-24" />

          {/* === DESKTOP: 3D ORBIT === */}
          <div className="relative w-full h-[600px] md:h-[750px] group hidden md:block pointer-events-none">
            
            {/* 
              The 3D Canvas. 
              Placed inside a z-0 container so that no 3D elements or floating Html labels 
              can artificially stack over our z-50 text HUD. 
            */}
            <div className="absolute inset-0 cursor-grab active:cursor-grabbing pointer-events-auto z-0">
              <Canvas camera={{ position:[0, 20, 30], fov: 45 }}>
                <ambientLight intensity={0.2} />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 4} />
                
                {orbitalInterests.map((interest) => (
                  <Planet 
                    key={interest.id} 
                    data={interest} 
                    activeId={activeInterest.id} 
                    onClick={() => setActiveInterest(interest)} 
                  />
                ))}
              </Canvas>
            </div>

            {/* 
              Architectural HUD 
              Elevated to z-50 to guarantee it always hovers above the interactive canvas elements
            */}
            <div className="absolute bottom-6 left-6 right-6 md:left-8 md:bottom-8 md:w-[460px] pointer-events-none z-50">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeInterest.id}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                  transition={{ duration: 0.6, ease:[0.16, 1, 0.3, 1] }}
                  className="bg-[#050505]/80 backdrop-blur-xl border border-white/10 p-8 rounded-2xl pointer-events-auto shadow-[0_0_40px_rgba(0,0,0,0.8)]"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="w-2 h-2 rounded-full animate-pulse" 
                      style={{ backgroundColor: activeInterest.color, boxShadow: `0 0 12px ${activeInterest.color}` }} 
                    />
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                      {activeInterest.subtitle}
                    </span>
                    <div className="h-[1px] flex-1 bg-neutral-800" />
                    <span className="text-[10px] font-mono tracking-widest text-neutral-600">
                      {activeInterest.distance} AU
                    </span>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-normal tracking-tighter text-white mb-4">
                    {activeInterest.title}
                  </h3>

                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    {activeInterest.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Drag Hint Overlay */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-50">
               <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.3em] px-4 py-2 rounded-full border border-white/5 bg-black/50 backdrop-blur-md">
                 [ Drag to Orbit ]
               </span>
            </div>

          </div>

          {/* === MOBILE: SLEEK ACCORDION LIST VIEW === */}
          <div className="md:hidden flex flex-col w-full">
            {orbitalInterests.map((interest, i) => {
              const isExpanded = expandedMobileId === interest.id;
              
              return (
                <div 
                  key={interest.id}
                  onClick={() => setExpandedMobileId(isExpanded ? null : interest.id)}
                  className="group flex flex-col py-10 border-b border-neutral-800/60 hover:border-neutral-400 transition-colors duration-500 cursor-pointer"
                >
                  {/* Top Row: Index + Prompt */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-neutral-700 group-hover:text-neutral-400 transition-colors duration-300">
                      0{i + 1}
                    </span>
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-neutral-600 group-hover:text-neutral-400 transition-colors duration-300">
                      {isExpanded ? 'Collapse' : 'Tap to expand'}
                    </span>
                  </div>
                  
                  {/* Main Title */}
                  <h3 className="text-4xl font-normal tracking-tighter text-neutral-300 group-hover:text-white group-hover:translate-x-2 transition-all duration-500 mb-4">
                    {interest.title}
                  </h3>

                  {/* Subtitle / Type & Glow Indicator */}
                  <div className="flex items-center justify-between group-hover:translate-x-2 transition-transform duration-500">
                    <span className="text-sm text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300 font-light leading-snug">
                      {interest.subtitle}
                    </span>
                    
                    <div 
                      className={`w-2 h-2 rounded-full transition-all duration-500 ${isExpanded ? 'scale-150' : 'scale-100 opacity-50 group-hover:opacity-100'}`}
                      style={{ backgroundColor: interest.color, boxShadow: isExpanded ? `0 0 12px ${interest.color}` : 'none' }} 
                    />
                  </div>

                  {/* Expandable Description */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, y: -10 }}
                        animate={{ height: "auto", opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease:[0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 mt-6 border-t border-neutral-800/50">
                          <p className="text-sm text-neutral-400 font-light leading-relaxed">
                            {interest.desc}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* --- AUDIO TELEMETRY (Music Section) --- */}
      <section className="relative py-32 z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <SectionHeader label="Music" className="mb-20 md:mb-24" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Top Tracks */}
            <div>
              <h3 className="text-4xl md:text-5xl font-normal tracking-tighter text-white mb-10 pb-6 border-b border-neutral-800">
                Top <span className="italic text-neutral-500">Tracks</span>
              </h3>
              <div className="flex flex-col w-full">
                {topTracks.map((track, i) => (
                  <div key={i} className="group flex items-center justify-between py-6 md:py-8 border-b border-neutral-800/60 hover:border-neutral-400 transition-colors duration-500 cursor-default">
                    
                    <div className="flex items-center gap-6 md:gap-8 w-full">
                      <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-sm overflow-hidden shrink-0 border border-neutral-800 group-hover:border-neutral-500 transition-colors duration-500 bg-neutral-900">
                        <img src={track.art} alt={track.title} className="w-full h-full object-cover opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
                      </div>
                      
                      <div className="flex flex-col justify-center">
                        <span className="text-lg md:text-xl font-medium text-neutral-300 group-hover:text-white group-hover:translate-x-2 transition-all duration-500 tracking-tight">
                          {track.title}
                        </span>
                        <span className="text-xs font-mono text-neutral-500 tracking-wide mt-1 group-hover:text-neutral-400 group-hover:translate-x-2 transition-all duration-500 delay-75">
                          {track.artist}
                        </span>
                      </div>
                    </div>

                    <span className="text-xs font-mono text-neutral-700 group-hover:text-neutral-400 transition-colors duration-300 pl-4">
                      0{i + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Artists */}
            <div>
              <h3 className="text-4xl md:text-5xl font-normal tracking-tighter text-white mb-10 pb-6 border-b border-neutral-800">
                Top <span className="italic text-neutral-500">Artists</span>
              </h3>
              <div className="flex flex-col w-full">
                {topArtists.map((artist, i) => (
                  <div key={i} className="group flex items-center justify-between py-6 md:py-8 border-b border-neutral-800/60 hover:border-neutral-400 transition-colors duration-500 cursor-default">
                    
                    <div className="flex items-center gap-6 md:gap-8 w-full">
                      <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden shrink-0 border border-neutral-800 group-hover:border-neutral-500 transition-colors duration-500 bg-neutral-900 shadow-[0_0_0_rgba(255,255,255,0)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                        <img src={artist.art} alt={artist.name} className="w-full h-full object-cover opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
                      </div>
                      
                      <div className="flex flex-col justify-center">
                        <span className="text-lg md:text-xl font-medium text-neutral-300 group-hover:text-white group-hover:translate-x-2 transition-all duration-500 tracking-tight">
                          {artist.name}
                        </span>
                      </div>
                    </div>

                    <span className="text-xs font-mono text-neutral-700 group-hover:text-neutral-400 transition-colors duration-300 pl-4">
                      0{i + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}