/**
 * Utility functions for handling images in the application
 */

// Base path for public images
const PUBLIC_IMAGE_PATH = "/images"

// Function to get the correct image path
export function getImagePath(imageName: string): string {
  // If the image already has a leading slash or is an absolute URL, return as is
  if (imageName.startsWith("/") || imageName.startsWith("http")) {
    return imageName
  }

  // Otherwise, prepend the public image path
  return `${PUBLIC_IMAGE_PATH}/${imageName}`
}

// Function to get a fallback image if the main one fails
export function getFallbackImage(category: "person" | "product" | "service" | "logo" | "general" = "general"): string {
  const fallbacks = {
    person: "/images/fallbacks/person-placeholder.png",
    product: "/images/fallbacks/product-placeholder.png",
    service: "/images/fallbacks/service-placeholder.png",
    logo: "/images/fallbacks/logo-placeholder.png",
    general: "/images/fallbacks/general-placeholder.png",
  }

  return fallbacks[category]
}

// Function to generate placeholder image URL
export function getPlaceholderImage(width: number, height: number, text: string): string {
  return `/placeholder.svg?height=${height}&width=${width}&query=${encodeURIComponent(text)}`
}
