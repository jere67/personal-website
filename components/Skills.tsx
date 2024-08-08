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
          src={image.Image}
          width={image.width}
          height={image.height}
          id={`${prefix}-${index}`}
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
        />
      ))}
    </div>
  );

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-40 z-[20]"
      style={{ transform: "scale(0.9" }}
    >
      <div className='pt-8 pb-12 z-[20]'>
        <h1 className='heading'>
          My {' '}
          <span className='text-purple'>Skills</span>
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