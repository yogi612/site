import PageLayout from "@/components/PageLayout"
import { CheckCircle, Clock, FileCheck, Users } from "lucide-react"

export default function FastLoanApprovalsPage() {
  return (
    <PageLayout title="Fast Loan Approvals">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <CheckCircle className="w-16 h-16 text-primary" />
        </div>

        <p className="text-lg text-center mb-12">
          Experience a streamlined loan approval process designed to get you the funds you need quickly and efficiently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Clock className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Quick Processing</h3>
            </div>
            <p className="text-gray-600">Get your loan approved within hours, not days.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <FileCheck className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Minimal Documents</h3>
            </div>
            <p className="text-gray-600">Simple documentation requirements to speed up the process.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Dedicated Support</h3>
            </div>
            <p className="text-gray-600">Personal assistance throughout your loan journey.</p>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>Our Fast Approval Process</h2>
          <ol className="space-y-4">
            <li>
              <strong>Online Application:</strong> Fill out our simple online application form with basic details.
            </li>
            <li>
              <strong>Quick Verification:</strong> Our team verifies your information within minutes.
            </li>
            <li>
              <strong>Document Upload:</strong> Submit required documents through our secure portal.
            </li>
            <li>
              <strong>Instant Assessment:</strong> Get instant feedback on your loan eligibility.
            </li>
            <li>
              <strong>Quick Disbursement:</strong> Once approved, receive funds in your account quickly.
            </li>
          </ol>

          <h2 className="mt-8">Why Our Process is Fast</h2>
          <ul className="space-y-4">
            <li>Advanced digital verification systems</li>
            <li>Automated eligibility assessment</li>
            <li>Streamlined documentation process</li>
            <li>Direct integration with banking systems</li>
            <li>Dedicated processing team</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  )
}
