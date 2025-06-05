/**
 * Preloads critical images to improve perceived performance
 */
export function preloadCriticalImages() {
  const imagesToPreload = [
    // Add paths to critical images here
    "/images/hero-bg.jpg",
    "/images/logo.png",
    // Add more critical images as needed
  ]

  imagesToPreload.forEach((src) => {
    const img = new Image()
    img.src = src
  })
}
