import PageLayout from "@/components/PageLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ApplyJobForm from "@/components/ApplyJobForm"

export default function ApplyJobPage() {
  return (
    <PageLayout title="Apply for a Position">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Job Application Form</CardTitle>
            <CardDescription>Please fill out the form below to apply for a position at Finonest.</CardDescription>
          </CardHeader>
          <CardContent>
            <ApplyJobForm />
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  )
}
