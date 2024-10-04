import React from 'react'

import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import Button from './Button'
import { FaLocationArrow } from 'react-icons/fa6'
import HeroContent from './ui/HeroContainer'
import Image from 'next/image'

const Hero = () => {
  return (
    // Hero version 1
    // <div className="pb-20 pt-36 relative flex flex-col h-[750px] w-full">
    //   <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
    //     <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    //   </div>

    //   <div className='flex justify-center relative my-10 z-10'>
    //     <div className='max-w-[89vw] md:max-w-2xl lg:max-2-[60vw] flex flex-col items-center justify-center'>
    //       <img src='/my-head.png' alt='me' className='rounded-full' width={250} height={250}/>

    //       <TextGenerateEffect 
    //         className='text-center text-[20px] md:text-5xl lg:text-6xl'
    //         words='Hi, my name is Jeremy Moon' // color turns purple on starting on 4th index
    //       />

    //       <p className='text-center md:tracking-wider mb-4 text-sm md:text-base'>
    //         I am a software engineer, tech entrepreneur, and aspiring machine learning engineer.
    //       </p>

    //       {/* Button Here */}
    //       {/* <a href="#about">
    //         <Button
    //           title="Show my work"
    //           icon={<FaLocationArrow />}
    //           position="right"
    //         />
    //       </a> */}
    //     </div>
    //   </div>
    // </div>

    <div className='pb-20 pt-36 relative flex flex-col h-screen w-full'>
      {/* <Image 
        className='rotate-180 absolute top-[-500px] left-0 z-[1] w-[98vw] h-[98vh] object-cover' 
        src='/moon.jpg'
        alt='Moon'
        width={500}
        height={500}
        unoptimized
      /> */}
      {/* <video autoPlay muted loop className='rotate-180 absolute top-[-440px] left-0 z-[1] w-full h-full object-cover'>
        <source src='/moon.webm' type='video/webm'/>
      </video> */}
      <HeroContent />
    </div>
  )
}

export default Hero