"use client"

import {
  languages,
  frontend, 
  backend,
  dataScience,
  machineLearning,
  devTools
} from "@/data";
import React, { useState } from "react";
import SkillsAnimation from "./ui/SkillsAnimation";

const Skills = () => {
  let [hoveredId, setHoveredId] = useState<string | null>(null);

  const renderSkillCategory = (category: any[], prefix: string) => (
    <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
      {category.map((image, index) => (
        <SkillsAnimation
          key={`${prefix}-${index}`}
          src={image.img}
          width={image.width}
          height={image.height}
          index={index}  // Add this line
          id={`${prefix}-${index}`}
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
          skillName={image.skillName}
        />
      ))}
    </div>
  );

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-40 z-[20]"
      style={{ transform: "scale(0.9)" }}
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className='pt-8 pb-12 z-[20]'>
        <h1 className='heading'>
          My {' '}
          <span className='text-blue-300'>Skills</span>
        </h1>
      </div>

      {renderSkillCategory(languages, 'lang')}
      {renderSkillCategory(frontend, 'front')}
      {renderSkillCategory(backend, 'back')}
      {renderSkillCategory(dataScience, 'data')}
      {renderSkillCategory(machineLearning, 'ml')}
      {renderSkillCategory(devTools, 'dev')}
    </section>
  );
};

export default Skills;