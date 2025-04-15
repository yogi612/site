import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart2, Calculator, FileText } from "lucide-react"
import PageLayout from "@/components/PageLayout"

const tools = [
  {
    icon: BarChart2,
    title: "Check CIBIL Score",
    description: "Check your credit score for free and get personalized recommendations",
    link: "/check-cibil",
  },
  {
    icon: Calculator,
    title: "EMI Calculator",
    description: "Calculate your monthly EMI payments for various loan amounts and tenures",
    link: "/emi-calculator",
  },
  {
    icon: FileText,
    title: "Compare Loans",
    description: "Compare different loan options to find the best one for your needs",
    link: "/compare-loans",
  },
]

export default function ToolsPage() {
  return (
    <PageLayout title="Financial Tools">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Financial Tools</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Use our free financial tools to make informed decisions about your finances and plan your financial future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tools.map((tool, index) => (
            <Link href={tool.link} key={index} className="block h-full">
              <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex flex-col items-center text-center space-y-4 flex-grow">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <tool.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{tool.title}</h3>
                    <p className="text-gray-600">{tool.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 p-6 rounded-lg max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center">Why Use Our Financial Tools?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="font-medium text-lg mb-2">Make Informed Decisions</h3>
              <p className="text-gray-600">
                Our tools provide accurate calculations to help you make better financial decisions.
              </p>
            </div>
            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="font-medium text-lg mb-2">Plan Your Budget</h3>
              <p className="text-gray-600">Understand your repayment obligations before committing to a loan.</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="font-medium text-lg mb-2">Improve Credit Score</h3>
              <p className="text-gray-600">Get insights on your credit health and tips to improve your score.</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow">
              <h3 className="font-medium text-lg mb-2">Compare Options</h3>
              <p className="text-gray-600">
                Compare different loan products to find the most suitable one for your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
