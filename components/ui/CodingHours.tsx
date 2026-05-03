'use client'
import { useState, useEffect } from 'react'

const CodingHours = () => {
  const [hours, setHours] = useState<number | null>(null)

  useEffect(() => {
    const fetchCodingHours = async () => {
      try {
        const response = await fetch('/api/wakatime')
        const data = await response.json()
        setHours(Math.round(data.total_seconds / 60 / 60))
      } catch (error) {
        console.error('Error fetching coding hours:', error)
      }
    }
    fetchCodingHours()
  },[])

  return (
    <a 
      href='https://wakatime.com/@jere67' 
      target='_blank' 
      rel="noreferrer"
      className='w-full h-full flex flex-col justify-between p-8 hover:bg-white/[0.02] transition-colors cursor-pointer group'
    >
      <div className='flex items-center justify-between w-full'>
        <div className='flex flex-col'>
          <h2 className='text-xs font-mono uppercase tracking-[0.2em] text-neutral-500'>Wakatime</h2>
          <p className='text-white text-sm font-medium mt-1'>Hours Coded</p>
        </div>
        {/* Decorative Grid Graphic */}
        <div className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center bg-neutral-900/50 group-hover:border-blue-500/30 transition-colors">
           <div className="w-2 h-2 rounded-full bg-blue-500/50 group-hover:bg-blue-400 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all" />
        </div>
      </div>

      <div className='mt-12'>
        <div className='flex items-baseline gap-2'>
          <span className='text-6xl lg:text-7xl font-light tracking-tighter text-white group-hover:text-blue-100 transition-colors'>
            {hours === null ? '--' : hours.toLocaleString()}
          </span>
          <span className='text-xl text-neutral-600 font-light'>hrs</span>
        </div>
        <p className='text-xs text-neutral-600 font-mono mt-4'>LIFETIME RECORDED</p>
      </div>
    </a>
  )
}

export default CodingHours