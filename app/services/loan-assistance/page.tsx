import PageLayout from "@/components/PageLayout"
import { CreditCard, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const loanTypes = [
  {
    title: "Personal Loans",
    features: [
      "Quick approval process",
      "Competitive interest rates",
      "Flexible repayment terms",
      "Minimal documentation",
    ],
  },
  {
    title: "Business Loans",
    features: ["Working capital financing", "Equipment financing", "Business expansion loans", "Startup funding"],
  },
  {
    title: "Home Loans",
    features: [
      "Affordable interest rates",
      "Long repayment tenure",
      "Quick property approval",
      "Transparent processing",
    ],
  },
  {
    title: "Vehicle Loans",
    features: [
      "New and used vehicle financing",
      "Quick loan disbursement",
      "Flexible EMI options",
      "Minimal documentation",
    ],
  },
]

export default function LoanAssistancePage() {
  return (
    <PageLayout title="Loan Assistance">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <CreditCard className="w-16 h-16 text-primary" />
        </div>
        <p className="text-lg text-center mb-12">
          Get hassle-free loans with competitive interest rates and flexible repayment options. Our expert team will
          guide you through the entire process.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {loanTypes.map((loan) => (
            <div key={loan.title} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">{loan.title}</h3>
              <ul className="space-y-3">
                {loan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary-hover text-black" asChild>
            <Link href="/apply-now">Apply Now</Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}
