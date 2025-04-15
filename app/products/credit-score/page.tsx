import PageLayout from "@/components/PageLayout"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, TrendingUp, AlertCircle, FileText } from "lucide-react"

export default function CreditScorePage() {
  return (
    <PageLayout title="Credit Score & Financial Advisory">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Improve Your Credit Score & Financial Health</h2>
            <p className="text-lg text-gray-600">
              Your credit score is a vital part of your financial health. Finonest offers comprehensive credit score
              analysis and improvement strategies to help you achieve your financial goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FileText className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Credit Score Analysis</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Comprehensive credit report analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Identification of negative factors affecting your score</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Personalized improvement recommendations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Regular monitoring and progress tracking</span>
                </li>
              </ul>
              <Link href="/check-cibil">
                <Button className="w-full">Check Your CIBIL Score</Button>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Financial Advisory</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Holistic financial health assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Debt management and consolidation strategies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Budgeting and savings plans</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Financial goal setting and achievement plans</span>
                </li>
              </ul>
              <Link href="/apply-now?type=financial-advisory">
                <Button className="w-full">Get Financial Advice</Button>
              </Link>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-center">Understanding Your Credit Score</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-lg mb-3">What Affects Your Credit Score?</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Payment history (35% impact)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Credit utilization (30% impact)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Length of credit history (15% impact)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Credit mix (10% impact)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>New credit inquiries (10% impact)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-lg mb-3">How to Improve Your Score</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Pay all bills on time</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Keep credit card balances low</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Don't close old credit accounts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Limit new credit applications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Regularly check your credit report for errors</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Take Control of Your Financial Future</h3>
            <p className="text-lg text-gray-600 mb-6">
              Start your journey to better credit and financial health today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/check-cibil">
                <Button size="lg">Check Your CIBIL Score</Button>
              </Link>
              <Link href="/apply-now?type=financial-advisory">
                <Button size="lg" variant="outline">
                  Schedule Advisory Session
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
