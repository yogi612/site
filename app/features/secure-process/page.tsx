import PageLayout from "@/components/PageLayout"
import { Shield, Lock, FileCheck, Eye } from "lucide-react"

export default function SecureProcessPage() {
  return (
    <PageLayout title="Secure & Transparent Process">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Shield className="w-16 h-16 text-primary" />
        </div>

        <p className="text-lg text-center mb-12">
          Your security is our top priority. We ensure complete transparency and protection of your data throughout the
          process.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Lock className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Data Security</h3>
            </div>
            <p className="text-gray-600">Bank-grade encryption for all your sensitive information.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Eye className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Full Transparency</h3>
            </div>
            <p className="text-gray-600">Clear communication at every step of the process.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <FileCheck className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Verified Process</h3>
            </div>
            <p className="text-gray-600">RBI-compliant procedures and documentation.</p>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>Our Security Measures</h2>
          <ul className="space-y-4">
            <li>256-bit SSL encryption for all data transmission</li>
            <li>Multi-factor authentication for account access</li>
            <li>Regular security audits and compliance checks</li>
            <li>Secure document storage and handling</li>
            <li>Privacy-first data management policies</li>
          </ul>

          <h2 className="mt-8">Transparency Commitment</h2>
          <ul className="space-y-4">
            <li>Clear fee structure with no hidden charges</li>
            <li>Regular updates on application status</li>
            <li>Detailed breakdown of terms and conditions</li>
            <li>Easy access to all documentation</li>
            <li>24/7 customer support for queries</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  )
}
