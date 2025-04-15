import { Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import PageLayout from "@/components/PageLayout"

export default function BusinessLoansPage() {
  return (
    <PageLayout title="Business Loans">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <Briefcase className="w-16 h-16 mx-auto text-primary mb-4" />
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Business Loans</h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Fuel your business growth with our flexible business loan solutions tailored to your needs.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-gray-700">Loans up to ₹2 crores</li>
            <li className="text-gray-700">Competitive interest rates starting at 12.99%</li>
            <li className="text-gray-700">Flexible repayment tenure of 12-84 months</li>
            <li className="text-gray-700">Minimal documentation for existing businesses</li>
            <li className="text-gray-700">Quick approval within 3-5 business days</li>
            <li className="text-gray-700">Both secured and unsecured loan options available</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria</h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-gray-700">Business age of at least 2 years</li>
            <li className="text-gray-700">Minimum annual turnover of ₹50 lakhs</li>
            <li className="text-gray-700">Profitable business for at least 1 financial year</li>
            <li className="text-gray-700">Good credit score (700+) for the business or promoters</li>
            <li className="text-gray-700">Valid business registration and licenses</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Required Documents</h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-gray-700">Business registration documents</li>
            <li className="text-gray-700">GST registration (if applicable)</li>
            <li className="text-gray-700">Business PAN card</li>
            <li className="text-gray-700">Last 2 years' audited financial statements</li>
            <li className="text-gray-700">Last 6 months' bank statements</li>
            <li className="text-gray-700">KYC documents of directors/partners/proprietor</li>
            <li className="text-gray-700">Business proof of address</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li className="text-gray-700">Fill out our business loan application form</li>
            <li className="text-gray-700">Submit required business documents</li>
            <li className="text-gray-700">Schedule a meeting with our business loan expert</li>
            <li className="text-gray-700">Receive approval and disbursement of funds</li>
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
