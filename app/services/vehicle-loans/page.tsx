import { Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import PageLayout from "@/components/PageLayout"

export default function VehicleLoansPage() {
  return (
    <PageLayout title="Vehicle Loans">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <Car className="w-16 h-16 mx-auto text-primary mb-4" />
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Vehicle Loans</h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Drive your dream vehicle with our affordable and quick vehicle loan options.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-gray-700">Loans up to ₹75 lakhs for cars and ₹10 lakhs for two-wheelers</li>
            <li className="text-gray-700">Competitive interest rates starting at 9.50%</li>
            <li className="text-gray-700">Flexible repayment tenure of up to 7 years</li>
            <li className="text-gray-700">Up to 100% on-road price financing for select models</li>
            <li className="text-gray-700">Quick approval within 24 hours</li>
            <li className="text-gray-700">No hidden charges</li>
            <li className="text-gray-700">Special offers for existing customers</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria</h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-gray-700">Indian citizen aged 21-65 years</li>
            <li className="text-gray-700">Salaried individuals with at least 1 year of work experience</li>
            <li className="text-gray-700">Self-employed professionals with at least 2 years of business continuity</li>
            <li className="text-gray-700">Minimum monthly income of ₹25,000</li>
            <li className="text-gray-700">Good credit score (700+)</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Required Documents</h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-gray-700">Identity proof (Aadhaar, PAN, Voter ID)</li>
            <li className="text-gray-700">Address proof (Passport, Utility bills)</li>
            <li className="text-gray-700">Income proof (Salary slips, IT returns)</li>
            <li className="text-gray-700">Bank statements for the last 3 months</li>
            <li className="text-gray-700">Proforma invoice of the vehicle</li>
            <li className="text-gray-700">Passport-sized photographs</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li className="text-gray-700">Fill out our vehicle loan application form</li>
            <li className="text-gray-700">Submit required documents</li>
            <li className="text-gray-700">Receive loan approval</li>
            <li className="text-gray-700">Disbursement directly to the dealer</li>
          </ol>
        </div>

        <div className="text-center">
          <Link href="/apply-now" passHref>
            <Button size="lg">Apply Now</Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}
