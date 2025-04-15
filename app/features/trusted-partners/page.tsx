import PageLayout from "@/components/PageLayout"
import { Users, Building, Award, HandshakeIcon } from "lucide-react"
import Image from "next/image"

export default function TrustedPartnersPage() {
  const partners = [
    { name: "Bank 1", logo: "/placeholder.svg" },
    { name: "Bank 2", logo: "/placeholder.svg" },
    { name: "Bank 3", logo: "/placeholder.svg" },
    { name: "Bank 4", logo: "/placeholder.svg" },
  ]

  return (
    <PageLayout title="Trusted Financial Partners">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Users className="w-16 h-16 text-primary" />
        </div>

        <p className="text-lg text-center mb-12">
          We partner with India's leading financial institutions to provide you with the best financial solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Building className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Leading Banks</h3>
            </div>
            <p className="text-gray-600">Partnerships with top financial institutions.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Verified Partners</h3>
            </div>
            <p className="text-gray-600">All partners are thoroughly vetted and verified.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <HandshakeIcon className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Strong Relations</h3>
            </div>
            <p className="text-gray-600">Long-standing relationships for better service.</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Banking Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <div key={partner.name} className="flex items-center justify-center">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>Partner Selection Criteria</h2>
          <ul className="space-y-4">
            <li>Strong financial standing and market reputation</li>
            <li>Commitment to customer service excellence</li>
            <li>Competitive rates and terms</li>
            <li>Digital-first approach</li>
            <li>Robust risk management practices</li>
          </ul>

          <h2 className="mt-8">Benefits of Our Partnerships</h2>
          <ul className="space-y-4">
            <li>Access to exclusive financial products</li>
            <li>Preferential rates for our customers</li>
            <li>Faster processing of applications</li>
            <li>Enhanced customer support</li>
            <li>Wider range of financial solutions</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  )
}
