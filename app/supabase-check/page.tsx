import { Suspense } from "react"
import PageLayout from "@/components/PageLayout"
import SupabaseDiagnostics from "./diagnostics"
import { LoadingSpinner } from "@/components/LoadingSpinner"

export const metadata = {
  title: "Supabase Connection Diagnostics",
  description: "Check Supabase connection and database tables",
}

export default function SupabaseCheckPage() {
  return (
    <PageLayout title="Supabase Connection Diagnostics">
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Supabase Connection Diagnostics</h1>

          <div className="bg-white rounded-lg shadow-md p-6">
            <Suspense
              fallback={
                <div className="flex justify-center items-center h-64">
                  <LoadingSpinner size="lg" />
                  <span className="ml-3">Loading diagnostics...</span>
                </div>
              }
            >
              <SupabaseDiagnostics />
            </Suspense>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
