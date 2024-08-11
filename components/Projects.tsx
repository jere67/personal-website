import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaGithub, FaLocationArrow } from 'react-icons/fa6'
import Button from './Button'

const Projects = () => {
  return (
    <div className='py-20 relative overflow-hidden z-[20]' id='projects' data-aos="fade-up" data-aos-duration="500">
      <h1 className='heading'>
        Featured {' '}
        <span className='text-blue-300'>Projects</span>
      </h1>

      {/* TODO: Fit Project images better to card */}
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[90vw] z-[20]'>
            <PinContainer title={link} href={link} >
              <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                  <img src="./bg.png" alt="bg-img"/>
                </div>
                <img 
                  src={img}
                  alt={title}
                  className='z-10 absolute bottom-0 rounded-3xl h-full'
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                {des}
              </p>

              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                  {iconLists.map((icon, index) => (
                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' style={{transform: `translateX(-${5 * index * 2}px)`}}>
                      <img src={icon} alt={icon} className='p-2'/>
                    </div>  
                  ))}
                </div>

                <div className='flex justify-center items-center'>
                  {/* TODO: Add functioning href to code */}
                  {/* <a className='mx-3 line-clamp-1' href='https://www.google.com'>
                    <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Code</p>
                    <FaGithub className='ms-1 me-3' color='#CBACF9'/>
                  </a> */}
                  <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Live Demo</p>
                  <FaLocationArrow className='ms-1' color='#CBACF9'/>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      <div className='flex flex-col items-center z-20'>
        <a href="/projects">
          <Button
            title="View All Projects"
            icon={<FaLocationArrow />}
            position='right'
            otherClasses='z-20'
          />
        </a>
      </div>
    </div>
  )
}

export default Projects