"use client"

import { useEffect } from "react"

export default function GabsChat() {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script")
    script.src =
      "https://app.getgabs.com/getredtowp/iframe/J1CbY16nCkE9agkc2golsSeNA9eQdUvJYvHqFSNurnhwDzLyeFflFzj7BPM8s9nwsSsidk1ezhobNuhxJmh4U378P3NEXnm3YLs7"
    script.async = true
    script.defer = true

    // Append to document body
    document.body.appendChild(script)

    // Cleanup function to remove script when component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, []) // Empty dependency array ensures this runs once on mount

  return null // This component doesn't render anything visible
}
