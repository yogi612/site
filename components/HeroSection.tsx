"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [animationComplete, setAnimationComplete] = useState(false)
  const croppedImage = "/cropped_image.png"

  useEffect(() => {
    // Simulate animation duration (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setAnimationComplete(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-white py-12 md:py-20 lg:py-32 overflow-hidden min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px:8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left space-y-4 md:space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Smart Financial <span className="text-primary">Solutions</span> for Everyone
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Experience quick, transparent, and hassle-free financial services tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/apply-now">
                <Button size="lg" className="w-full sm:w-auto text-base md:text-lg px-6 py-3 md:px-8 md:py-4">
                  Apply Now <ChevronRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </Link>
              <Link href="/become-partner">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-base md:text-lg px-6 py-3 md:px-8 md:py-4"
                >
                  Become a Partner
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0 w-1/5 mx-auto lg:mx-0 lg:w-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full filter blur-3xl"></div>
            {croppedImage && (
              <Image
                src={croppedImage || "/placeholder.svg"}
                alt="Finonest Logo"
                width={152}
                height={152}
                className="rounded-full shadow-2xl relative z-10 w-full h-auto"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
