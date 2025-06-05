"use client"

import Script from "next/script"

export function GabsChat() {
  // Use the correct script URL from your Gabs Chat account
  const scriptUrl =
    "https://app.getgabs.com/getredtowp/iframe/J1CbY16nCkE9agkc2golsSeNA9eQdUvJYvHqFSNurnhwDzLyeFflFzj7BPM8s9nwsSsidk1ezhobNuhxJmh4U378P3NEXnm3YLs7"

  return (
    <>
      {/* Use Next.js Script component for proper script loading */}
      <Script
        id="gabs-chat-script"
        src={scriptUrl}
        strategy="lazyOnload"
        onError={(e) => {
          console.error("Failed to load Gabs Chat script:", e)
        }}
      />
    </>
  )
}

// Also export as default for backward compatibility
export default GabsChat
