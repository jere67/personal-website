"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  languages,
  frontend,
  backend,
  dataScience,
  machineLearning,
  devTools,
} from "@/data";

import PlusIcon from "./ui/PlusIcon";
import CloseIcon from "./ui/CloseIcon";

type SkillObject = {
  skillName: string;
  img: string;
  width: number;
  height: number;
  url: string;
};

interface SkillCategory {
  id: string;
  title: string;
  skills: SkillObject[];
}

const skillCategories: SkillCategory[] = [
  { id: "languages", title: "Languages", skills: languages },
  { id: "devtools", title: "Developer Tools", skills: devTools },
  { id: "frontend", title: "Frontend", skills: frontend },
  { id: "backend", title: "Backend", skills: backend },
  { id: "datascience", title: "Data Science", skills: dataScience },
  { id: "aiml", title: "AI / ML", skills: machineLearning },
];

const Skills = () => {
  const [expandedCategoryIds, setExpandedCategoryIds] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    setExpandedCategoryIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((prevId) => prevId !== id)
        : [...prevIds, id]
    );
  };

  return (
    <section
      id="skills"
      className="relative py-20 md:py-32 px-4 md:px-8 z-30"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="heading text-center mb-12 md:mb-16">
          My Skills
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:items-start">
          {skillCategories.map((category) => (
            <SkillCategoryBox
              key={category.id}
              category={category}
              isExpanded={expandedCategoryIds.includes(category.id)}
              onToggle={() => handleToggle(category.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillCategoryBoxProps {
  category: SkillCategory;
  isExpanded: boolean;
  onToggle: () => void;
}

const SkillCategoryBox: React.FC<SkillCategoryBoxProps> = ({
  category,
  isExpanded,
  onToggle,
}) => {
  return (
    <div
      className={`
        bg-black rounded-lg transition-all duration-300 ease-in-out border border-gray-800 hover:border-cyan-600/50
        ${isExpanded ? 'shadow-lg shadow-cyan-900/30' : 'shadow-md shadow-black/50'}
        group
      `}
    >
      <div
        className="flex justify-between items-center cursor-pointer p-6"
        onClick={onToggle}
        role="button"
        aria-expanded={isExpanded}
        aria-controls={`skill-content-${category.id}`}
      >
        <h3 className="text-xl md:text-2xl font-semibold text-gray-200 pointer-events-none">
          {category.title}
        </h3>
        <button
          aria-label={isExpanded ? "Collapse section" : "Expand section"}
          className="text-white transition-colors p-1 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
        >
          {isExpanded ? <CloseIcon className="w-5 h-5 md:w-6 md:h-6" /> : <PlusIcon className="w-5 h-5 md:w-6 md:h-6" />}
        </button>
      </div>

      <div
        className={`
          grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out
          ${isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
        `}
      >
        <div className="min-h-0">
          <div
            id={`skill-content-${category.id}`}
            className="px-6 pb-6 pt-0 grid grid-cols-3 sm:grid-cols-4 gap-x-4 gap-y-6"
          >
            {category.skills.map((skill) => (
              <a
                key={skill.skillName}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center transition-transform duration-200 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded-md"
                title={`Visit ${skill.skillName} website`}
              >
                <div className="relative mb-2 flex justify-center items-center h-16 w-16">
                  <Image
                    src={skill.img}
                    alt={`${skill.skillName} logo`}
                    width={skill.width}
                    height={skill.height}
                    className="object-contain max-h-full max-w-full"
                  />
                </div>
                <p className="text-xs md:text-sm text-white transition-colors">
                  {skill.skillName}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;