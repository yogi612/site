"use client"

import { useEffect } from "react"
import { preloadCriticalImages } from "@/lib/preload-images"

export default function ImagePreloader() {
  useEffect(() => {
    preloadCriticalImages()
  }, [])

  return null // This component doesn't render anything
}
