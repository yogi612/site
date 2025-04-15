import PageLayout from "@/components/PageLayout"
import { ApplyNowForm } from "@/components/ApplyNowForm"

export default function ApplyNowPage() {
  return (
    <PageLayout title="Apply Now">
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-center mb-8">
          Take the first step towards your financial goals. Fill out the form below and our team will get in touch with
          you shortly.
        </p>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <ApplyNowForm />
        </div>
      </div>
    </PageLayout>
  )
}
