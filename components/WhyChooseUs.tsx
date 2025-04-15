"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle, Shield, Users, BarChart } from "lucide-react"

const features = [
  {
    name: "Fast Loan Approvals",
    description: "Get your loan approved quickly with our streamlined process.",
    icon: CheckCircle,
    href: "/features/fast-loan-approvals",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmFzdCxhcHByb3ZhbHx8fHx8fDE2ODQ3NjI2MDY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    name: "Secure & Transparent Process",
    description: "Your data is safe with us, and our process is completely transparent.",
    icon: Shield,
    href: "/features/secure-process",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c2VjdXJlLHRyYW5zcGFyZW50fHx8fHx8MTY4NDc2MjYwNw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    name: "Trusted Financial Partners",
    description: "We work with reputable financial institutions to serve you better.",
    icon: Users,
    href: "/features/trusted-partners",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFydG5lcnNoaXB8fHx8fHwxNjg0NzYyNjA4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    name: "Expert Financial Guidance",
    description: "Our team of experts is here to guide you through your financial journey.",
    icon: BarChart,
    href: "/features/expert-guidance",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmluYW5jaWFsLGV4cGVydHx8fHx8fDE2ODQ3NjI2MDk&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Finonest?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Link key={feature.name} href={feature.href} className="block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
                className="bg-white rounded-lg p-6 cursor-pointer transition-all duration-200 hover:shadow-xl h-full border border-gray-200"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={feature.image || null}
                    alt={feature.name}
                    width={200}
                    height={150}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">{feature.name}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
