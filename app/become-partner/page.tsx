import type { Metadata } from "next"
import { BecomePartnerForm } from "@/components/BecomePartnerForm"
import PageLayout from "@/components/PageLayout"
import { CheckCircle, Award, TrendingUp, Users, Briefcase, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Become a Partner | Finonest",
  description:
    "Join Finonest as a partner and grow your business with us. We offer competitive commissions, training, and support.",
}

export default function BecomePartnerPage() {
  return (
    <PageLayout title="Partner With Finonest">
      <div className="bg-gradient-to-r from-primary/90 to-primary text-white py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Partner With Finonest</h1>
              <p className="text-lg md:text-xl opacity-90 mb-6">
                Join one of Rajasthan's fastest-growing financial services networks and unlock new revenue streams for
                your business.
              </p>
              <div className="mt-8">
                <BecomePartnerForm />
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/diverse-partnership-agreement.png"
                alt="Business Partnership"
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Why Partner With Us?</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Finonest offers one of the most competitive partnership programs in the financial services industry.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="h-10 w-10 text-primary" />,
                title: "High Commissions",
                description:
                  "Earn industry-leading commissions on every successful loan referral, with timely payouts.",
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
                title: "Quick Approvals",
                description: "Our streamlined process ensures faster loan approvals, leading to quicker commissions.",
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Recognition Program",
                description: "Top-performing partners receive additional bonuses, awards, and exclusive benefits.",
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Dedicated Support",
                description: "Get a dedicated relationship manager to help you maximize your partnership potential.",
              },
              {
                icon: <Briefcase className="h-10 w-10 text-primary" />,
                title: "Business Growth",
                description: "Access to multiple loan products allows you to serve a wider customer base.",
              },
              {
                icon: <Shield className="h-10 w-10 text-primary" />,
                title: "Trusted Brand",
                description:
                  "Partner with one of Rajasthan's top 3 used car loan providers with a proven track record.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Partnership Process</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Getting started as a Finonest partner is simple and straightforward.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Apply",
                description: "Fill out our partner application form with your business details.",
              },
              {
                step: "02",
                title: "Verification",
                description: "Our team will verify your information and contact you within 48 hours.",
              },
              {
                step: "03",
                title: "Onboarding",
                description: "Complete a brief training session and receive your partner credentials.",
              },
              {
                step: "04",
                title: "Start Earning",
                description: "Begin referring clients and earn commissions on successful loans.",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-primary text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-[calc(100%-24px)] w-[calc(100%-24px)] h-0.5 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Partner Testimonials</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Hear what our existing partners have to say about working with Finonest.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Sharma",
                position: "Financial Advisor, Jaipur",
                testimonial:
                  "Partnering with Finonest has been a game-changer for my advisory business. The quick loan approvals and competitive rates have helped me serve my clients better.",
                rating: 5,
              },
              {
                name: "Priya Mehta",
                position: "Car Dealership Owner, Udaipur",
                testimonial:
                  "As a used car dealer, Finonest's quick loan processing has helped me close more sales. Their team is responsive and the commission structure is excellent.",
                rating: 5,
              },
              {
                name: "Vikram Singh",
                position: "Insurance Agent, Jodhpur",
                testimonial:
                  "I've been able to offer my insurance clients additional financial services through Finonest. It's been a perfect complementary business with great returns.",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.testimonial}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join our network of successful partners and start earning additional income today.
          </p>
          <BecomePartnerForm />
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Get answers to common questions about our partnership program.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Who can become a Finonest partner?",
                answer:
                  "Financial advisors, insurance agents, car dealerships, real estate agents, and other professionals in related fields can become Finonest partners.",
              },
              {
                question: "How much can I earn as a partner?",
                answer:
                  "Commission rates vary by product, but partners typically earn between 0.5% to 2% of the loan amount for successful referrals.",
              },
              {
                question: "Is there any cost to join the partner program?",
                answer:
                  "No, there is no cost to join our partner program. We provide all necessary training and marketing materials free of charge.",
              },
              {
                question: "How quickly are commissions paid?",
                answer: "Commissions are processed within 7 business days after the loan is disbursed to the customer.",
              },
              {
                question: "Do I need to have financial experience?",
                answer:
                  "While financial experience is helpful, it's not required. We provide comprehensive training to all our partners.",
              },
              {
                question: "What support will I receive as a partner?",
                answer:
                  "You'll receive a dedicated relationship manager, marketing materials, regular training sessions, and access to our partner portal.",
              },
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
