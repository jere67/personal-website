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

const HeroContent = () => {
  return (
    <motion.div initial="hidden" animate="visible" className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]">
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div variants={slideInFromTop} className="Welcome-box py-[8px] px-[7px]">
        </motion.div>

        <TextGenerateEffect
          className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto' 
          words='Hi, my name is Jeremy Moon' // color turns purple on starting on 4th index 
        />

        <motion.p variants={slideInFromLeft(1.4)} className="text-lg text-gray-400 max-w-[600px]">
          I am a software engineer, tech entrepreneur, and aspiring machine learning engineer.
        </motion.p>
      </div>

      <motion.div variants={slideInFromRight(1.4)} className="w-full h-full flex justify-center items-center">
        <Image
          src="/my-head.png"
          alt="me"
          height={250}
          width={250}
          className="rounded-full"
        />
      </motion.div>
      <AnimatedSignature />
    </motion.div>
  );
};

export default HeroContent;