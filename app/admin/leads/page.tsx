import { LeadsManager } from "@/components/admin/leads/LeadsManager"

export const metadata = {
  title: "Leads Management | Finonest Admin",
  description: "Manage and track leads from the popup form",
}

export default function LeadsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Leads Management</h1>
      <LeadsManager />
    </div>
  )
}
