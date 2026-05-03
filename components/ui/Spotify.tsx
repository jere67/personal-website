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
  },[])

  if (!spotifyData) return null

  return (
    <div className="flex items-center gap-3 px-1 py-0.5">
      <FaSpotify 
        className={`w-4 h-4 transition-colors duration-500 ${
          spotifyData.isPlaying ? 'text-[#1DB954] animate-pulse' : 'text-neutral-600'
        }`} 
      />
      
      {spotifyData.isPlaying && spotifyData.songUrl && spotifyData.name && spotifyData.artist ? (
        <a 
          href={spotifyData.songUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-xs font-mono text-neutral-300 hover:text-white transition-colors truncate max-w-[200px] md:max-w-[300px]"
          title={`${spotifyData.name} by ${spotifyData.artist}`}
        >
          {spotifyData.name} <span className="text-neutral-500">— {spotifyData.artist}</span>
        </a>
      ) : (
        <span className="text-[10px] md:text-xs font-mono text-neutral-600 uppercase tracking-widest">
          System Idle
        </span>
      )}
    </div>
  )
}

export default Spotify