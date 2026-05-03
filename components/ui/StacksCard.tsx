'use client'

import {
  SiCss3, SiExpress, SiFigma, SiFlask, SiGit, SiHtml5,
  SiJavascript, SiMarkdown, SiMui, SiNextdotjs, SiNodedotjs,
  SiPostgresql, SiPython, SiPytorch, SiReact, SiTailwindcss,
  SiTensorflow, SiTypescript, SiVisualstudiocode, SiVite
} from '@icons-pack/react-simple-icons'

const row1 =[SiHtml5, SiCss3, SiJavascript, SiTypescript, SiFigma, SiTailwindcss, SiNextdotjs, SiReact, SiPython, SiPostgresql]
const row2 =[SiExpress, SiNodedotjs, SiFlask, SiGit, SiVite, SiVisualstudiocode, SiMui, SiMarkdown, SiTensorflow, SiPytorch]

const StacksCard = () => {
  return (
    <div className='relative flex flex-col gap-6 overflow-hidden py-4 w-full mask-edges'>
      
      {/* Row 1 - Moves Left */}
      <div className='flex w-max animate-marquee'>
        {[...row1, ...row1, ...row1].map((Icon, idx) => (
          <div key={`r1-${idx}`} className='mx-8 text-neutral-700 hover:text-white transition-colors duration-300'>
            <Icon className='w-10 h-10' />
          </div>
        ))}
      </div>

      {/* Row 2 - Moves Right */}
      <div className='flex w-max animate-marquee-reverse'>
        {[...row2, ...row2, ...row2].map((Icon, idx) => (
          <div key={`r2-${idx}`} className='mx-8 text-neutral-700 hover:text-white transition-colors duration-300'>
            <Icon className='w-10 h-10' />
          </div>
        ))}
      </div>

      <style jsx>{`
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }
        .animate-marquee:hover, .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default StacksCard