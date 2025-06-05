import type { Metadata } from "next"
import { AdminLayout } from "@/components/admin/AdminLayout"
import { LeadsManager } from "@/components/admin/leads/LeadsManager"

export const metadata: Metadata = {
  title: "Leads Management | Finonest Admin",
  description: "Manage and track leads in the Finonest admin dashboard",
}

export default function LeadsPage() {
  return (
    <AdminLayout>
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Leads Management</h1>
          <p className="text-muted-foreground">Track and manage incoming leads from your website.</p>
        </div>
        <LeadsManager />
      </div>
    </AdminLayout>
  )
}
