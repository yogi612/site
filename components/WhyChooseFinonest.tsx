"use client"

import { motion } from "framer-motion"
import { Check, Award, Briefcase, BarChart, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WhyChooseFinonest() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">WHY FINONEST?</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start mb-4">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Wide Range of Options</h3>
            </div>
            <p className="text-gray-600">
              Finonest India Pvt. Ltd. provides access to a diverse range of loan options from various banks and
              financial institutions. This allows borrowers to compare different loan products and choose the one that
              best suits their needs and preferences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start mb-4">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Feasible and Time-saving</h3>
            </div>
            <p className="text-gray-600">
              If you are a Client/Customer of Finonest India, you do not have to worry about approaching multiple banks
              individually, rather one can use the services of Finonest India to streamline the loan application
              process. This saves time and efforts as borrowers can submit a single application that reaches multiple
              lenders simultaneously.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start mb-4">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Increased Chance of Approval</h3>
            </div>
            <p className="text-gray-600">
              Finonest India have established relationships with multiple banks and financial institutions. They have a
              better understanding of individual lender's eligibility criteria and can match borrowers with the most
              suitable lenders. This increases the chances of loan approval, especially for Clients/Customers who may
              not meet the requirements of a single bank.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start mb-4">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Negotiation Power</h3>
            </div>
            <p className="text-gray-600">
              Due to volume of business, Finonest India have the ability to negotiate better loan terms on behalf of
              their customers. They can leverage their relationships with lenders to secure competitive interest rates,
              flexible repayment terms, and favorable loan conditions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start mb-4">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Expertise and Guidance</h3>
            </div>
            <p className="text-gray-600">
              We at Finonest India employ financial experts who possess in-depth knowledge of different loan products
              and their intricacies. We can provide borrowers with professional guidance and advice throughout the loan
              application process, helping them make precise decisions.
            </p>
          </motion.div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
            WHAT FINONEST INDIA PROVIDES TO CUSTOMERS
          </h3>
          <h4 className="text-xl font-semibold text-center text-primary mb-6">OUR PROMISE TO OUR CLIENTS</h4>

          <div className="space-y-4">
            <div className="flex items-start">
              <Check className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">Extensive Loan Product Portfolio:</span> Finonest India works in to with
                multiple banks and financial institutions, offering a wide range of loan products. This allows us to
                cater to diverse customer requirements, including personal loans, home loans, business loans, and more.
              </p>
            </div>

            <div className="flex items-start">
              <Check className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">Personalized Service:</span> Finonest India focus on building strong
                relationships with clients. We offer personalized assistance and guidance, understanding the unique
                financial needs and goals of each borrower. This personalized approach ensures that customers receive
                tailored loan solutions.
              </p>
            </div>

            <div className="flex items-start">
              <Check className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">Efficient Loan Processing:</span> Finonest India is well-versed in the
                loan application process and understand the documentation requirements of various lenders. We assist
                borrowers in completing the necessary paperwork accurately and efficiently, ensuring a smooth loan
                processing experience.
              </p>
            </div>

            <div className="flex items-start">
              <Check className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">Strong Industry Knowledge:</span> Finonest India stays updated with the
                latest trends, policies, and regulations in the financial industry. This knowledge enables us to provide
                accurate and up-to-date information to borrowers, helping them make well-informed decisions regarding
                their loan applications.
              </p>
            </div>

            <div className="flex items-start">
              <Check className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">Local Market Expertise:</span> Finonest India Pvt. Ltd. have a strong
                presence in specific regions or local markets. They possess a deep understanding of the local market
                dynamics, customer preferences, and competitive landscape. This knowledge allows us to better serve
                borrowers by connecting them with lenders who are active in their area and familiar with the local
                context.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
            START YOUR OWN BUSINESS. BE OUR DSA PARTNERS
          </h3>

          <p className="text-gray-700 mb-6 text-center max-w-4xl mx-auto">
            Finonest India Pvt. Ltd. Has a Complex FinTech platform integrated with leading banks and NBFCs. We offer
            achievement offerings for a extensive range of financial products inclusive of New Car Loans, Used Car
            Loans, Personal Loans, Business Loans and Home Loans and many others. As a associate, our partners get
            access to our platform through the companion cell app and accomplice internet site portal. We permit our
            partners to fulfill all of their clients' financial desires. Our partners get hold of the pleasant
            commission in the marketplace through our Privilege Partner Program.
          </p>

          <p className="text-gray-700 mb-8 text-center max-w-4xl mx-auto">
            By integrating its enormous market know-how with the today's trends and trends in Digital era, Finonest
            India Pvt. Ltd. facilitates its partners to find the nice monetary products to satisfy their customer's
            desires. Every Month, Finonest India's 40+ partners disburse greater than 15 Crore rupees in loans.
          </p>

          <div className="text-center">
            <Link href="/become-partner">
              <Button size="lg" className="px-8">
                Become Our Partner
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
