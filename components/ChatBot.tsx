"use client"

import { useEffect, useRef } from "react"

export function ChatBot() {
  const chatWidgetRef = useRef(null)

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === "undefined") return

    try {
      const script = document.createElement("script")
      script.src =
        "https://app.getgabs.com/getredtowp/iframe/J1CbY16nCkE9agkc2golsSeNA9eQdUvJYvHqFSNurnhwDzLyeFflFzj7BPM8s9nwsSsidk1ezhobNuhxJmh4U378P3NEXnm3YLs7"
      script.async = true
      script.defer = true // Add defer attribute
      script.type = "text/javascript" // Explicitly set the type

      script.onload = () => {
        console.log("Chat script loaded successfully")
      }

      script.onerror = (error) => {
        console.error("Error loading chat script:", error)
      }

      // Only append if the ref is available
      if (chatWidgetRef.current) {
        chatWidgetRef.current.appendChild(script)
      }

      return () => {
        if (chatWidgetRef.current && chatWidgetRef.current.contains(script)) {
          chatWidgetRef.current.removeChild(script)
        }
      }
    } catch (error) {
      console.error("Error in ChatBot component:", error)
    }
  }, [])

  return <div ref={chatWidgetRef} id="chat-widget-container" className="hidden"></div>
}

// Also export as default for backward compatibility
export default ChatBot
