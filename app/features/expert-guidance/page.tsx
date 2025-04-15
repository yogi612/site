import PageLayout from "@/components/PageLayout"
import { BarChart, BookOpen, MessageSquare, Target } from "lucide-react"

export default function ExpertGuidancePage() {
  return (
    <PageLayout title="Expert Financial Guidance">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <BarChart className="w-16 h-16 text-primary" />
        </div>

        <p className="text-lg text-center mb-12">
          Get personalized financial advice from our team of experienced professionals to achieve your financial goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Goal Planning</h3>
            </div>
            <p className="text-gray-600">Customized strategies to achieve your financial goals.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <BookOpen className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Financial Education</h3>
            </div>
            <p className="text-gray-600">Regular workshops and educational resources.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <MessageSquare className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Expert Consultation</h3>
            </div>
            <p className="text-gray-600">One-on-one sessions with financial experts.</p>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>Our Advisory Services</h2>
          <ul className="space-y-4">
            <li>Personal financial planning</li>
            <li>Investment strategy development</li>
            <li>Retirement planning</li>
            <li>Tax optimization advice</li>
            <li>Risk management consultation</li>
          </ul>

          <h2 className="mt-8">Why Choose Our Guidance</h2>
          <ul className="space-y-4">
            <li>Experienced financial advisors</li>
            <li>Personalized approach to each client</li>
            <li>Regular portfolio reviews</li>
            <li>Up-to-date market insights</li>
            <li>Comprehensive financial solutions</li>
          </ul>

          <h2 className="mt-8">Educational Resources</h2>
          <ul className="space-y-4">
            <li>Financial planning workshops</li>
            <li>Investment seminars</li>
            <li>Online learning modules</li>
            <li>Market analysis reports</li>
            <li>Personal finance guides</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  )
}
