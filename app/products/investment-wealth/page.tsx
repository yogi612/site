import PageLayout from "@/components/PageLayout"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, TrendingUp, Shield, BarChart } from "lucide-react"

export default function InvestmentWealthPage() {
  return (
    <PageLayout title="Investment & Wealth Management">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Grow Your Wealth with Expert Guidance</h2>
            <p className="text-lg text-gray-600">
              Finonest offers comprehensive investment and wealth management solutions tailored to your financial goals
              and risk appetite. Our expert advisors will help you build and manage a portfolio that works for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Investment Advisory</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Personalized investment strategies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Diversified portfolio recommendations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Regular portfolio reviews and rebalancing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Access to exclusive investment opportunities</span>
                </li>
              </ul>
              <Link href="/apply-now?type=investment">
                <Button className="w-full">Get Investment Advice</Button>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Wealth Management</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Comprehensive financial planning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Tax-efficient investment strategies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Retirement planning and pension solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Estate planning and wealth transfer</span>
                </li>
              </ul>
              <Link href="/apply-now?type=wealth">
                <Button className="w-full">Consult a Wealth Manager</Button>
              </Link>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Our Investment Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <BarChart className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-medium text-lg mb-2">Mutual Funds</h4>
                <p className="text-gray-600">
                  Access to a wide range of mutual funds across equity, debt, and hybrid categories.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <BarChart className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-medium text-lg mb-2">Fixed Income</h4>
                <p className="text-gray-600">Bonds, fixed deposits, and other stable income-generating instruments.</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <BarChart className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-medium text-lg mb-2">Equity Investments</h4>
                <p className="text-gray-600">Direct equity investments, IPOs, and portfolio management services.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Start Your Wealth Journey Today</h3>
            <p className="text-lg text-gray-600 mb-6">
              Schedule a consultation with our financial experts and take the first step towards financial freedom.
            </p>
            <Link href="/apply-now?type=consultation">
              <Button size="lg" className="px-8">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
