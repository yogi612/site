import { notFound } from "next/navigation"
import { Landmark, Home, PiggyBank, BarChart2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import PageLayout from "@/components/PageLayout"

const services = {
  "loan-assistance": {
    title: "Loan Assistance",
    description: "Get hassle-free loans with competitive interest rates and flexible repayment options.",
    icon: Landmark,
    features: [
      "Personal Loans",
      "Business Loans",
      "Home Loans",
      "Vehicle Loans",
      "Quick approval process",
      "Competitive interest rates",
    ],
  },
  "investment-wealth": {
    title: "Investment & Wealth Management",
    description: "Expert guidance for wealth creation and portfolio management.",
    icon: PiggyBank,
    features: [
      "Personalized investment strategies",
      "Diversified portfolio options",
      "Regular performance reviews",
      "Tax-efficient investing",
    ],
  },
  "credit-score": {
    title: "Credit Score & Financial Advisory",
    description: "Improve your credit score and get expert financial advice.",
    icon: BarChart2,
    features: [
      "Free credit score analysis",
      "Credit improvement plans",
      "Financial health check-ups",
      "Debt consolidation advice",
    ],
  },
  "home-vehicle-loans": {
    title: "Home & Vehicle Loans",
    description: "Specialized loans for your biggest purchases with great terms.",
    icon: Home,
    features: [
      "Competitive interest rates",
      "Flexible tenure options",
      "Quick and easy application process",
      "Expert guidance throughout the process",
    ],
  },
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services]

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <PageLayout title={service.title}>
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <Icon className="w-16 h-16 mx-auto text-primary mb-4" />
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{service.title}</h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">{service.description}</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="text-gray-700">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li className="text-gray-700">Fill out our online application form</li>
            <li className="text-gray-700">Submit required documents</li>
            <li className="text-gray-700">Wait for our quick approval process</li>
            <li className="text-gray-700">Receive your funds or start your service</li>
          </ol>
        </div>

        <div className="text-center">
          <Link href="/apply-now" passHref>
            <Button size="lg">Apply Now</Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}
