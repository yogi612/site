"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { CreditCard, BarChart2, Home, LineChart } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "Loan Assistance",
    description: "Personal, Business, Home, and Vehicle Loans",
    icon: CreditCard,
    href: "/products/loan-assistance",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9hbnx8fHx8fDE2ODQ3NjI2MTA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    name: "Credit Score & Financial Advisory",
    description: "Improve your credit score and financial health",
    icon: BarChart2,
    href: "/products/credit-score",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y3JlZGl0LHNjb3JlfHx8fHx8MTY4NDc2MjYxMg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    name: "Home & Vehicle Loans",
    description: "Specialized loans for your biggest purchases",
    icon: Home,
    href: "/products/home-vehicle-loans",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aG9tZSxsb2FufHx8fHx8MTY4NDc2MjYxMw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    name: "Investment & Wealth Management",
    description: "Grow your wealth with expert investment advice",
    icon: LineChart,
    href: "/products/investment-wealth",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aW52ZXN0bWVudHx8fHx8fDE2ODQ3NjI2MTU&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
]

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
}

export default function OurProducts() {
  const isMobile = useIsMobile()
  const [isDesktop, setIsDesktop] = useState(false)
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2 })

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">
          What Finonest India Provides
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              ref={ref}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-stretch"
            >
              <Link href={product.href} className="block group w-full">
                <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 transition-all duration-200 hover:shadow-xl sm:hover:scale-105 border-2 border-red-500 h-full flex flex-col justify-between">
                  <div className="flex flex-col items-center">
                    <div className="flex justify-center mb-4 aspect-video w-full max-w-[300px] mx-auto">
                      <OptimizedImage
                        src={product.image}
                        alt={product.name}
                        width={200}
                        height={150}
                        className="rounded-lg object-cover w-full h-full"
                        fallbackCategory="product"
                      />
                    </div>
                    <div className="flex justify-center mb-4">
                      <product.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary group-hover:text-primary/80 transition-colors" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center text-gray-800 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 text-center">{product.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/products" passHref>
            <Button size="lg">View All Products</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
