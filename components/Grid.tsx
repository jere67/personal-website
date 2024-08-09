import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="about" data-aos="fade-up" data-aos-duration="500">
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
    </section>
  )
}

export default Grid