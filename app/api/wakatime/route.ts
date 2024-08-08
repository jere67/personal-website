import { NextResponse } from 'next/server'

export async function GET() {
  const API_KEY = process.env.WAKATIME_API_KEY

  if (!API_KEY) {
    return NextResponse.json({ error: 'WakaTime API key is not set.' }, { status: 500 })
  }

  try {
    const response = await fetch(`https://wakatime.com/api/v1/users/current/all_time_since_today?api_key=${API_KEY}`)

    if (!response.ok) {
      throw new Error('Failed to fetch data from WakaTime API.')
    }

    const data = await response.json()
    return NextResponse.json(data.data)
  } catch (error) {
    console.error('Error fetching WakaTime data:', error)
    return NextResponse.json({ error: 'Failed to fetch coding hours.' }, { status: 500 })
  }
}