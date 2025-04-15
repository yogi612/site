import PageLayout from "@/components/PageLayout"
import { PiggyBank, TrendingUp, Shield, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: TrendingUp,
    title: "Portfolio Management",
    description: "Expert management of your investment portfolio to maximize returns while managing risk.",
  },
  {
    icon: Shield,
    title: "Wealth Protection",
    description: "Strategies to protect and preserve your wealth for future generations.",
  },
  {
    icon: BarChart,
    title: "Investment Advisory",
    description: "Personalized investment advice based on your financial goals and risk appetite.",
  },
  {
    icon: PiggyBank,
    title: "Retirement Planning",
    description: "Comprehensive retirement planning to ensure financial security in your golden years.",
  },
]

export default function InvestmentWealthPage() {
  return (
    <PageLayout title="Investment & Wealth Management">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <PiggyBank className="w-16 h-16 text-primary" />
        </div>
        <p className="text-lg text-center mb-12">
          Grow and protect your wealth with our expert guidance. We offer comprehensive investment and wealth management
          solutions tailored to your financial goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <service.icon className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary-hover text-black" asChild>
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}
