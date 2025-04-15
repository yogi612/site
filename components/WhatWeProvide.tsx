import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Landmark, Home, Building2, PiggyBank, Calculator, Shield, BadgeCheck, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Landmark,
    title: "Personal Loans",
    description: "Quick and hassle-free personal loans with competitive interest rates",
    link: "/services/personal-loans",
  },
  {
    icon: Building2,
    title: "Business Loans",
    description: "Flexible financing solutions to help grow your business",
    link: "/services/business-loans",
  },
  {
    icon: Home,
    title: "Home Loans",
    description: "Make your dream home a reality with our affordable home loans",
    link: "/services/home-loans",
  },
  {
    icon: PiggyBank,
    title: "Investment Solutions",
    description: "Expert guidance for wealth creation and portfolio management",
    link: "/services/investment-solutions",
  },
  {
    icon: Calculator,
    title: "Financial Planning",
    description: "Comprehensive financial planning for a secure future",
    link: "/services/financial-planning",
  },
  {
    icon: Shield,
    title: "Insurance Services",
    description: "Protect what matters most with our insurance solutions",
    link: "/services/insurance",
  },
  {
    icon: BadgeCheck,
    title: "Credit Score Services",
    description: "Free credit score check and improvement consultation",
    link: "/services/credit-score",
  },
  {
    icon: Wallet,
    title: "Wealth Management",
    description: "Professional wealth management for long-term growth",
    link: "/services/wealth-management",
  },
]

export default function WhatWeProvide() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">
          What Finonest India Provides
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.slice(0, 4).map((service, index) => (
            <Link href={service.link} key={index} className="block h-full">
              <Card className="border-2 border-red-500 shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full">
                <CardContent className="p-4 md:p-6 flex flex-col h-full">
                  <div className="flex flex-col items-center text-center space-y-3 md:space-y-4 flex-grow">
                    <div className="p-2 md:p-3 bg-primary/10 rounded-full">
                      <service.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold">{service.title}</h3>
                    <p className="text-sm md:text-base text-gray-600">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8 md:mt-12">
          <Link href="/services" passHref>
            <Button size="lg">View All Services</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
