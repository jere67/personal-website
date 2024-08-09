import React from 'react'
import { CardSpotlight } from './ui/CardSpotlight'

const Education = () => {
  return (
    <section id='education' className='relative overflow-hidden z-[20]' data-aos="fade-up" data-aos-duration="500">
      <div className='pb-12 z-[20]'>
        <h1 className='heading z-20'>
          My {' '}
          <span className='text-blue-300 z-20'>Education</span>
        </h1>
      </div>

      <div className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden z-[20]'>
        <CardSpotlight className='h-full flex items-center justify-center sm:w-[640px] w-[85vw] z-20'>
          <div className='z-30'>
            <h1 className='font-bold lg:text-2xl md:text-xl text-base'>University of Michigan—Ann Arbor</h1>
            <p className='lg:text-xl lg:font-normal font-light text-sm'>Bachelor of Science in Engineering in Data Science</p>
            <p className='lg:text-xl lg:font-normal font-light text-sm'>GPA: 3.96/4.00</p>
            <h2 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>Relevant Coursework</h2>
            <ul>
              <li>EECS 281 - Data Structures and Algorithms <em>(Current)</em></li>
              <li>EECS 376 - Foundations of Computer Science <em>(Current)</em></li>
              <li>EECS 203 - Discrete Mathematics</li>
              <li>EECS 280 - Programming (OOP) and Intro Data Structures</li>
              <li>Calculus 1, 2, 3</li>
            </ul>
            <h2 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>Activities</h2>
              <ul>
                <li>Michigan Data Science Team (MDST)</li>
                <li>Michigan Student Artificial Intelligence Lab (MSAIL)</li>
                <li>Korean-American Scientists and Engineers Association (KSEA)</li>
              </ul>
            <h2 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>Awards</h2>
            <ul>
              <li>William J. Branstrom Freshman Prize (Top 5%)</li>
              <li>2x Dean&apos;s Honor List</li>
              <li>University Honors</li>
            </ul>
          </div>

          
        </CardSpotlight>


      </div>
    </section>
  )
}

export default Education