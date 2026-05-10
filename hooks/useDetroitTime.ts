"use client"

import { useState, useEffect } from "react"

export function useDetroitTime(): string {
  const [time, setTime] = useState("")

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString("en-US", {
        timeZone: "America/Detroit",
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
      }))
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return time
}
