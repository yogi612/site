/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      "www.finonest.com",
      "finonest.org",
    ],
    // For static export (if needed)
    unoptimized: process.env.NODE_ENV === "production",
  },
  // Hostinger typically uses Apache, so we need to handle trailing slashes
  trailingSlash: true,
  // For better performance on Hostinger
  compress: true,
  // Optimize for production
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error", "warn"],
          }
        : false,
  },
  // For static export (uncomment if you're using static hosting)
  // output: 'export',
}

module.exports = nextConfig
