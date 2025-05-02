"use client"

import React from 'react';
import { FaGraduationCap, FaStar, FaFlask, FaUsers, FaAward } from 'react-icons/fa';
import { IoSparkles } from "react-icons/io5";
import { BackgroundGradient } from './ui/BackgroundGradient';

const Education = () => {
  const educationDetails = {
    university: "University of Michigan—Ann Arbor",
    degree: "Bachelor of Science in Engineering in Data Science",
    gpa: "3.9 / 4.0",
    courses: [
      "EECS 485 - Web Systems (Scheduled)",
      "EECS 445 - Introduction to Machine Learning (Scheduled)",
      "EECS 398 - Practical Data Science",
      "EECS 376 - Foundations of Computer Science",
      "EECS 281 - Data Structures and Algorithms",
      "EECS 280 - Programming (OOP) and Intro Data Structures",
      "EECS 203 - Discrete Mathematics",
      "EECS 201 - Computer Science Pragmatics (Scheduled)",
      "MATH 217 - Linear Algebra",
      "STATS 412 - Introduction to Probability and Statistics",
      "Calculus 1, 2, 3",
    ],
    activities: [
      "Michigan Blockchain",
      "Michigan Data Science Team (MDST)",
      "Michigan Student Artificial Intelligence Lab (MSAIL)",
      "Korean-American Scientists and Engineers Association (KSEA)",
    ],
    awards: [
      "William J. Branstrom Freshman Prize (Top 5%)",
      "2x Dean's Honor List",
      "University Honors",
    ],
  };

  const ListItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start mb-2">
      <FaStar className="text-blue-300 mr-3 mt-1 flex-shrink-0 text-xs" />
      <span className="text-neutral-300 text-sm md:text-base">{children}</span>
    </li>
  );

  const SectionTitle = ({ icon: Icon, title }: { icon: React.ElementType, title: string }) => (
     <h2 className="font-bold text-lg md:text-xl lg:text-2xl mt-6 mb-3 text-neutral-100 flex items-center gap-2">
        <Icon className="text-blue-300 text-xl" />
        {title}
      </h2>
  );

  return (
    <section id='education' className='relative overflow-hidden z-[20] py-20' data-aos="fade-up" data-aos-duration="500">
      <div className='pb-12 z-[20]'>
        <h1 className='heading z-20'>
          My {' '} Education
        </h1>
      </div>

      <div className='flex flex-col items-center justify-center gap-3 h-full relative z-[20] px-4'>
        <BackgroundGradient
           className='h-full flex flex-col sm:w-[640px] w-[90vw] z-20 rounded-2xl overflow-hidden border border-white/[0.1] bg-black/[0.96]'
        >
          <div className='z-30 p-6 md:p-8 w-full'>
            <div className='flex items-center gap-3 mb-1'>
               <FaGraduationCap className="text-3xl text-blue-300" />
               <h1 className='font-bold text-xl md:text-2xl lg:text-3xl text-white'>
                 {educationDetails.university}
                </h1>
            </div>
            <p className='lg:text-lg text-neutral-300 mb-1 ml-10'>
              {educationDetails.degree}
            </p>
            <div className='flex items-center gap-2 ml-10 mb-4'>
              <IoSparkles className="text-yellow-400" />
              <p className='text-base lg:text-lg text-neutral-200 font-medium'>
                GPA: {educationDetails.gpa}
              </p>
            </div>

            <div>
              <SectionTitle icon={FaFlask} title="Relevant Coursework" />
              <ul className='list-none pl-4'>
                {educationDetails.courses.map((course, index) => (
                  <ListItem key={index}>
                    {course.includes("(Scheduled)") ? (
                       <>
                         {course.replace(" (Scheduled)", "")}
                         <span className="ml-2 text-xs font-medium text-cyan-400 bg-cyan-900/50 px-2 py-0.5 rounded-full border border-cyan-700">Scheduled</span>
                       </>
                     ) : (
                       course
                     )}
                  </ListItem>
                ))}
              </ul>
            </div>

            <div>
              <SectionTitle icon={FaUsers} title="Activities" />
              <ul className='list-none pl-4'>
                {educationDetails.activities.map((activity, index) => (
                  <ListItem key={index}>{activity}</ListItem>
                ))}
              </ul>
            </div>

            <div>
              <SectionTitle icon={FaAward} title="Awards" />
               <ul className='list-none pl-4'>
                {educationDetails.awards.map((award, index) => (
                  <ListItem key={index}>{award}</ListItem>
                ))}
              </ul>
            </div>
          </div>
        </BackgroundGradient>
      </div>
    </section>
  );
};

export default Education;