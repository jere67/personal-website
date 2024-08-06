import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="about">
      <div className='pt-32 pb-12'>
        <h1 className='heading'>
          About {' '}
          <span className='text-purple'>Me</span>
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