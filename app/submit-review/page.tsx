import { CustomerReviewForm } from "@/components/CustomerReviewForm"
import PageLayout from "@/components/PageLayout"

export default function SubmitReviewPage() {
  return (
    <PageLayout title="Submit a Review">
      <div className="max-w-2xl mx-auto">
        <p className="text-center mb-6">
          We value your feedback! Please take a moment to share your experience with Finonest.
        </p>
        <CustomerReviewForm />
      </div>
    </PageLayout>
  )
}
