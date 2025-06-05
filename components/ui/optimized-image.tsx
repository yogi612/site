"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"
import { getFallbackImage } from "@/lib/image-utils"

interface OptimizedImageProps extends Omit<ImageProps, "onError"> {
  fallbackCategory?: "person" | "product" | "service" | "logo" | "general"
  showPlaceholder?: boolean
}

export function OptimizedImage({
  src,
  alt,
  fallbackCategory = "general",
  showPlaceholder = true,
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError && showPlaceholder) {
      setImgSrc(getFallbackImage(fallbackCategory))
      setHasError(true)
    }
  }

  return (
    <Image src={imgSrc || getFallbackImage(fallbackCategory)} alt={alt || "Image"} {...props} onError={handleError} />
  )
}
