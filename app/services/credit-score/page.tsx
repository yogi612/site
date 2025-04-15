import PageLayout from "@/components/PageLayout"
import { BarChart, TrendingUp, Shield, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    icon: BarChart,
    title: "Credit Score Analysis",
    description: "Get a detailed analysis of your credit score and factors affecting it.",
  },
  {
    icon: TrendingUp,
    title: "Score Improvement Plan",
    description: "Personalized recommendations to improve your credit score.",
  },
  {
    icon: Shield,
    title: "Credit Monitoring",
    description: "Regular monitoring of your credit report for any changes or discrepancies.",
  },
  {
    icon: CheckCircle,
    title: "Financial Advisory",
    description: "Expert advice on managing your finances and maintaining good credit health.",
  },
]

export default function CreditScorePage() {
  return (
    <PageLayout title="Credit Score & Financial Advisory">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <BarChart className="w-16 h-16 text-primary" />
        </div>
        <p className="text-lg text-center mb-12">
          Improve your credit score and financial health with our expert guidance. We help you understand your credit
          report and provide personalized recommendations for improvement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <feature.icon className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary-hover text-black" asChild>
            <Link href="/check-cibil">Check Your Credit Score</Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}
