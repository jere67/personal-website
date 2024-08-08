'use client'

import {
  SiCss3,
  SiExpress,
  SiFigma,
  SiFlask,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMarkdown,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiVisualstudiocode,
  SiVite
} from '@icons-pack/react-simple-icons'
import { Marquee } from './Marquee'

const StacksCard = () => {
  return (
    <div className='shadow-feature-card dark:shadow-feature-card-dark flex h-60 flex-col gap-2 overflow-hidden rounded-xl p-4 lg:p-6'>
      <Marquee gap='20px' className='py-4' fade pauseOnHover>
        <SiHtml5 className='size-10' />
        <SiCss3 className='size-10' />
        <SiJavascript className='size-10' />
        <SiTypescript className='size-10' />
        <SiFigma className='size-10' />
        <SiTailwindcss className='size-10' />
        <SiNextdotjs className='size-10' />
        <SiReact className='size-10' />
        <SiPython className='size-10' />
        <SiPostgresql className='size-10' />
      </Marquee>
      <Marquee gap='20px' className='py-4' reverse fade pauseOnHover>
        <SiExpress className='size-10' />
        <SiNodedotjs className='size-10' />
        <SiFlask className='size-10' />
        <SiGit className='size-10' />
        <SiVite className='size-10' />
        <SiVisualstudiocode className='size-10' />
        <SiMui className='size-10' />
        <SiMarkdown className='size-10' />
        <SiTensorflow className='size-10' />
        <SiPytorch className='size-10' />
      </Marquee>
    </div>
  )
}

export default StacksCard