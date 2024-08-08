"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";
import { TextGenerateEffect } from "./TextGenerateEffect";
import AnimatedSignature from "./AnimatedSignature";
import { FlipWords } from "./FlipWords";

const HeroContent = () => {
  const words = ["Software Engineer", "Tech Entrepreneur", "Data Scientist", "Machine Learning Engineer"]

  return (
    <motion.div initial="hidden" animate="visible" className="flex flex-col md:flex-row items-center justify-center px-20 mt-40 w-full h-full z-[20]">
      <div className="h-full w-full flex flex-col gap-5 justify-center text-center md:text-start">
        <TextGenerateEffect
          className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto' 
          words='Hi, my name is Jeremy Moon' // color turns purple on starting on 4th index 
        />

        <motion.div variants={slideInFromLeft(1.4)} className="text-3xl font-normal max-w-[600px] h-full pb-10">
          I am a<FlipWords words={words}/>
        </motion.div>
      </div>

      <motion.div variants={slideInFromRight(1.4)} className="w-full h-full flex flex-col justify-center items-center lg:pl-48">
        <Image
          src="/my-head.png"
          alt="me"
          height={250}
          width={250}
          className="rounded-full mb-5"
        />
        <div className="flex justify-center items-center pb-52">
          <AnimatedSignature />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;