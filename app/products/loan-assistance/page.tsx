import PageLayout from "@/components/PageLayout"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

export default function LoanAssistancePage() {
  return (
    <PageLayout title="Loan Assistance">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Get the Right Loan for Your Needs</h2>
            <p className="text-lg text-gray-600">
              Finonest offers a wide range of loan options to meet your personal and business needs. Our expert team
              will guide you through the entire process, from application to approval.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Personal Loans</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Loans up to ₹25 lakhs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Competitive interest rates starting at 10.5%</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Flexible repayment options from 12 to 60 months</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Minimal documentation with quick approval</span>
                </li>
              </ul>
              <Link href="/apply-now?type=personal">
                <Button className="w-full">Apply for Personal Loan</Button>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Business Loans</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Loans up to ₹2 crores</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Competitive interest rates starting at 12%</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Flexible repayment options tailored to your business cycle</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Collateral and non-collateral options available</span>
                </li>
              </ul>
              <Link href="/apply-now?type=business">
                <Button className="w-full">Apply for Business Loan</Button>
              </Link>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-center">Why Choose Finonest for Your Loan Needs?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-medium text-lg mb-2">Fast Approvals</h4>
                <p className="text-gray-600">
                  Get your loan approved in as little as 24 hours with our streamlined process.
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-medium text-lg mb-2">Competitive Rates</h4>
                <p className="text-gray-600">
                  We partner with multiple lenders to ensure you get the best possible interest rates.
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-medium text-lg mb-2">Expert Guidance</h4>
                <p className="text-gray-600">
                  Our loan experts will guide you through the entire process and help you choose the right option.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Apply now and take the first step towards securing the funds you need.
            </p>
            <Link href="/apply-now">
              <Button size="lg" className="px-8">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
