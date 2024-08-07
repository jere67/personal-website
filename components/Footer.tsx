import { socialMedia } from '@/data'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-5' id='footer'>

      <div className='flex flex-col items-center z-[20]'>
        <h1 className='heading lg:max-w-[45vw]:'>Text here</h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>Text here</p>
      </div>

      <div className='flex mt-16 md:flex-row flex-col justify-between items-center z-[20]'>
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Jeremy Moon</p>

        <div className='flex items-center md:gap-3 gap-6 z-[20]'>
          {socialMedia.map((profile) => (
            <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
              <img src={profile.img} alt={profile.img} width={20} height={20}/>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer