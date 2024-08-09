import { NextResponse } from 'next/server'

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN

const BASIC = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'

async function getAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${BASIC}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: REFRESH_TOKEN as string
    })
  })
  const data = await response.json()
  return data.access_token as string
}

export async function GET() {
  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
    return NextResponse.json({ error: 'Spotify API credentials are not set.'}, { status: 500 })
  }

  try {
    const accessToken = await getAccessToken()
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    if (response.status === 204) {
      return NextResponse.json({
        isPlaying: false,
        songUrl: null,
        name: null,
        artist: null
      })
    }

    if (!response.ok) {
      throw new Error('Failed to fetch data from Spotify API.')
    }

    const song = await response.json()
    return NextResponse.json({
      isPlaying: song.is_playing as boolean,
      songUrl: song.item.external_urls.spotify as string,
      name: song.item.name as string,
      artist: song.item.artists.map((artist: { name: string }) => artist.name).join(', ') as string
    })
  } catch (error) {
    console.error('Error fetching Spotify data:', error)
    return NextResponse.json({ error: 'Failed to fetch current song.' }, { status: 500 })
  }
}