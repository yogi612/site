import PageLayout from "@/components/PageLayout"
import { Home, Car, Calculator, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const loanTypes = [
  {
    icon: Home,
    title: "Home Loans",
    features: [
      "Competitive interest rates",
      "Up to 80% financing",
      "Flexible repayment terms",
      "Quick approval process",
    ],
  },
  {
    icon: Car,
    title: "Vehicle Loans",
    features: [
      "New and used vehicle financing",
      "Attractive interest rates",
      "Quick loan disbursement",
      "Minimal documentation",
    ],
  },
]

const benefits = [
  {
    icon: Calculator,
    title: "Easy EMI Calculator",
    description: "Plan your loan EMIs with our easy-to-use calculator.",
  },
  {
    icon: Clock,
    title: "Quick Processing",
    description: "Fast loan processing and disbursement.",
  },
]

export default function HomeVehicleLoansPage() {
  return (
    <PageLayout title="Home & Vehicle Loans">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Home className="w-16 h-16 text-primary" />
        </div>
        <p className="text-lg text-center mb-12">
          Get specialized loans for your biggest purchases with competitive interest rates and flexible repayment
          options.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {loanTypes.map((loan) => (
            <div key={loan.title} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <loan.icon className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">{loan.title}</h3>
              </div>
              <ul className="space-y-2">
                {loan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <benefit.icon className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center space-x-4">
          <Button size="lg" className="bg-primary hover:bg-primary-hover text-black" asChild>
            <Link href="/apply-now">Apply Now</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/emi-calculator">Calculate EMI</Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}
