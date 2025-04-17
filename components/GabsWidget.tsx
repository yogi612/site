"use client"

import { useEffect } from "react"

export default function GabsWidget() {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script")
    script.src =
      "https://app.getgabs.com/getredtowp/iframe/J1CbY16nCkE9agkc2golsSeNA9eQdUvJYvHqFSNurnhwDzLyeFflFzj7BPM8s9nwsSsidk1ezhobNuhxJmh4U378P3NEXnm3YLs7"
    script.async = true

    // Append to document body
    document.body.appendChild(script)

    // Cleanup function to remove script when component unmounts
    return () => {
      document.body.removeChild(script)
    }
  }, []) // Empty dependency array ensures this runs once on mount

  return (
    <div id="gabs-widget-container" className="w-full my-4">
      {/* The script will inject content here or elsewhere in the DOM */}
    </div>
  )
}
