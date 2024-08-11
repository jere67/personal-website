import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'
import Button from './Button'
import { FaLocationArrow } from 'react-icons/fa6'

const Grid = () => {
  return (
    <section id="about" className='relative overflow-hidden z-[20]' data-aos="fade-up" data-aos-duration="500">
      <div className='pt-32 pb-12 z-[20]'>
        <h1 className='heading'>
          About {' '}
          <span className='text-blue-300'>Me</span>
        </h1>
      </div>
      <BentoGrid>
        {gridItems.map(
          ({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
        ))}
      </BentoGrid>
      <div className='flex flex-col items-center z-20'>
        <a href="/about">
          <Button 
            title="Know more about me"
            icon={<FaLocationArrow />}
            position='right'
            otherClasses='z-20'
          />
        </a>
      </div>
    </section>
  )
}

export default Grid