import { SignupForm } from "@/components/SignupForm"
import { PageLayout } from "@/components/PageLayout"

export const metadata = {
  title: "Sign Up - Finonest",
  description: "Create your Finonest account to access financial services and products",
}

export default function SignupPage() {
  return (
    <PageLayout>
      <div className="container mx-auto py-12">
        <SignupForm />
      </div>
    </PageLayout>
  )
}
