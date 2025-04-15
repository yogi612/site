import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Landmark, Home, BarChart2 } from "lucide-react"
import PageLayout from "@/components/PageLayout"

const products = [
  {
    icon: Landmark,
    title: "Loan Assistance",
    description: "Personal, Business, Home, and Vehicle Loans",
    link: "/products/loan-assistance",
  },
  {
    icon: BarChart2,
    title: "Credit Score & Financial Advisory",
    description: "Improve your credit score and financial health",
    link: "/products/credit-score",
  },
  {
    icon: Home,
    title: "Home & Vehicle Loans",
    description: "Specialized loans for your biggest purchases",
    link: "/products/home-vehicle-loans",
  },
  {
    icon: BarChart2,
    title: "Investment & Wealth Management",
    description: "Grow your wealth with expert investment advice",
    link: "/products/investment-wealth",
  },
]

export default function ProductsPage() {
  return (
    <PageLayout title="Our Products">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Link href={product.link} key={index} className="block h-full">
              <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex flex-col items-center text-center space-y-4 flex-grow">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <product.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{product.title}</h3>
                    <p className="text-gray-600">{product.description}</p>
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
