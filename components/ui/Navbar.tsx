"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { HiMenu, HiX } from "react-icons/hi"

export const Navbar = ({
  navItems,
}: {
  navItems: { name: string; link: string }[]
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const[scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Detect scroll to shrink/style the navbar dynamically
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  },[])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease:[0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-[100] w-full flex justify-center transition-all duration-500 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <div 
          className={`flex items-center justify-between px-6 transition-all duration-500 ${
            scrolled 
              ? "w-[95%] max-w-5xl bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-full py-3 shadow-[0_0_30px_rgba(0,0,0,0.8)]" 
              : "w-full max-w-7xl bg-transparent border-transparent py-4"
          }`}
        >
          {/* Logo */}
          <Link href="/" aria-label="Homepage" onClick={() => setMobileMenuOpen(false)} className="relative z-10 flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:border-white/60 transition-colors">
              <Image src="/moon.svg" alt="moon logo" width={18} height={18} className="opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>

          {/* Desktop Links with Sliding Indicator */}
          <div className="hidden md:flex items-center gap-1 relative z-10">
            {navItems.map((item) => {
              const isActive = pathname === item.link
              return (
                <Link
                  key={item.link}
                  href={item.link}
                  className={`relative px-5 py-2 text-xs font-mono uppercase tracking-[0.15em] transition-colors duration-300 ${
                    isActive ? "text-white" : "text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-white/10 border border-white/10 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-20 p-2 text-neutral-400 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[90] bg-[#050505]/95 flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={item.link}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-3xl font-light tracking-tighter ${
                    pathname === item.link ? "text-white" : "text-neutral-600"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}