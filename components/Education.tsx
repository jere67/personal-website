"use client"

import type React from "react"
import { FaGraduationCap, FaStar, FaFlask, FaUsers, FaAward } from "react-icons/fa"
import { IoSparkles } from "react-icons/io5"

const Education = () => {
  const educationDetails = {
    university: "University of Michigan—Ann Arbor",
    degree: "B.S.E. in Data Science, Minor in Business and Mathematics",
    gpa: "3.89 / 4.00",
    courses: [
      "EECS 485 - Web Systems (Scheduled)",
      "EECS 445 - Introduction to Machine Learning (Scheduled)",
      "EECS 398 - Practical Data Science",
      "EECS 376 - Foundations of Computer Science",
      "EECS 281 - Data Structures and Algorithms",
      "EECS 280 - Programming (OOP) and Intro Data Structures",
      "EECS 203 - Discrete Mathematics",
      "MATH 217 - Linear Algebra",
      "MATH 425 - Introduction to Probability (Scheduled)",
      "Calculus 1, 2, 3",
    ],
    activities: [
      "Michigan Blockchain",
      "Michigan Data Science Team (MDST)",
      "Michigan Student Artificial Intelligence Lab (MSAIL)",
      "Korean-American Scientists and Engineers Association (KSEA)",
    ],
    awards: ["William J. Branstrom Freshman Prize (Top 5%)", "2x Dean's Honor List", "University Honors"],
  }

  const ListItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start mb-2 last:mb-0">
      <FaStar className="text-blue-400 mr-2 mt-1 flex-shrink-0 text-xs" />
      <span className="text-neutral-300 text-sm leading-relaxed">{children}</span>
    </li>
  )

  const BentoCard = ({
    children,
    className = "",
  }: {
    children: React.ReactNode
    className?: string
  }) => (
    <div
      className={`
      bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6
      hover:border-white/20 hover:bg-black/50 transition-all duration-300
      ${className}
    `}
    >
      {children}
    </div>
  )

  const SectionTitle = ({
    icon: Icon,
    title,
  }: {
    icon: React.ElementType
    title: string
  }) => (
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-400/30">
        <Icon className="text-blue-400 text-lg" />
      </div>
      <h3 className="font-semibold text-lg text-white">{title}</h3>
    </div>
  )

  return (
    <section id="education" className="relative overflow-hidden z-[20]" data-aos="fade-up" data-aos-duration="500">
      <div className="pb-12 z-[20]">
        <h1 className="heading z-20">My Education</h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-6 h-full relative z-[20] px-4">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* University Header */}
          <BentoCard className="md:col-span-2 lg:col-span-3">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-400/30">
                  <FaGraduationCap className="text-3xl text-blue-400" />
                </div>
              </div>
              <h2 className="font-bold text-2xl lg:text-3xl text-white mb-2">{educationDetails.university}</h2>
              <p className="text-lg text-neutral-300 mb-3">{educationDetails.degree}</p>
              <div className="flex items-center justify-center gap-2">
                <IoSparkles className="text-yellow-400 text-lg" />
                <p className="text-lg text-neutral-200 font-medium">GPA: {educationDetails.gpa}</p>
              </div>
            </div>
          </BentoCard>

          {/* Relevant Coursework */}
          <BentoCard className="md:col-span-2 lg:col-span-1">
            <SectionTitle icon={FaFlask} title="Relevant Coursework" />
            <ul className="list-none space-y-2 max-h-80 overflow-y-auto custom-scrollbar">
              {educationDetails.courses.map((course, index) => (
                <ListItem key={index}>
                  {course.includes("(Scheduled)") ? (
                    <>
                      {course.replace(" (Scheduled)", "")}
                      <span className="ml-2 text-xs font-medium text-cyan-400 bg-cyan-900/50 px-2 py-1 rounded-full border border-cyan-700">
                        Scheduled
                      </span>
                    </>
                  ) : (
                    course
                  )}
                </ListItem>
              ))}
            </ul>
          </BentoCard>

          {/* Activities */}
          <BentoCard className="lg:col-span-1">
            <SectionTitle icon={FaUsers} title="Activities" />
            <ul className="list-none space-y-2">
              {educationDetails.activities.map((activity, index) => (
                <ListItem key={index}>{activity}</ListItem>
              ))}
            </ul>
          </BentoCard>

          {/* Awards */}
          <BentoCard className="lg:col-span-1">
            <SectionTitle icon={FaAward} title="Awards" />
            <ul className="list-none space-y-2">
              {educationDetails.awards.map((award, index) => (
                <ListItem key={index}>{award}</ListItem>
              ))}
            </ul>
          </BentoCard>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.7);
        }
      `}</style>
    </section>
  )
}

export default Education
