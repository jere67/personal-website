"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Our custom structural motif
const Star = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" fill="currentColor"/>
  </svg>
)

const Education = () => {
  const [isCoursesExpanded, setIsCoursesExpanded] = useState(false)
  const INITIAL_VISIBLE_COURSES = 4

  const courses =[
    { code: "EECS 491", title: "Distributed Systems", status: "" },
    { code: "EECS 485", title: "Web Systems", status: "" },
    { code: "EECS 482", title: "Operating Systems", status: "Scheduled" },
    { code: "EECS 449", title: "Conversational Artificial Intelligence", status: "Scheduled" },
    { code: "EECS 445", title: "Introduction to Machine Learning", status: "" },
    { code: "EECS 398", title: "Practical Data Science", status: "" },
    { code: "EECS 376", title: "Foundations of Computer Science", status: "" },
    { code: "EECS 370", title: "Computer Organization", status: "" },
    { code: "EECS 281", title: "Data Structures and Algorithms", status: "" },
    { code: "EECS 280", title: "Programming (OOP) & Intro Data Structures", status: "" },
    { code: "EECS 203", title: "Discrete Mathematics", status: "" },
    { code: "MATH 425", title: "Introduction to Probability", status: "" },
    { code: "MATH 217", title: "Linear Algebra", status: "" },
    { code: "MATH", title: "Calculus 1, 2, 3", status: "" },
    { code: "STATS 413", title: "Applied Regression Analysis", status: "" },
  ]

  const awards =[
    { title: "James B. Angell Scholar", desc: "Achieve an 'A' record for 2+ consecutive terms" },
    { title: "William J. Branstrom Freshman Prize", desc: "Top 5% of Class" },
    { title: "Dean's Honor List", desc: "Awarded 2x" },
    { title: "University Honors", desc: "Academic Excellence" },
  ]

  const activities =[
    "Tau Beta Pi",
    "Michigan Blockchain",
    "Michigan Data Science Team (MDST)",
    "Michigan Student Artificial Intelligence Lab (MSAIL)",
    "Korean-American Scientists and Engineers Association (KSEA)",
  ]

  return (
    <section 
      id="education" 
      className="relative z-20 bg-[#050505] text-neutral-300 py-32 overflow-hidden selection:bg-white selection:text-black"
      data-aos="fade-up" 
      data-aos-duration="700"
    >
      {/* Subtle "Star-struck" Celestial Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-24 md:mb-32">
          <Star className="text-white w-5 h-5 animate-pulse" />
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400">Education</h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-neutral-800 to-transparent" />
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column - University Identity (Sticky on Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            
            {/* Elegant Date Pill */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-neutral-800/60 bg-neutral-900/30 mb-8">
              <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full"></span>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">Aug 2023 — May 2027</span>
            </div>

            <h3 className="text-5xl md:text-7xl font-normal tracking-tighter leading-[1.05] text-white mb-8">
              University of <br />
              <span className="text-neutral-500 italic font-light tracking-tight">Michigan</span>
            </h3>
            
            <div className="flex flex-col gap-10">
              <div>
                <p className="text-2xl text-neutral-200 tracking-tight">B.S.E. in Data Science</p>
                <p className="text-neutral-500 mt-2 text-xs uppercase tracking-[0.15em] font-mono">Minor in Business & Mathematics</p>
              </div>

              <div className="flex flex-col items-start gap-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-600">Cumulative GPA</span>
                <div className="flex items-baseline gap-3">
                  <span className="text-6xl font-light tracking-tighter text-white">3.89</span>
                  <span className="text-xl text-neutral-600 font-light">/ 4.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Structured Tabular Data */}
          <div className="lg:col-span-7 flex flex-col gap-24 mt-12 lg:mt-0">
            
            {/* Coursework Block with Smooth Expand/Collapse */}
            <div className="space-y-6">
              <h4 className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 mb-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Relevant Coursework
              </h4>
              
              <div className="border-t border-neutral-800/60">
                <AnimatePresence initial={false}>
                  {(isCoursesExpanded ? courses : courses.slice(0, INITIAL_VISIBLE_COURSES)).map((course, idx) => (
                    <motion.div 
                      key={course.code}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease:[0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="group flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-neutral-800/60 hover:border-white/30 transition-colors duration-500">
                        <div className="flex items-baseline gap-6 w-full">
                          <span className="w-20 shrink-0 text-xs font-mono text-neutral-600 group-hover:text-neutral-300 transition-colors">
                            {course.code}
                          </span>
                          <span className="text-base text-neutral-300 group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                            {course.title}
                          </span>
                        </div>
                        {course.status && (
                          <span className="mt-3 sm:mt-0 ml-0 sm:ml-4 shrink-0 text-[9px] font-mono uppercase tracking-[0.2em] text-neutral-400 border border-neutral-700 bg-neutral-900/50 px-3 py-1.5 rounded-full">
                            {course.status}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Elegant Typography-Driven Toggle */}
              <button
                onClick={() => setIsCoursesExpanded(!isCoursesExpanded)}
                className="group flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors duration-300 mt-2"
              >
                {isCoursesExpanded ? (
                  <>
                    <span className="text-neutral-600 group-hover:text-white">—</span> 
                    Collapse list
                  </>
                ) : (
                  <>
                    <span className="text-neutral-600 group-hover:text-white">+</span> 
                    View remaining {courses.length - INITIAL_VISIBLE_COURSES} courses
                  </>
                )}
              </button>
            </div>

            {/* Organizations Block - Inline editorial flow */}
            <div className="space-y-8">
              <h4 className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Organizations
              </h4>
              <p className="text-xl md:text-2xl leading-relaxed text-neutral-500 font-light">
                {activities.map((activity, idx) => (
                  <React.Fragment key={idx}>
                    <span className="hover:text-white transition-colors duration-300 cursor-default inline-block">
                      {activity}
                    </span>
                    {idx < activities.length - 1 && (
                      <Star className="inline-block w-4 h-4 text-neutral-800 mx-4 md:mx-6 -translate-y-1" />
                    )}
                  </React.Fragment>
                ))}
              </p>
            </div>

            {/* Awards Block */}
            <div className="space-y-8">
              <h4 className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                Honors & Awards
              </h4>
              <div className="border-t border-neutral-800/60">
                {awards.map((award, idx) => (
                  <div 
                    key={idx} 
                    className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-neutral-800/60 hover:border-white/30 transition-colors duration-500"
                  >
                    <div className="flex items-center gap-6">
                      <Star className="w-4 h-4 text-neutral-700 group-hover:text-white transition-colors duration-500 rotate-0 group-hover:rotate-90" />
                      <span className="text-lg text-neutral-300 group-hover:text-white transition-colors">
                        {award.title}
                      </span>
                    </div>
                    <span className="mt-3 md:mt-0 text-xs font-mono tracking-[0.1em] text-neutral-500 uppercase">
                      {award.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Education