import {
  languages,
  frontend, 
  backend,
  dataScience,
  machineLearning,
  devTools
} from "@/data";
import React from "react";
import SkillsAnimation from "./ui/SkillsAnimation";

const Skills = () => {
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

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {languages.map((image, index) => (
          <SkillsAnimation
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {frontend.map((image, index) => (
          <SkillsAnimation
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {backend.map((image, index) => (
          <SkillsAnimation
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {dataScience.map((image, index) => (
          <SkillsAnimation
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {machineLearning.map((image, index) => (
          <SkillsAnimation
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {devTools.map((image, index) => (
          <SkillsAnimation
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;