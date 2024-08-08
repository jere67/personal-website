'use client'
import { useState, useEffect } from 'react'
import { ClockIcon } from 'lucide-react'
import { LinkPreview } from './LinkPreview'

const CodingHours = () => {
  const [hours, setHours] = useState<number | null>(null)

  useEffect(() => {
    const fetchCodingHours = async () => {
      try {
        const response = await fetch('/api/wakatime')
        const data = await response.json()
        console.log(data)
        setHours(Math.round(data.total_seconds / 60 / 60))
      } catch (error) {
        console.error('Error fetching coding hours:', error)
      }
    }

    fetchCodingHours()
  }, [])

  return (
    <div className='flex flex-col gap-6 p-4 lg:p-6'>
      <div className='flex justify-center items-center gap-2'>
        <ClockIcon className='size-[18px]' />
        <h2 className='font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10'>Coding hours</h2>
      </div>
      <div className='font-sans font-bold text-lg lg:text-3xl max-w-96 z-10'>
        <LinkPreview url='https://wakatime.com/@jere67'>
          {hours === null ? '--' : `${hours} hrs`}
        </LinkPreview>
      </div>
    </div>
  )
}

export default CodingHours