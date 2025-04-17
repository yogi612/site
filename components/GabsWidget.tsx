"use client"

import { useEffect, useState } from "react"

export default function GabsWidget() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    try {
      // Create script element
      const script = document.createElement("script")
      script.src =
        "https://app.getgabs.com/getredtowp/iframe/J1CbY16nCkE9agkc2golsSeNA9eQdUvJYvHqFSNurnhwDzLyeFflFzj7BPM8s9nwsSsidk1ezhobNuhxJmh4U378P3NEXnm3YLs7"
      script.async = true

      // Handle script load success
      script.onload = () => {
        console.log("Gabs script loaded successfully")
        setStatus("success")
      }

      // Handle script load error
      script.onerror = (error) => {
        console.error("Error loading Gabs script:", error)
        setStatus("error")
        setErrorMessage("Failed to load the Gabs widget. Please check your connection or try again later.")
      }

      // Append to document body
      document.body.appendChild(script)

      // Cleanup function to remove script when component unmounts
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script)
        }
      }
    } catch (error) {
      console.error("Error in Gabs widget setup:", error)
      setStatus("error")
      setErrorMessage(`An unexpected error occurred: ${error instanceof Error ? error.message : String(error)}`)
    }
  }, []) // Empty dependency array ensures this runs once on mount

  // Only show debug information in development
  const isDevelopment = process.env.NODE_ENV === "development"

  return (
    <div id="gabs-widget-container" className="w-full my-4">
      {status === "loading" && isDevelopment && (
        <div className="text-center p-4 bg-gray-100 rounded">
          <p>Loading Gabs widget...</p>
        </div>
      )}

      {status === "error" && isDevelopment && (
        <div className="text-center p-4 bg-red-50 text-red-600 rounded border border-red-200">
          <p className="font-semibold">Gabs Widget Error</p>
          <p className="text-sm mt-1">{errorMessage}</p>
          <p className="text-xs mt-2">
            This error message is only visible in development mode. Check the browser console for more details.
          </p>
        </div>
      )}

      {/* The actual container where Gabs will inject content */}
      <div id="gabs-content-target"></div>
    </div>
  )
}
