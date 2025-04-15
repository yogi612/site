import PageLayout from "@/components/PageLayout"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, Home, Car } from "lucide-react"

export default function HomeVehicleLoansPage() {
  return (
    <PageLayout title="Home & Vehicle Loans">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Specialized Loans for Your Biggest Purchases</h2>
            <p className="text-lg text-gray-600">
              Whether you're buying your dream home or a new vehicle, Finonest offers competitive loan options with
              flexible terms and quick approvals to help you make these important purchases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Home className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Home Loans</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Loans up to ₹5 crores</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Competitive interest rates starting at 8.5%</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Repayment tenure up to 30 years</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Special rates for women borrowers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Options for both salaried and self-employed individuals</span>
                </li>
              </ul>
              <Link href="/apply-now?type=home-loan">
                <Button className="w-full">Apply for Home Loan</Button>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Car className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Vehicle Loans</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Loans up to ₹50 lakhs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Competitive interest rates starting at 9%</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Repayment tenure up to 7 years</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Quick approvals within 24-48 hours</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Minimal documentation required</span>
                </li>
              </ul>
              <Link href="/apply-now?type=vehicle-loan">
                <Button className="w-full">Apply for Vehicle Loan</Button>
              </Link>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-center">Why Choose Finonest?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-medium text-lg mb-2">Competitive Rates</h4>
                <p className="text-gray-600">
                  We partner with multiple lenders to ensure you get the best possible interest rates.
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-medium text-lg mb-2">Quick Processing</h4>
                <p className="text-gray-600">Our digital-first approach ensures faster processing and approvals.</p>
              </div>
              <div className="text-center">
                <h4 className="font-medium text-lg mb-2">Expert Guidance</h4>
                <p className="text-gray-600">
                  Our loan experts will guide you through the entire process and help you choose the right option.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Loan Calculators</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/emi-calculator?type=home"
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <Home className="h-10 w-10 text-primary mx-auto mb-3" />
                <h4 className="font-medium text-lg mb-2">Home Loan EMI Calculator</h4>
                <p className="text-gray-600 mb-4">
                  Calculate your monthly EMI payments for different home loan amounts and tenures.
                </p>
                <Button variant="outline">Calculate Home Loan EMI</Button>
              </Link>
              <Link
                href="/emi-calculator?type=vehicle"
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <Car className="h-10 w-10 text-primary mx-auto mb-3" />
                <h4 className="font-medium text-lg mb-2">Vehicle Loan EMI Calculator</h4>
                <p className="text-gray-600 mb-4">
                  Calculate your monthly EMI payments for different vehicle loan amounts and tenures.
                </p>
                <Button variant="outline">Calculate Vehicle Loan EMI</Button>
              </Link>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Apply now and take the first step towards owning your dream home or vehicle.
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
