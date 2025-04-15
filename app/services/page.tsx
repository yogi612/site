import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Landmark, Home, PiggyBank } from "lucide-react"
import PageLayout from "@/components/PageLayout"
import { BarChart2 } from "lucide-react"

const services = [
  {
    icon: Landmark,
    title: "Loan Assistance",
    description: "Personal, Business, Home, and Vehicle Loans",
    link: "/services/loan-assistance",
  },
  {
    icon: PiggyBank,
    title: "Investment & Wealth Management",
    description: "Grow your wealth with expert guidance",
    link: "/services/investment-wealth",
  },
  {
    icon: BarChart2,
    title: "Credit Score & Financial Advisory",
    description: "Improve your credit score and financial health",
    link: "/services/credit-score",
  },
  {
    icon: Home,
    title: "Home & Vehicle Loans",
    description: "Specialized loans for your biggest purchases",
    link: "/services/home-vehicle-loans",
  },
]

export default function ServicesPage() {
  return (
    <PageLayout title="Our Services">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link href={service.link} key={index} className="block h-full">
              <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex flex-col items-center text-center space-y-4 flex-grow">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
