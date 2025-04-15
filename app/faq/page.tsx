import Image from "next/image"
import PageLayout from "@/components/PageLayout"

const faqs = [
  {
    question: "What types of loans does Finonest offer?",
    answer:
      "Finonest offers a variety of loans including personal loans, business loans, home loans, and vehicle loans. Each loan type is designed to cater to different financial needs and situations.",
  },
  {
    question: "How can I check my loan eligibility?",
    answer:
      "You can check your loan eligibility by using our online eligibility calculator or by contacting our customer support team. We consider factors such as your income, credit score, and existing financial commitments.",
  },
  {
    question: "What documents are required for a loan application?",
    answer:
      "The required documents may vary depending on the type of loan, but generally include proof of identity, address proof, income proof, and bank statements. For business loans, additional documents like business registration and financial statements may be required.",
  },
  {
    question: "How long does the loan approval process take?",
    answer:
      "Our loan approval process is designed to be quick and efficient. Typically, you can expect a decision within 24-48 hours of submitting a complete application with all required documents.",
  },
]

export default function FAQPage() {
  return (
    <PageLayout title="Frequently Asked Questions">
      <div className="space-y-8">
        <Image
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3"
          alt="Finonest FAQ"
          width={1000}
          height={500}
          className="rounded-lg shadow-md mb-8"
        />
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">{faq.question}</h2>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
        <div className="bg-primary/10 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Still have questions?</h2>
          <p className="mb-4">
            If you couldn't find the answer to your question, please don't hesitate to contact our support team.
          </p>
          <Image
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=500&ixlib=rb-4.0.3"
            alt="Contact support"
            width={500}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </PageLayout>
  )
}
