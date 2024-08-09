"use client"
import React, { useEffect, useState } from 'react'
import { FaSpotify } from 'react-icons/fa6'

interface SpotifyData {
  isPlaying: boolean;
  songUrl: string | null;
  name: string | null;
  artist: string | null;
}

const Spotify: React.FC = () => {
  const [spotifyData, setSpotifyData] = useState<SpotifyData | null>(null)

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        const response = await fetch('/api/spotify')
        const data: SpotifyData = await response.json()
        setSpotifyData(data)
      } catch (error) {
        console.error('Error fetching Spotify data:', error)
      }
    }

    fetchSpotifyData()
  }, [])

  if (!spotifyData) return null

  return (
    <div className='flex justify-center items-center mt-8 z-20'>
      <div className='flex items-center space-x-2 backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 p-2 z-20'>
        <FaSpotify className='text-green-500' />
        {spotifyData.isPlaying && spotifyData.songUrl && spotifyData.name && spotifyData.artist ? (
          <a href={spotifyData.songUrl} target="_blank" rel="noopener noreferrer" className='text-white hover:text-green-500 transition-colors z-20'>
            {spotifyData.name} - {spotifyData.artist}
          </a>
        ) : (
          <span className='text-white-200'>Not playing</span>
        )}
      </div>
    </div>
  )
}

export default Spotify